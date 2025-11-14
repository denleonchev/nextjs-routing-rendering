export default async function NewsDetailPage(props: PageProps<"/news/[id]">) {
  const { id } = await props.params;
  return (
    <>
      <h1>News detail page</h1>
      <h2>News ID: {id}</h2>
    </>
  );
}
