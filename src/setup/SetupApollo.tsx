
import { ApolloClient } from 'apollo-client'
import { ApolloLink, NextLink, Observable, Operation, split} from 'apollo-link'
import { defaultDataIdFromObject, InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'
// import { WebSocketLink } from 'apollo-link-ws'
import { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
import * as React from 'react'
import { ApolloProvider, FetchResult } from 'react-apollo'
// import { SubscriptionClient } from 'subscriptions-transport-ws';
import { AUTH_TOKEN } from '../constants/constants'
import SetupTheme from './SetupTheme'

// const httpLink = new HttpLink({ uri: 'https://referralserver-bprfzovxws.now.sh' })
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_DB })
// const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_DB })
// const socketUrl = process.env.REACT_APP_WEBSOCKET

// type WebSocketLinkType = SubscriptionClient | WebSocketLink.Configuration

// const WebSocketParms:WebSocketLinkType = {
//   uri: socketUrl ? socketUrl : 'wups',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: localStorage.getItem(AUTH_TOKEN),
//     },
//   }
// }
// const wsLink = new WebSocketLink(WebSocketParms)

const middlewareAuthLink = new ApolloLink((operation: Operation, forward: NextLink): Observable<FetchResult> => {
  const token = localStorage.getItem(AUTH_TOKEN)
  const authorizationHeader = token ? `Bearer ${token}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})


const alink = ApolloLink.from([
  errorLink,
  middlewareAuthLink,
  httpLink
])

const blink = ApolloLink.from([
  errorLink,
  middlewareAuthLink,
  // wsLink
])

type DefinitionType = FragmentDefinitionNode | OperationDefinitionNode

const link = split(
  ({ query }) => {
    const definition: DefinitionType = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  blink,
  alink,
)

interface CacheType {
  __typename: string,
  id: string
}

const cache = new InMemoryCache({
  dataIdFromObject: (object: CacheType) => {
    // console.log(object)
    switch (object.__typename) {
    case 'Referral':
      // console.log(object)
      return object.id
    default: return defaultDataIdFromObject(object)
    }
  }
})

const client = new ApolloClient({
  link,
  cache
})

export default class SetupApollo extends React.Component {
  public render() {
    return(
      <ApolloProvider client={client}>
        <SetupTheme />
      </ApolloProvider>
    )
  }
}

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <SetupTheme />
//   </ApolloProvider>
//   , (document.getElementById('root') as HTMLElement)
// )
// registerServiceWorker()


