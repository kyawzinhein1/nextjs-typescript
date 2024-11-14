import { Card } from "./card";
import ClickToCopy from "./clickToCopy";

type PostProps = { userId: number; id: number; title: string; body: string };

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function DataFetch() {
  const data = await getData();
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-5">
      <ClickToCopy />

      {data.map((d: PostProps) => (
        <Card data={d} key={d.id} />
      ))}
    </div>
  );
}
