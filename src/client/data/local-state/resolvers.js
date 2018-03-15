import gql from 'graphql-tag'
import uuid from 'uuid'

const todosQuery = gql`
  {
    todos @client {
      id
      title
      completed
    }
  }
`
