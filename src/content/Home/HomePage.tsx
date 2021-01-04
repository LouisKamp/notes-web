import { AmplifySignOut } from '@aws-amplify/ui-react'
import { Box, Flex } from '@chakra-ui/react'
import * as React from 'react'

import { DisplayNotes } from '../../components/organisms/DisplayNotes'
import { NewNote } from '../../components/organisms/NewNote'
import { useGetNotes } from '../../hooks/useGetNotes'

export const HomePage: React.FC = () => {
    const { data, isLoading } = useGetNotes()
    
    return (
        <Flex flexDirection="column" height="100vh">
            <Flex flex="1" flexDirection="column" padding={['2em', '1em']}>
                <NewNote />

                {isLoading && (
                    <Box>Loading</Box>
                )}

                {data && (
                    <DisplayNotes notes={data} />
                )}
            </Flex>
            <Box>
                <AmplifySignOut />
            </Box>
        </Flex>
    )
}
