import React, { useEffect, useState } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';

const App = () => {
    const [uploading, setUploading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState<Photo[]>([])

    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true)
            setPhotos(await Photos.getAll())
            setLoading(false)
        }
        getPhotos()
    }, [])

    const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget

        const formData = new FormData(e.currentTarget)
        const file = formData.get('image') as File
        if (file && file.size > 0) {
            setUploading(true)
            let result = await Photos.insert(file)
            setUploading(false)

            if (result instanceof Error) {
                alert(`${result.name} - ${result.message}`)
            } else {
                let newPhotoList = [...photos]
                newPhotoList.push(result)
                setPhotos(newPhotoList)

                form.reset()
            }
        } else {
            alert('Selecione algum arquivo.')
            return
        }
    }

    const onDelete = (name: string) => {
        let newPhotoList = photos.filter(item => item.name !== name)
        setPhotos(newPhotoList)
    }

    return (
        <C.Container>
            <C.Area>
                <C.Header>Galeria de Fotos</C.Header>

                {/* Área de upload */}
                <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                    <input type="file" name="image" />
                    <input type="submit" value="Enviar" disabled={uploading} />
                    {uploading && 'Enviando...'}
                </C.UploadForm>

                {/* Lista de fotos */}
                {loading &&
                    <C.ScreenWarning>
                        <div className='loader'></div>
                        <div>Carregando...</div>
                    </C.ScreenWarning>
                }
                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item, index) => (
                            <PhotoItem
                                key={index}
                                url={item.url}
                                name={item.name}
                                onDelete={onDelete}
                            />
                        ))}
                    </C.PhotoList>
                }
                {!loading && photos.length === 0 &&
                    <C.ScreenWarning>Não há fotos cadastradas.</C.ScreenWarning>
                }
            </C.Area>
        </C.Container>
    )
}

export default App;