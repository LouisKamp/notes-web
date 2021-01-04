import {
    Button, FormControl, FormErrorMessage, FormLabel, Input 
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SchemaOf } from 'yup'

import { usePostNote } from '../../hooks/usePostNote'
import { Note } from '../../models'

type Props = {

}

type InputForm = {
    title: string
    content: string
}

const schema: SchemaOf<InputForm> = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
}).defined()

export const NewNote: React.FC<Props> = () => {

    const {
        handleSubmit, errors, register, formState
    } = useForm<InputForm>({
        resolver: yupResolver(schema),
    })

    const { mutate } = usePostNote()

    const onSubmit: SubmitHandler<InputForm> = (data, e) => {
        const newNote = new Note(data)
        mutate(newNote)
        if (e) { e.target.reset() }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={!!errors.title}>
                    <FormLabel htmlFor="name">Title</FormLabel>
                    <Input
                        name="title"
                        placeholder="title"
                        ref={register}/>
                    <FormErrorMessage>
                        {errors.title && errors.title.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor="name">Content</FormLabel>
                    <Input
                        name="content"
                        placeholder="content"
                        ref={register}/>
                    <FormErrorMessage>
                        {errors.content && errors.content.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={formState.isSubmitting} type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}
