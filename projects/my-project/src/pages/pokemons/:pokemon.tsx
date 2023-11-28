/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ax from 'axios';

interface Props {
  params: { pokemon: string };
  ssr: {
    pokemons: unknown;
  }
}

const App = ({ ssr }: Props) => {
  return (
    <>
      <pre>{JSON.stringify(ssr.pokemons, null, 2)}</pre>
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: Record<string, any>;
}) => {
  const pokemons = (await ax.get(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  )).data;

  return {
    pokemons,
  };
};

export default App;
