import Amplify from 'aws-amplify'
import * as React from 'react'
import {
    QueryClient,
    QueryClientProvider 
} from 'react-query'
import { Provider } from 'react-redux'
// @jsx jsx 
import {
    jsx,
    ThemeProvider 
} from 'theme-ui'

import awsconfig from './aws-exports'
import RootRouter from './content/RootRouter'
import { store } from './state/store'
import theme from './styles/theme'

const queryClient = new QueryClient()
Amplify.configure(awsconfig)

export const App: React.FC = () => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RootRouter />
            </ThemeProvider>
        </QueryClientProvider>
    </Provider>
)
