import ApolloClient from 'apollo-client-preset'
import InMemoryCache from 'apollo-client-preset'
import { ApolloLink } from 'apollo-link'

import { withClientState } from 'apollo-link-state'
import localStateDefaults from './local-state/default'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults: localStateDefaults
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink])
})

export default client
