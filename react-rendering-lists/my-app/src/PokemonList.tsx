type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ arr }: { arr: Pokemon[] }) {
  const items = arr.map((i) => <li key={i.number}>{i.name}</li>);

  return <ul>{items}</ul>;
}
