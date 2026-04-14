import { useState } from 'react'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
    const [valueField, setValueField] = useState(0)
    const [titleField, setTitleField] = useState('')
    const [categoryField, setCategoryField] = useState('')
    const [dateField, setDateField] = useState("")

    const handleAddEvent = () => {
        
        if(dateField === "") {
            alert('Coloque uma data válida')
            return 
        }
        if(categoryField === "") {
            alert('Selecione uma categoria')
            return 
        }
        if(titleField === "") {
            alert('Coloque um título válido')
            return 
        }
        if(valueField === 0) {
            alert('Coloque um valor válido')
            return 
        }

        const dateObj = new Date(dateField.replace(/-/g, '\/'))
        
        let newItem: Item = {
            date: dateObj,
            category: categoryField,
            title: titleField,
            value: valueField
        }
        onAdd(newItem)
        setDateField('')
        setCategoryField('')
        setTitleField('')
        setValueField(0)
    }

    return (
        <C.Container>
            <C.Campo>
                <label>Data</label>
                <input
                    type="date"
                    value={dateField}
                    onChange={e => setDateField(e.target.value)}
                />
            </C.Campo>

            <C.Campo>
                <label>Categoria</label>
                <select
                    value={categoryField}
                    onChange={e => setCategoryField(e.target.value)}
                >
                    <option value="" hidden>Selecionar</option>
                    <option value="food">Alimentação</option>
                    <option value="rent">Aluguel</option>
                    <option value="salary">Salário</option>
                </select>
            </C.Campo>

            <C.Campo>
                <label>Título</label>
                <input
                    type="text"
                    placeholder='Digite um título'
                    value={titleField}
                    onChange={e => setTitleField(e.target.value)}
                />
            </C.Campo>

            <C.Campo>
                <label>Valor</label>
                <input
                    type="number"
                    placeholder='Digite um valor'
                    value={valueField === 0 ? "" : valueField}
                    onChange={e => setValueField(Number(e.target.value))}
                />
            </C.Campo>

            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}