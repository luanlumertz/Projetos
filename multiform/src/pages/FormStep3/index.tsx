import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])

    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            navigate('/step4')
        } else {
            alert('Preencha os dados')
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            handleNextStep()
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contanto.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                        onKeyUp={handleKeyUp}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                        onKeyUp={handleKeyUp}
                    />
                </label>

                <Link to={'/step2'} className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
