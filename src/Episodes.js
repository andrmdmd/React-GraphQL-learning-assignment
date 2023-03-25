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

  if (loading) return (
    <section id="loadingScreen">   
        <p className="loadInfo">Loading episodes...</p>
    </section>);
  
  if (error) return (
    <section id="errorScreen">
        <p className="loadInfo">Error loading episodes :(</p>
    </section>);

  let episodeNumber = 0;

  return (
    <section className="episodes">
      {data.episodes.results.map(({ id, episode, name, air_date }) => (
        <div key={id} className="episode" id={`ep-${++episodeNumber}`}>
          <div className ="episodeName">{episode}</div>
          <aside className="episodeInfo">
            <div className={`episodeTitle${episodeNumber % 2 === 0 ? 'Green' : 'Blue'}`}>
              {name}
              </div>
              <div className="episodeDate">
                {air_date}
                </div>
            </aside>
        </div>
      ))}
    </section>
  );
}

export default Episodes;