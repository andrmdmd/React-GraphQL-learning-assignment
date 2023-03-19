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
  let episodeNumber = 0;
  return (
    <div className="episodes">
      {data.episodes.results.map(({ id, episode, name, air_date }) => (
        <div className="episode" id={`ep-${++episodeNumber}`}>
          <div className ="episodeName">{episode}</div>
          <div className="episodeInfo">
            <div className={`episodeTitle${episodeNumber % 2 === 0 ? 'Green' : 'Blue'}`}>
              {name}
              </div>
              <div className="episodeDate">
                {air_date}
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}

export default Episodes;