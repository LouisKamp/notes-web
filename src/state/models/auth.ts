import { AuthState as awsAuthState } from '@aws-amplify/ui-components'
import { createModel } from '@rematch/core'

import { AwsAuth } from '../../types/AwsAuth'
import { RootModel } from '.'

type AuthState = {
    state: awsAuthState
    user?: AwsAuth
}

export const auth = createModel<RootModel>()({
    state: {
        state: awsAuthState.SignedOut,
        user: undefined
    } as AuthState,
    reducers: {
        updateState(state, payload: awsAuthState) {
            return { ...state, state: payload }
        },
        updateUser(state, payload: AwsAuth) {
            return { ...state, auth: payload }
        }
    },
    effects: (dispatch) => ({

    }),
})
