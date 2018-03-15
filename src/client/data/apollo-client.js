import ApolloClient from 'apollo-client-preset'
import InMemoryCache from 'apollo-client-preset'
import { ApolloLink } from 'apollo-link'

import { withClientState } from 'apollo-link-state'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: '',
  defaults: ''
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
})

export default client
