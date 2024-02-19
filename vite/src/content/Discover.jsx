import React, { useState, useEffect } from 'react';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, onValue } from "firebase/database";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

// import firebaseConfig from "../../firebase.config.json";

export const CommunityCard = ({ joined, name, data }) => {
    const [joinStatus, setJoinStatus] = useState(false)
    const [buttonText, setButtonText] = useState("Join");

    const handleJoin = () => {
        // todo db logic
    }

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-700 rounded-lg">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{data.members} Members</h3>
                    </div>
                </div>
                <button onClick={handleJoin} 
                    className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'
                    >
                        {joined ? "Joined" : "Join"}
                    </button>
            </div>
        </div>
    )
}

export const DiscoverScreen = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [communities, setCommunities] = useState({})
    const [joinedCommunities, setJoinedCommunities] = useState([])
    const [uuid, setUUID] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true)
                setUUID(user.uid)
            } else {
                setLoggedIn(false)
                setUUID('')
            }
          });
    }, [])

    useEffect(() => {
        if (!loggedIn) {
            return;
        }

        onValue(
            ref(db, 'communities/'),
            (snap) => {
                const fetch = async () => {
                    setCommunities(snap.val());
                }
                
                fetch();
            }
        )

        onValue(
            child(child(ref(db, 'users/'), uuid), 'communities'),
            (snap) => {
                const fetch = async () => {
                    const jc = snap.val();
                    setJoinedCommunities([...jc]);
                }
                
                fetch();
            }
        )
    }, [loggedIn])

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
                        Object.keys(communities).map((key, _) => {
                            return <CommunityCard
                                key={key} name={key}
                                joined={joinedCommunities.includes(key)}
                                data={communities[key]}
                                />
                        })
                    }
                </div > : <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>
            }
        </div>
    )
}