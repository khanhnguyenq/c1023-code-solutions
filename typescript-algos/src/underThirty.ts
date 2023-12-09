export type People = {
  name: {
    first: string;
    last: string;
  };
  age: number;
  id: number;
};

export function underThirty(people: People[]): People[] {
  const peopleUnderThirty = people.filter((person) => person.age < 30);

  return peopleUnderThirty;
}
