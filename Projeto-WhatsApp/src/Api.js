import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, addDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export default {
    googlePopup: async () => {
        let result = await signInWithPopup(auth, googleProvider);
        return result;
    },
    addUser: async (u) => {
        const userDoc = doc(db, 'users', u.id);
        await setDoc(userDoc, {
            name: u.name,
            avatar: u.avatar
        }, { merge: true });
    },
    getContactList: async (userId) => {
        let list = [];
        let results = await getDocs(collection(db, 'users'));
        results.forEach(result => {
            let data = result.data();
            if (result.id !== userId) {
                list.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                });
            }
        });
        return list;
    },
    addNewChat: async (user, user2) => {
        let newChatRef = await addDoc(collection(db, 'chats'), {
            messages: [],
            users: [user.id, user2.id]
        });

        await updateDoc(doc(db, 'users', user.id), {
            chats: arrayUnion({
                chatId: newChatRef.id,
                title: user2.name,
                image: user2.avatar,
                with: user2.id
            })
        });

        await updateDoc(doc(db, 'users', user2.id), {
            chats: arrayUnion({
                chatId: newChatRef.id,
                title: user.name,
                image: user.avatar,
                with: user.id
            })
        });
    },
    onChatList: (userId, setChatList) => {
        return onSnapshot(doc(db, 'users', userId), (docSnapshot) => {
            if (docSnapshot.exists()) {
                let data = docSnapshot.data();
                if (data.chats) {
                    let chats = [...data.chats]

                    chats.sort((a, b) =>{
                        if(a.lastMessageDate === undefined || b.lastMessageDate === undefined) {
                            return -1
                        }
                        if(a.lastMessageDate.seconds < b.lastMessageDate.seconds) {
                            return 1
                        } else {
                            return -1
                        }
                    })

                    setChatList(chats);
                }
            }
        });
    },
    onChatContent: (chatId, setList, setUsers) => {
        return onSnapshot(doc(db, 'chats', chatId), (docSnapshot) => {
            if (docSnapshot.exists()) {
                let data = docSnapshot.data()
                setList(data.messages || [])
                setUsers(data.users)
            }
        })
    },
    sendMessage: async (chatData, userId, type, body, users) => {
        let now = new Date()

        await updateDoc(doc(db, 'chats', chatData.chatId), {
            messages: arrayUnion({
                type,
                author: userId,
                body,
                date: now
            })
        })

        for (let i in users) {
            let u = await getDoc(doc(db, 'users', users[i]))
            if (u.exists()) {
                let uData = u.data()
                if (uData.chats) {
                    let chats = [...uData.chats]

                    for (let e in chats) {
                        if (chats[e].chatId == chatData.chatId) {
                            chats[e].lastMessage = body
                            chats[e].lastMessageDate = now
                        }
                    }

                    await updateDoc(doc(db, 'users', users[i]), {
                        chats
                    })
                }
            }
        }
    }
}