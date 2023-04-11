import './App.css';
import React from "react";
import Episodes from '../Episodes/Episodes';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
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
            <img src={process.env.PUBLIC_URL + '/image.png'} alt="Rick and Morty coming out of a portal" />
          </div>     
          <div className="rightSide">
              <Episodes /> 
          </div>
        </main>
        <footer className="footer">
            <p>LOREM IPSUM ©2021</p>
        </footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
