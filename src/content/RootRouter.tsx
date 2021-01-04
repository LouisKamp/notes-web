import { AuthState as awsAuthState } from '@aws-amplify/ui-components'
import React from 'react'
import { useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch 
} from 'react-router-dom'

import { RootState } from '../state/store'
import { HomePage } from './Home/HomePage'
import { IndexPage } from './Index/IndexPage'

export default function RootRouter() {
    const loginState = useSelector((state: RootState) => state.auth.state)

    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                {loginState === awsAuthState.SignedIn ? (
                    <>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route exact path="*">
                            <Redirect to="/home" />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route exact path="*">
                            <IndexPage />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    )
}
