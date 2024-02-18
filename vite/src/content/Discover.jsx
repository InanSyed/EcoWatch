import React, { useState } from 'react'

const testCommunities = [
    {
        id: 1,
        name: "Windsor, ON Community",
        memberCount: 23102,
        currentGoalsCount: 2,
        members: [],
    },
    {
        id: 2,
        name: "Toronto, ON Community",
        memberCount: 450342,
        currentGoalsCount: 2,
        members: [],
    },
]

export const CommunityCard = ({ data }) => {
    const [joinStatus, setJoinStatus] = useState(false)
    const [buttonText, setButtonText] = useState("Join");

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-700 rounded-lg">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{data.memberCount} Members</h3>
                    </div>
                </div>
                <button onClick={() => { setJoinStatus(!joinStatus); setButtonText("Joined") }} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'>{buttonText}</button>
            </div>
        </div>
    )
}

export const DiscoverScreen = ({ loggedIn }) => {
    const [selected, setSelected] = useState(null)

    return (
        <div>
            {
                loggedIn ? 
                <div>
                    <p className='mb-0 m-4 text-small'>Search by name, id, location</p>
                    <input
                        className="mt-1 m-4 rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        onChange={(e) => {
                            // TODO: add search function
                        }}
                    />
                    {testCommunities.map(el => <CommunityCard key={el.name} data={el} />)}
                </div > : <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>
            }
        </div>
    )
}