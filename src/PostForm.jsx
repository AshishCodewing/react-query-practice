import { useState } from 'react'
import { addPosts } from './store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
function PostForm() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: crypto.randomUUID(),
        name: '',
        description: '',
        imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
        price: '',
        type: '',
    })

    console.log(formData);

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData, [name]: value
            }
        })
    }
    const newPostMutation = useMutation({
        mutationFn: (formData) => addPosts(formData),
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"])
        }
    }
    )

    function handleSubmit(event) {
        event.preventDefault()
        newPostMutation.mutate(formData)
        navigate('/')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    onChange={handleChange}
                    value={formData.name}
                />
                <input
                    type="text"
                    name="description"
                    placeholder='Description'
                    onChange={handleChange}
                    value={formData.description}
                />
                <input
                    type="text"
                    name="price"
                    placeholder='Price'
                    onChange={handleChange}
                    value={formData.price}
                />
                <input
                    type="text"
                    name="type"
                    placeholder='Type'
                    onChange={handleChange}
                    value={formData.type}
                />
                <button>Submit</button>
            </form>
            <button onClick={() => navigate(-1)}>Go Back</button>

        </>
    )
}

export default PostForm;