import { Photo } from "../types/Photo"
import { supabase } from '../libs/supabase';
import { v4 as createId } from 'uuid'

export const getAll = async () => {
    let list: Photo[] = []

    // 1. Pedimos ao Supabase para listar todos os arquivos na pasta 'images'
    const { data, error } = await supabase
        .storage
        .from('photo-gallery') // Nome do seu Bucket
        .list('images');       // Nome da sua pasta

    if (error) {
        console.error("Erro ao buscar fotos:", error.message);
        return [];
    }

    // 2. Transformamos a lista do Supabase no formato que o seu professor quer (Photo[])
    if (data) {
        for (let item of data) {
            // Geramos a URL pública para cada imagem
            if (item.name === '.emptyFolderPlaceholder') {
                continue;
            }

            const { data: urlData } = supabase
                .storage
                .from('photo-gallery')
                .getPublicUrl(`images/${item.name}`);

            list.push({
                name: item.name,
                url: urlData.publicUrl
            });
        }
    }
    return list;
}

export const insert = async (file: File) => {
    // 1. Validando se é imagem
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let randomName = createId(); // Sua biblioteca de ID

        // 2. Fazendo o Upload para a pasta 'images'
        // No Supabase, o caminho já inclui o nome do arquivo
        const { data, error } = await supabase
            .storage
            .from('photo-gallery')
            .upload(`images/${randomName}`, file);

        if (error) {
            return new Error('Erro ao enviar o arquivo.');
        }

        // 3. Pegando a URL pública (Lembra que seu bucket é público?)
        const { data: urlData } = supabase
            .storage
            .from('photo-gallery')
            .getPublicUrl(data.path);

        // 4. Retornando no formato que o React espera
        return { name: randomName, url: urlData.publicUrl } as Photo;

    } else {
        return new Error('Tipo de arquivo não permitido.');
    }
}

export const deletePhoto = async (name: string) => {
    // No Supabase, passamos um array de nomes (mesmo que seja só um)
    // O caminho deve ser completo: pasta + nome do arquivo
    const { error } = await supabase
        .storage
        .from('photo-gallery')
        .remove([`images/${name}`]);

    if (error) {
        return new Error('Erro ao deletar a foto.');
    }

    return true;
}