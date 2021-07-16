import React from 'react';
import { Blurhash } from 'react-blurhash';
import { useQuery } from '@apollo/client';
import { FETCH_POST } from './Graphql/FetchData';
import './App.css';

function App() {

  const { loading, data } = useQuery(FETCH_POST);
  console.log(data)
  if (!data) {
    return <p>page empty</p>

  }
  if (loading) {
    return <p>Images loading</p>
  }

  return (
    <div className="App">

      <Blurhash
        hash={data.blurhash}
        width={400}
        height={300}
        resolutionX={32}
        resolutionY={32}
      />

    </div>
  );
}

export default App;










































