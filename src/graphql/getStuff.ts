export const getStuff /* GraphQL */ = `
    query getStuff {
        listTodos {
            items {
                id
                name
            }
        }
    }
`
