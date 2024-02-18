import React, { useState, useEffect } from 'react';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import { GetCommunities, CreateCommunity } from '../scripts/users';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

import firebaseConfig from "../../firebase.config.json";


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
                        <h3 className="text-xl font-bold">{data.members} Members</h3>
                    </div>
                </div>
                <button onClick={() => { setJoinStatus(!joinStatus); setButtonText("Joined") }} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'>{buttonText}</button>
            </div>
        </div>
    )
}

export const DiscoverScreen = ({ loggedIn }) => {
    const [selected, setSelected] = useState(null)
    const [communities, setCommunities] = useState([])
    
        // useEffect runs when [loggedIn] changes
        useEffect(() => {
            // create an async function inside, useEffect itself cant be async
            const aget = async () => {
                if(!loggedIn) return
    
                const com = await GetCommunities()
                console.log(com)
                setCommunities(com)
            }
    
            aget()
        }, [loggedIn])

    // const communityCards = (communities) => {
    //     const cards = []
    //     for(const com of communities) {
    //         cards.push(<CommunityCard key={com.name} data={com} />)
    //     }
    //     return cards
    // }

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
                    {

                            communities.map((data, key) => {
                                return <CommunityCard 
                                    data={data} 
                                />
                            })
                        
                        
                    // communities.map(el => <CommunityCard key={el.name} data={el} />)
                    }
                </div > : <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>
            }
        </div>
    )
}