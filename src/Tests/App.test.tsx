import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App/App';
import Episodes, { GET_EPISODES }  from '../Episodes/Episodes';
import { MockedProvider } from "@apollo/client/testing";


it("renders the header and footer text", () => {
  render(<App />);
  expect(screen.getByText("LOREM IPSUM")).toBeInTheDocument();
  expect(screen.getByText("LOREM IPSUM ©2021")).toBeInTheDocument();
});

it('renders the image', () => {
  render(<App />);
  expect(screen.getByAltText("Rick and Morty coming out of a portal")).toBeInTheDocument();
});

it("renders the title text", () =>{
  render(<App />);
  expect(screen.getByText((content, element) => content.startsWith('Episodes of the'))).toBeInTheDocument();
});

it("renders episodes without error", async () => {
  const successMock = [
    {
      request: {
        query: GET_EPISODES
      },
      result: {
        data: { 
          episodes: {
            results: 
              [ 
                { id: 1, episode: "S04E01", name: "Test Episode 1", air_date: "November 10, 2020", __typename: "Episode" },
                { id: 2, episode: "S04E02", name: "Test Episode 2", air_date: "November 20, 2020", __typename: "Episode" }
              ]
          }
        }
      }
    }
  ];

  render(
    <MockedProvider mocks={successMock}>
      <Episodes />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading episodes...")).toBeInTheDocument();
  expect(await screen.findByText("Test Episode 1")).toBeInTheDocument();
  expect(await screen.findByText("Test Episode 2")).toBeInTheDocument();
});

it("shows error message on episode query error", async () => {
  const errorMock = {
    request: {
      query: GET_EPISODES,
    },
    error: new Error("An error occurred")
  };
  render(
    <MockedProvider mocks={[errorMock]}>
      <Episodes />
    </MockedProvider>
  );
  expect(await screen.findByText("Error loading episodes :(")).toBeInTheDocument();
});