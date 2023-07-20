import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getPosts, addPosts } from "./store";

function App() {
  const queryClient = useQueryClient()
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts()
  })

  console.log(postsQuery.data);

  const newVan = {
    id: crypto.randomUUID(),
    name: 'test Van',
    price: 90,
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    type: "simple"
  }

  const newPostMutation = useMutation({
    mutationFn: (vanData) => addPosts(vanData),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    }
  },

  )

  if (postsQuery.isLoading) return <h1>Loading ...</h1>
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>
  return (
    <>
      {postsQuery.data.vans.map((van) => {
        return (
          <>
            <h1 key={van.id}>{van.name}</h1>
          </>
        )
      })}
      <button onClick={() => newPostMutation.mutate(newVan)}>Add new Post</button>
    </>
  )
}
export default App