import React from 'react'
import ReactDOM from 'react-dom'
import App from './client/components/App'
import registerServiceWorker from './client/registerServiceWorker'

import { ApolloProvider } from 'react-apollo'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()
