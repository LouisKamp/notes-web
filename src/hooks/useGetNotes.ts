import { DataStore } from 'aws-amplify'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'

import { Note } from '../models'
import { RootState } from '../state/store'
import { QueryTypes } from '../types/QueryTypes'

export const useGetNotes = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const userId = user?.attributes.sub

    return useQuery(QueryTypes.GETNOTES, async () => {
        return DataStore.query(Note, (note) => note.owner('eq', userId!))
    })

}
