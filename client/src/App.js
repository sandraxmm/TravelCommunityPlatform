import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import User from './pages/user-page/User';
import Timeline from './pages/timeline-page/Timeline';
import Home from './pages/home-page/Home';
// import NotFound from './pages/NotFound';









const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <h1>HELLO</h1>
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
