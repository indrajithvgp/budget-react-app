import React from 'react'
import EntryLine from './EntryLine'
import {Container} from 'semantic-ui-react'

const EntryLines = ({entries}) => {
    return (
        <Container>
        {entries.map(e=><EntryLine key={e.id} {...e}/>)}
        </Container>
    )
}

export default EntryLines
