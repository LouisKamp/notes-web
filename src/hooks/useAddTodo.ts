import { DataStore } from 'aws-amplify'
import { useMutation } from 'react-query'

import { Todo } from '../models'

export const useAddTodo = () => useMutation(async () => {

    const newTodo = new Todo({
        name: 'købe seng2',
        description: 'købe seng til at flytte ud'
    })

    DataStore.save(newTodo)

})
