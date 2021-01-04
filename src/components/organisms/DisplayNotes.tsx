import { Box } from '@chakra-ui/react'
import * as React from 'react'

import { Note } from '../../models'

type Props = {
    notes: Note[]
}

export const DisplayNotes: React.FC<Props> = ({ notes }) => {

    return (
        <>
            {notes.map((item) => (
                <Box key={item.id} padding={['1em', '1em']} backgroundColor="#ccc" marginTop="1em">
                    <b>{item.title}</b>
                    <p>{item.content}</p>
                </Box>
            ))}
        </>
    )
}
