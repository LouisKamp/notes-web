import { onAuthUIStateChange } from '@aws-amplify/ui-components'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import { Dispatch } from '../../state/store'
import { AwsAuth } from '../../types/AwsAuth'

interface Props {

}

export const IndexPage: React.FC<Props> = () => {

    const dispatch = useDispatch<Dispatch>()

    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            dispatch.auth.updateState(nextAuthState)
            dispatch.auth.updateUser(authData as AwsAuth)
        })
    }, [])

    return (
        <>
            <AmplifyAuthenticator />
        </>
    )
}
