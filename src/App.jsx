import axios from "axios"
import { useEffect, useState } from "react"
import {useQuery, useMutation} from '@tanstack/react-query'
import { getPosts } from "./store";

function App() {

  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: () => getPosts()
  // })

  // console.log(postsQuery.data);

  // if(postsQuery.isLoading) return <h1>Loading ...</h1>
  // if(postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1>React Query</h1>
    </>
  )
}
export default App