import React, { useEffect, useState } from 'react'
import { getFeedPosts } from '../scripts/users'

const testPosts = [
    {
        id: 1,
        title: "Windsor, ON Community",
        postTime: new Date().getTime(),
        content: {
            text: "",
            img: null,
        },
        likes: 0,
        comments: {},
    },
]

export const PostCard = ({ data }) => {
    return (
        <h1>ok</h1>
    )
}

export const FeedScreen = ({ loggedIn }) => {
    const [selected, setSelected] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const get = async () => {
            if(!loggedIn) return
            const posts = await getFeedPosts()
            setPosts(posts)
        }

        get()
    }, [loggedIn])
    
    if(!loggedIn) return <div>
        <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>
    </div>

    return (
        <div> {posts.map(p => <PostCard key={Math.random()} data={p} />)} </div>
    )
}