import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   cache: InMemoryCache()
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <ApolloProvider client={client}> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  {/* </ApolloProvider> */}
  </BrowserRouter>
);