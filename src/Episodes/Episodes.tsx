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


function Episodes(): JSX.Element {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return (
    <section id="loadingScreen">   
        <p className="loadInfo">Loading episodes...</p>
    </section>);
  
  if (error) return (
    <section id="errorScreen">
        <p className="loadInfo" role="errorInfo">Error loading episodes :(</p>
    </section>);

  return (
    <section className="episodes">
      {data.episodes.results.map(({ id, episode, name, air_date }: { id: number; episode: string; name: string; air_date: string; }) => (
        <div key={id} className="episode" id={`ep-${id}`}>
          <div className ="episodeName">{episode}</div>
          <aside className="episodeInfo">
            <div className={`episodeTitle${id % 2 === 1 ? 'Green' : 'Blue'}`}>
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