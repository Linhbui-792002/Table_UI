import { useGetListMoviesQuery } from "@src/redux/endPoint/movies"

export default function Home() {
  const { data: result } = useGetListMoviesQuery({ page: 2, limit: 5 });

  console.log(result, 'data')
  return (
    <div>

    </div>
  )
}
