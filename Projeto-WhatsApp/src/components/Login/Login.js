import React from 'react';
import './Login.css'
import Api from '../../Api';

export default ({ onReceive }) => {
    const handleGoogleLogin = async () => {
        let result = await Api.googlePopup()
        if (result) {
            onReceive(result.user);
        } else {
            alert('Erro!')
        }
    }

    return (
        <div className='login'>
            <button onClick={handleGoogleLogin}>Logar com Google</button>
        </div>
    )
}