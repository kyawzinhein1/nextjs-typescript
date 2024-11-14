type PostProps = { userId: number; id: number; title: string; body: string };

export function Card({ data }: { data: PostProps }) {
  return (
    <div>
      <div className="border p-3 rounded-2xl">
        <h1>{data.title}</h1>
        <h1>{data.userId}</h1>
      </div>
    </div>
  );
}
