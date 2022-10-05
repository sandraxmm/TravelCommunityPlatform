import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache, 
  createHttpLink, 
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import User from './pages/user-page/User';
import Timeline from './pages/timeline-page/Timeline';
import Home from './pages/home-page/Home';

// GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
       <h1>Travel Community Platform</h1>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          
          
          
          <Routes>
            
            <Route 
              path="/" 
              element={<Home/>}
            />
            <Route 
              path="/timeline" 
              element={<Timeline />}
            />
            <Route 
              path="/user/:id" 
              element={<User/>}
            />

          </Routes>


          
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
