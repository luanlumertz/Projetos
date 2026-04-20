import { Link, useNavigate } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import * as C from './styles';
import { FormActions, useForm } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '' && state.name.length >= 2) {
            navigate('/step3')
        } else {
            alert("Preencha os dados corretamente")
        }
    }

    useEffect(() => {
        const handleGlobalEnter = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleNextStep();
            }
        };
        window.addEventListener('keyup', handleGlobalEnter);
        return () => window.removeEventListener('keyup', handleGlobalEnter);
    }, [handleNextStep]);

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level

        })
    }

    return (
        <Theme>
            <C.Container>
                <p>passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to={'/'} className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}
