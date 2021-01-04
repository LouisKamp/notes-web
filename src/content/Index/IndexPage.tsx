import * as React from 'react'
import { useSelector } from 'react-redux'
import { Box } from 'theme-ui'

import { Counter } from '../../components/organisms/Counter'
import { DataStoreTest } from '../../components/organisms/DataStoreTest'
import { RootState } from '../../state/store'

interface Props {

}

export const IndexPage: React.FC<Props> = () => {
    const testCounter = useSelector((state: RootState) => state.count)
    return (
        <>
            <Counter />
            <Box sx={{ fontSize: 'large', width: ['100%', '50%', '25%'], bg: 'blue' }}>hej</Box>
            <DataStoreTest />
        </>
    )
}
