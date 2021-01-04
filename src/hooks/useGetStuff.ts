import { DataStore } from 'aws-amplify'
import {
    useQuery 
} from 'react-query'

import { Todo } from '../models'

export const useGetStuff = () => {

    return useQuery('todos', async () => {
        return DataStore.query(Todo)
    })

}
