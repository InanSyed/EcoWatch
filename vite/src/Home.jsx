import React, { useState } from 'react'

var testGoals = [{
    name: "Windsor Community",
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
}]

export const CommunityCard = ({ data }) => {
    return (
        // tailwind styled card
        <div className="border-2 border-black p-4 m-4 bg-stone-700">
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <div className="p-4">
                {data.goals.map(goal => (
                    <div className="border-2 border-black p-4 m-4" key={goal.name}>
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
        'fart'
    )
}

export const HomeScreen = () => {
    const [selected, setSelected] = useState(null)
    
    let selectedEl
    if(selected)
        selectedEl = <ExpandedCard data={testGoals.find(el => el.name === selected)} />
    else
        selectedEl = testGoals.map(el => <CommunityCard key={el.name} data={el} />)

    return (
        <div>
            { selectedEl } 
        </div>
    )
}