import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Timeline from "./pages/timeline-page/Timeline";
import Home from "./pages/home-page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupForm from "./pages/signup-page/SignupForm";
import LoginForm from "./pages/login-page/LoginForm";
import PostForm from "./components/PostForm";
// GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
        <div className="flex-column justify-center align-center min-100-vh ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/posts" element={<PostForm />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
