export default async function NewsDetailLayout({
  children,
  image,
}: LayoutProps<"/news/[id]">) {
  return (
    <>
      {children}
      {image}
    </>
  );
}
