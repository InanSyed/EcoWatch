import React, { useState } from 'react'

const testGoals = [
    {
        name: "Windsor, ON Community",
        memberCount: 23102,
        goals: [
            {
                name: "Plant a tree",
                description: "Plant a tree in the community",
                progress: 4,
                target: 10
            },
            {
                name: "Pick up trash",
                description: "Pick up trash in the community",
                progress: 68,
                target: 100,
            }
        ]
    },
]

export const AddChallengeForm = ({ setFormVis, goals, setGoals }) => {
    const [challenge, setChallenge] = useState({
        name: "",
        description: "",
        progress: 0,
        target: 0,
    })

    const addChallenge = () => {
        const newGoals = goals.push(challenge)
        setGoals(newGoals)
        setFormVis(false)
    }

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-900 rounded-lg">
            <form>
                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Challenge Title</p>
                    <input
                        className="mt-2 rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        required
                        onChange={(e) => {
                            const newChallenge = JSON.parse(JSON.stringify(challenge))
                            newChallenge.name = e.target.value
                            setChallenge(newChallenge)
                        }}
                    />
                </div>

                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Challenge Description</p>
                    <input
                        className="mt-2 text-wrap rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="text"
                        required
                        onChange={(e) => {
                            const newChallenge = JSON.parse(JSON.stringify(challenge))
                            newChallenge.description = e.target.value
                            setChallenge(newChallenge)
                        }}
                    />
                </div>

                <div className='flex flex-col m-4 rounded-lg'>
                    <p className='text-xl'>Target</p>
                    <input
                        className="mt-2 text-wrap rounded-lg bg-transparent border-2 outline-0 p-2"
                        type="number"
                        min={1}
                        required
                        onChange={(e) => {
                            const newChallenge = JSON.parse(JSON.stringify(challenge))
                            newChallenge.target = e.target.value
                            setChallenge(newChallenge)
                        }}
                    />
                </div>

                <button type="submit" onClick={addChallenge} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg ring-2 ring-green-700'>Create!</button>
            </form>
        </div>
    )
}

export const CommunityCard = ({ data }) => {
    const [formVis, setFormVis] = useState(false);
    const [goals, setGoals] = useState(testGoals[0].goals);

    const handleAddChallenge = () => {
        setFormVis(!formVis);
    }

    return (
        // tailwind styled card
        <div className="p-4 m-4 bg-emerald-700 rounded-lg">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold">{data.memberCount} Members</h3>
                        <h3 className="text-xl font-bold">✔ <i>Joined</i></h3>
                    </div>
                </div>
                <button onClick={handleAddChallenge} className='bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg ring-2 ring-green-700'><span className="text-xl">+</span> Create Challenge</button>
            </div>
            {
                formVis && <AddChallengeForm setFormVis={setFormVis} goals={goals} setGoals={setGoals} />
            }
            <div className="p-4">
                {data.goals.map(goal => (
                    <div className="border-2 p-4 m-4 bg-emerald-900 rounded-lg flex-auto" key={goal.name}>
                        <h3 className="">{goal.name}</h3>
                        <p>{goal.description}</p>
                        <p>Progress: {goal.progress} / {goal.target}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const ExpandedCard = ({ data }) => {
    return (
        'this is a card when its been fully clicked on and expanded'
    )
}

export const HomeScreen = ( { loggedIn } ) => {
    const [selected, setSelected] = useState(null)

    let selectedEl
    if (selected)
        selectedEl = <ExpandedCard data={testGoals.find(el => el.name === selected)} />
    else
        selectedEl = testGoals.map(el => <CommunityCard key={el.name} data={el} />)

    return (
        <div>
            {loggedIn ? selectedEl : <p className='grid m-32 place-content-center text-2xl text-red-600'>Please log in.</p>}
        </div>
    )
}