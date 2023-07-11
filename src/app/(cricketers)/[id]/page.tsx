export default async function CricketerDetailsPage(
  { params: { id }}: {
    params: {
      id: string
    }
  }
) {
  return <div>Cricketer details {id}</div>;
}
