import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Dispatch, RootState } from '../../state/store'
import { DisplayCount } from '../molecules/DisplayCount'

interface Props {
}

export const Counter: React.FC<Props> = () => {

    const dispatch = useDispatch<Dispatch>()
    const testCounter = useSelector((state: RootState) => state.count)

    const handleIncrement = () => {
        dispatch.count.increment(1)
    }

    return (
        <>
            {testCounter >= 4 && testCounter <= 6 && (
                <DisplayCount count={testCounter} />
            )}
            <button onClick={handleIncrement} type="button">Click me to increment</button>
        </>
    )
}
