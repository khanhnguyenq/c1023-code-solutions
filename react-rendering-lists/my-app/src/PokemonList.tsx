type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ arr }: { arr: Pokemon[] }) {
  const items = arr.map((i) => <li>{i.name}</li>);

  return <ul>{items}</ul>;
}
