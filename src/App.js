import React from 'react'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <p>hey</p>
  </ApolloProvider>
)

export default App
