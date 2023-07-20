import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "./store";

function PostDetail() {
    const params = useParams()
    const navigate = useNavigate()
    const postQuery = useQuery({
        queryKey: ['posts', params.id],
        queryFn: () => getPost(params.id)
    })
    console.log(postQuery.data);
    let vanDetail = postQuery.data
    if (postQuery.isLoading) return <h1>Loading ...</h1>
    if (postQuery.isError) return <pre>{JSON.stringify(postQuery.error)}</pre>
    return (
        <>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <br />
            <img src={vanDetail.vans.imageUrl} alt="" />
            <h1>{vanDetail.vans.name}</h1>
            <p>{vanDetail.vans.description}</p>
            <p>Price: {vanDetail.vans.price}</p>
        </>
    )
}

export default PostDetail;