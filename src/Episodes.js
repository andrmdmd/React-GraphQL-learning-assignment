import React from 'react';
import { useQuery, gql } from "@apollo/client";

const GET_EPISODES = gql`
  query {
    episodes(filter: { episode: "S04"}) {
      results {
        id
        episode 
        name
        air_date
      }
    }
  }
`;


function Episodes() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.episodes.results.map(({ id, episode, name, air_date }) => (
        <p key={id}>
          {episode} - {name} - {air_date}
        </p>
      ))}
    </ul>
  );
}

export default Episodes;