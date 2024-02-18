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
    const [joinStatus, setJoinStatus] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-700 rounded-lg">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex">
                        <h2 className="text-2xl font-bold">{data.title}</h2>
                        <p>Posted {(new Date().getTime() - data.postTime).toString()} ago</p>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{data.memberCount} Members</h3>
                    </div>
                </div>
                <button onClick={() => { setJoinStatus(!joinStatus); setButtonText("Joined") }} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'>{buttonText}</button>
            </div>
        </div>
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