import { useEffect } from 'react';
import * as C from './App.styles'
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
    const char = useCharacter('Luan');
    const char2 = useCharacter('Renan');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
    }, [])

    const handleKeyDown = (e: KeyboardEvent) => {
        console.log(e.code.toLowerCase())

        switch (e.code.toLowerCase()) {
            case 'keya':
                char2.moveLeft();
                break;
            case 'arrowleft':
                char.moveLeft();
                break;
            case 'keyw':
                char2.moveUp();
                break;
            case 'arrowup':
                char.moveUp();
                break;
            case 'keyd':
                char2.moveRight();
                break;
            case 'arrowright':
                char.moveRight();
                break;
            case 'keys':
                char2.moveDown();
                break;
            case 'arrowdown':
                char.moveDown();
                break;
        }
    }

    return (
        <C.Container>
            <C.Map>
                <Character x={char.x} y={char.y} side={char.side} name={char.name} />
                <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
            </C.Map>
        </C.Container>
    );
}

export default App;