import { DataStore } from 'aws-amplify'
import { useMutation, useQueryClient } from 'react-query'

import { Note } from '../models'
import { QueryTypes } from '../types/QueryTypes'

export const usePostNote = () => {
    const queryClient = useQueryClient()

    return useMutation<Note, unknown, Note>(async (note) => {
        const dbNote = await DataStore.save(note)
        return dbNote
    }, {
        onSuccess(note) {
            queryClient.setQueryData<Note[]>(QueryTypes.GETNOTES, (data) => [...data || [], note])
        }
    })
}
