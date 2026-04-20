import { useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import React, { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '' && state.name.length >= 2) {
            navigate('/step2')
        } else {
            alert("Preencha os dados corretamente")
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.code.toLowerCase() === 'enter') {
            handleNextStep()
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onKeyUp={handleKeyUp}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
