import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4q0ahgr2zic01w7b5xv09ln/master',
    cache: new InMemoryCache()
})