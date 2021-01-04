export const getNotes /* GraphQL */ = `
    query getNotes {
        listNotes {
            items {
                id
                content
            }
        }
    }
`
