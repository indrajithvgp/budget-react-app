import React from 'react'
import EntryLine from './EntryLine'
import {Container} from 'semantic-ui-react'

const EntryLines = ({entries, editEntry, deleteEntry, isOpen, setIsOpen}) => {
    return (
        <Container>
        {entries && entries.map(i=><EntryLine key={i.id} {...i} isOpen={isOpen} editEntry={editEntry} setIsOpen={setIsOpen} deleteEntry={deleteEntry}/>)}
        </Container>
    )
}

export default EntryLines
