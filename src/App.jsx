import axios from "axios"
import { useEffect, useState } from "react"
import {useQuery, useMutation} from '@tanstack/react-query'

function App() {
  const [posts, setPosts] = useState([]);

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return (
        axios.get('https://fakestoreapi.com/products/')
        .then(response => response.data)
        .catch((error) => {
          console.error("Error Fetching Data:", error)
        })
      )
    }, onSuccess: data => setPosts(data)
  })

  if(postsQuery.isLoading) return <h1>Loading ...</h1>
  if(postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>

  return (
    <>
      {posts.map((post, index) => {
        return (
          <h2 key={index}>{post.title}</h2>
        )
      })}
    </>
  )
}
export default App