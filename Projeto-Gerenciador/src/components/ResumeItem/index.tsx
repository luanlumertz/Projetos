import * as C from './styles'

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(value)}
            </C.Info>
        </C.Container>
    )
}