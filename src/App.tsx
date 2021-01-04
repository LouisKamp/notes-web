import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { ChakraProvider } from '@chakra-ui/react'
import Amplify from 'aws-amplify'
import * as React from 'react'
import {
    QueryClient,
    QueryClientProvider 
} from 'react-query'
import { Provider } from 'react-redux'

import awsconfig from './aws-exports'
import RootRouter from './content/RootRouter'
import { store } from './state/store'

const queryClient = new QueryClient()
Amplify.configure(awsconfig)

export const App: React.FC = () => (
    <AmplifyAuthenticator>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    <RootRouter />
                </ChakraProvider>
            </QueryClientProvider>
        </Provider>
    </AmplifyAuthenticator>
)
