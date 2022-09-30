import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/home-page/Home';
import User from './pages/user-page/User';
import Login from './pages/login-page/Login';
// import NotFound from './pages/NotFound';









const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          
          
          
          <Routes>
            <Route 
              path="/" 
              element={<Login />}
            />
            <Route 
              path="/home" 
              element={<Home />}
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
