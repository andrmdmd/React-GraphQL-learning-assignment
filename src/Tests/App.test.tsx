import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import Episodes from '../Episodes/Episodes';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

test('renders the image', () => {
  render(<App />);
  const linkElement = screen.getByAltText("Rick and Morty coming out of a portal");
  expect(linkElement).toBeInTheDocument();
});

/*
test('renders error screen if data fails to load', async () => {
  jest.mock('@apollo/client', () => ({
    useQuery: () => ({
      loading: false,
      error: new Error('Failed to load data'),
      data: undefined,
    }),
  }));
  render( <Episodes />);
  const linkElement = screen.getByRole("errorInfo");
  expect(linkElement).toBeInTheDocument();
});
*/