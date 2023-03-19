import './App.css';
import React from "react";
import Episodes from './Episodes';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import image from './image.png';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {

  return (
    <div className="App">
      <header className="page-header">
        <h1 className="header-text">LOREM IPSUM</h1>
        <div className="blue-side"></div>
      </header>
      <div className="container">
        <div className="left">
          <div className="main-text">
          <p>Episodes of the <span className='bold'>4th</span> season of the series <span className="bold-blue">Rick and Morty</span></p>
          </div>
          <div className="image-container">
             <img src={image} alt="Rick and Morty coming out of a portal" />
          </div>
        </div>
        <ApolloProvider client={client}>
          <div className="right">
              <Episodes /> 
          </div>
        </ApolloProvider>
      </div>
      <footer className="footer">
          <p>LOREM IPSUM ©2021</p>
      </footer>
    </div>
  );
}

export default App;
