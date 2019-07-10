import { ApolloClient } from 'apollo-boost';
// import { ApolloLink } from 'apollo-link';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import link from './http-link';
// import { withClientState } from 'apollo-link-state';
// import { CUSTOMER_ADDRESS_QUERY } from './queries';

// const devTools = process.env.NODE_ENV === 'development' ? true : false;
// const CUSTOMER_ADDRESS_TYPE = 'CustomerAddress';
// const MANUAL_ADDRESS_TYPE = 'ManualAddress';
// export const ELIGIBILITY_TYPE = 'Eligibility';

// const cache = new InMemoryCache({
//   dataIdFromObject: (object: any) => {
//     switch (object.__typename) {
//       case 'Address':
//         return object.address;
//       default:
//         return object.id || object._id;
//     }
//   },
// });

// const mutationResolver = (type: string, data: any, localCache: any, getCacheKey: (params: any) => string) => {
//   const key = getCacheKey({ __typename: type, id: type });
//   const cacheEntry = { key: data.id, __typename: type, ...data };
//   let cachedData;

//   try {
//     cachedData = localCache.read({ query: CUSTOMER_ADDRESS_QUERY, optimistic: true });
//   } catch (e) {
//     cachedData = {};
//   }

//   localCache.writeData({ key, data: { ...cachedData, [type]: { ...cacheEntry } } });

//   return { [type]: cacheEntry };
// };

// const stateLink = withClientState({
//   cache,
//   resolvers: {
//     Query: {},
//     Mutation: {
//       [ELIGIBILITY_TYPE]: (_: any, variables: any, { cache: localCache, getCacheKey }: any) =>
//         mutationResolver(ELIGIBILITY_TYPE, variables, localCache, getCacheKey),
//       [CUSTOMER_ADDRESS_TYPE]: (_: any, variables: any, { cache: localCache, getCacheKey }: any) =>
//         mutationResolver(CUSTOMER_ADDRESS_TYPE, variables, localCache, getCacheKey),
//       [MANUAL_ADDRESS_TYPE]: (_: any, variables: any, { cache: localCache, getCacheKey }: any) =>
//         mutationResolver(MANUAL_ADDRESS_TYPE, variables, localCache, getCacheKey),
//     },
//   },
// });
// export const apolloClient = new ApolloClient({
//   link: ApolloLink.from([stateLink, link]),
//   cache,
//   connectToDevTools: devTools,
// });
