import React from 'react'
import Character from '../Character'
import { withCharacter } from '../../context/CharacterProvider'

const CharacterList = props => {
    return (
        <div>
            {  props.characters.map(char => <Character {...char} key={char.id}/>) }
        </div>
    )
}

export default withCharacter(CharacterList)