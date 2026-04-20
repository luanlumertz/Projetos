import * as C from './styles'
import { deletePhoto } from '../../services/photos'

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    const handleDeletePhoto = async () => {
        if(window.confirm('Tem certeza que deseja excluir essa foto?')) {
            const result = await deletePhoto(name)

            if(result instanceof Error) {
                alert(result.message)
            } else {
                onDelete(name)
            }
        }
    }

    return (
        <C.Container>
            <img src={url} alt={name} />

            <C.Button onClick={handleDeletePhoto}>Deletar</C.Button>
        </C.Container>
    )
}