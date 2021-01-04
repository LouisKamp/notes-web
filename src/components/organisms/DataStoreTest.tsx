import * as React from 'react'
import { Button } from 'theme-ui'

import { useAddTodo } from '../../hooks/useAddTodo'
import { useGetStuff } from '../../hooks/useGetStuff'

export const DataStoreTest: React.FC = () => {
    const addTodo = useAddTodo().mutate
    const { data, isLoading } = useGetStuff()
    return (
        <div>
            <Button onClick={() => addTodo()}>test</Button>
            {isLoading && (
                <div>Loading</div>
            )}
            {data && data.map((i) => (
                <div key={i?.id}>{i?.id}</div>
            ))}
        </div>
    )
}
