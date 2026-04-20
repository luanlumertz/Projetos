import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/FormContext';
import * as C from './styles';
import { useEffect, useState } from 'react';

export const FormStep4 = () => {
    const [isCompleted, setIsCompleted] = useState(false)
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    const handleNextStep = () => {
        console.log(state)
        alert('Cadastro concluido')
        setIsCompleted(true)
    }

    const handleReset = () => {
        navigate('/')
        dispatch({
            type: FormActions.setResetForm,
            payload: undefined
        })
    }

    useEffect(() => {
        const handleGlobalEnter = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                isCompleted ? handleReset() : handleNextStep();
            }
        };
        window.addEventListener('keyup', handleGlobalEnter);
        return () => window.removeEventListener('keyup', handleGlobalEnter);
    }, [isCompleted, handleNextStep, handleReset]);

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        })
    }, [])

    return (
        <Theme>
            <C.Container>
                <C.Info>
                    <C.Title>Confirme seus dados abaixo</C.Title>
                    <C.Description>Caso haja algo errado volte ao campo específico ou recomece.</C.Description>
                </C.Info>

                <hr />

                <C.Data>
                    <div>
                        <p className='titleTag'>Nome:</p> <p className='dataTag'>{state.name}</p>
                    </div>

                    <div>
                        <p className='titleTag'>Nível:</p> <p className='dataTag'>
                            {state.level === 0 ?
                                ' 🥳 Inciante' :
                                ' 😎 Profissional'}
                        </p>
                    </div>

                    <div>
                        <p className='titleTag'>Email:</p> <p className='dataTag'>{state.email}</p>
                    </div>

                    <div>
                        <p className="titleTag">Github:</p> <p className='dataTag'>{state.github}</p>
                    </div>
                </C.Data>


                {!isCompleted &&
                    <>
                        <Link to={'/step3'} className='backButton'>Voltar</Link>
                        <button onClick={handleNextStep}>Concluir</button>
                    </>
                }
                {isCompleted &&
                    <button onClick={handleReset}>Refazer</button>
                }
            </C.Container>
        </Theme>
    )
}