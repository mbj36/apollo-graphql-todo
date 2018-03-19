import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class TodoList extends Component {
  render() {
    const { data: { todos } } = this.props
    return <div>{todos.map(todo => <Todo key={todo.id} todo={todo} />)}</div>
  }
}

export const todosQuery = gql`
  {
    todos @client {
      id
      title
      completed
    }
  }
`
export default graphql(todosQuery)(TodoList)
