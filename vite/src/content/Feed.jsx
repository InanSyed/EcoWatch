import React, { useEffect, useState } from 'react'
import { getFeedPosts } from '../scripts/feed.js'

import ecoWatch from '../assets/EcoWatch LOGO.png'

const testPosts = [
    {
        id: 1,
        community: "Windsor, ON Community",
        title: "This is a test post",
        author: "Jeff",
        postTime: new Date().getTime(),
        content: {
            text: "hello this is post content",
            img: ecoWatch,
        },
        likes: 0,
        comments: {},
    },
]

export const CreatePost = ({ setFormVis, posts, setPosts }) => {
    const [np, setNP] = useState({
        id: null,
        community: "",
        title: "",
        author: "",
        postTime: null,
        content: {
            text: "",
            img: null,
        },
        likes: 0,
        comments: {},
    })

    const createPost = () => {
        const nP = JSON.parse(JSON.stringify(np))
        nP.postTime = new Date().getTime()
        setNP(nP)

        console.log(np)
        console.log(posts)
        const newPosts = posts.concat(np)
        console.log(newPosts)
        setPosts(newPosts)
        setFormVis(false)
    }

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-900 rounded-lg">
            <form>
                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Community</p>
                    <input
                        className="mt-2 rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        required
                        onChange={(e) => {
                            const newPost = JSON.parse(JSON.stringify(np))
                            newPost.community = e.target.value
                            setNP(newPost)
                        }}
                    />
                </div>
                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Post Title</p>
                    <input
                        className="mt-2 rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        required
                        onChange={(e) => {
                            const newPost = JSON.parse(JSON.stringify(np))
                            newPost.title = e.target.value
                            setNP(newPost)
                        }}
                    />
                </div>

                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Post Content</p>
                    <input
                        className="mt-2 text-wrap rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        required
                        onChange={(e) => {
                            const newPost = JSON.parse(JSON.stringify(np))
                            newPost.content.text = e.target.value
                            setNP(newPost)
                        }}
                    />
                </div>

                <button type="submit" onClick={createPost} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg ring-2 ring-green-700'>Post!</button>
            </form>
        </div>
    )
}

export const PostCard = ({ data }) => {
    const [likeStatus, setLikeStatus] = useState(false);

    const likePost = () => {
        data.likes += likeStatus ? -1 : 1;
        setLikeStatus(!likeStatus);
    }

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-700 rounded-lg">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <p className="text-2xl pr-1 font-bold self-center">{data.title}</p>
                    <p className="text-sm pl-1 font-bold self-center justify-self-end">Posted {((new Date().getTime() - data.postTime) / 1000).toString()}s ago on {data.community}</p>
                </div>
                <h3 className="text-sm font-bold">Posted by {data.author}</h3>
                <div className="flex flex-col">
                    {
                        data.content.text !== "" && <p className="mt-4 text-md">{data.content.text}</p>
                    }
                    {
                        data.content.img !== null && <img className="m-2 max-w-fit aspect-auto" src={data.content.img}></img>
                    }
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-bold">{data.likes} Likes</p>
                    <button onClick={likePost} className="text-lg font-bold">👍</button>
                </div>
            </div>
        </div>
    )
}

export const FeedScreen = ({ loggedIn }) => {
    const [selected, setSelected] = useState(null)
    const [posts, setPosts] = useState(testPosts)
    const [formVis, setFormVis] = useState(false);

    const handleAddPost = () => {
        setFormVis(!formVis)
    }

    useEffect(() => {
        const get = async () => {
            if (!loggedIn) return
            const posts = await getFeedPosts()
            console.log(posts)
            setPosts(testPosts.concat(posts))
        }

        get()
    }, [loggedIn])

    if (!loggedIn) return <div>
        <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>
    </div>

    return (
        <div>
            <button onClick={handleAddPost} className='m-4 bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg ring-2 ring-green-700'><span className="text-xl">+</span> Create Post</button>
            {
                formVis && <CreatePost setFormVis={setFormVis} posts={posts} setPosts={setPosts} />
            }
            <div> {posts.map((p) => <PostCard data={p} />)} </div>
            <p className="text-center text-red-500 my-32">Wow you're at the bottom of the feed!</p>
        </div>
    )
}