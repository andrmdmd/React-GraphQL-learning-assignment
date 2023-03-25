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
      <header className="pageHeader">
        <h1 className="headerText">LOREM IPSUM</h1>
        <div className="blue-side"></div>
      </header>
      <main className="container">
        <div className="leftSide">
          <div className="titleText">
          <p>Episodes of the <span className='bold'>4th</span> season of the series <span className="boldBlueText">Rick and Morty</span></p>
          </div>
          <img src={image} alt="Rick and Morty coming out of a portal" />
        </div>
        <ApolloProvider client={client}>
          <div className="rightSide">
              <Episodes /> 
          </div>
        </ApolloProvider>
      </main>
      <footer className="footer">
          <p>LOREM IPSUM ©2021</p>
      </footer>
    </div>
  );
}

export default App;
