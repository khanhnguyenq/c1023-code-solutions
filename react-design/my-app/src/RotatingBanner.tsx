export function RotatingBanner({ arr }: { arr: string[] }) {
  const items = arr.map((i) => <li>{i}</li>);

  return <ul>{items}</ul>;
}
