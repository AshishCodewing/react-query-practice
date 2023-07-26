import { useState } from 'react'
import { addPosts } from './store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { render } from 'react-dom'

let renderCount = 0;

function PostForm() {
    renderCount++

    const form = useForm()
    const { register, control, handleSubmit } = form
    // const { name, ref, onChange, onBlur } = register('name')
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    function onSubmit(data) {
        console.log('form Submitted', data);
    }

    // const [formData, setFormData] = useState({
    //     id: crypto.randomUUID(),
    //     name: '',
    //     description: '',
    //     imageUrl: '',
    //     price: '',
    //     type: '',
    // })

    // console.log(formData);

    // function handleChange(event) {
    //     const { name, value } = event.target
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData, [name]: value
    //         }
    //     })
    // }
    // const newPostMutation = useMutation({
    //     mutationFn: (formData) => addPosts(formData),
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(["posts"])
    //     }
    // }
    // )

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     newPostMutation.mutate(formData)
    //     navigate('/')
    // }
    return (
        <>
            <h1>The form rendered {renderCount} times</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className='form'>
                <label htmlFor="username">User Name</label>
                <input
                    id='username'
                    type="text"
                    placeholder='Name'
                    // value={formData.name}
                    {...register('name', { required: 'Name of the van is required' })}
                />
                <label htmlFor="description">Description</label>
                <input
                    id='description'
                    type="text"
                    placeholder='Description (test email validation)'
                    // value={formData.description}
                    {...register('description', {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email"
                        }
                    })}
                />
                <label htmlFor="price">Price</label>
                <input
                    id='price'
                    type="text"
                    placeholder='Price'
                    // value={formData.price}
                    {...register('price', { required: 'Price is required' })}
                />
                <label htmlFor="imageUrl">Image Url</label>
                <input
                    id='imageUrl'
                    type="text"
                    placeholder='imageUrl'
                    // value={formData.imageUrl}
                    {...register("imageUrl")}
                />
                <label htmlFor="type">Type</label>
                <input
                    id='type'
                    type="text"
                    placeholder='Type'
                    // value={formData.type}
                    {...register('type')}
                />
                <button>Submit</button>
            </form>
            <DevTool control={control} />
            <button onClick={() => navigate(-1)}>Go Back</button>

        </>
    )
}

export default PostForm;