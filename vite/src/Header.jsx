import { useState } from 'react'
import ecoWatch from './assets/EcoWatch LOGO.png'
import ecoWatchNoTree from './assets/EcoWatch LOGO No Tree.png'

import { IonIcon } from "@ionic/react"
import { homeOutline, calendarClearOutline, newspaperOutline, searchOutline, personCircleOutline } from 'ionicons/icons'

function Icon({ icon }) {
    return (
        <div className="flex-1 flex place-center">
            <IonIcon
                className="flex-1 h-10 p-2"
                icon={icon}
            />
        </div>
    )
}

export const Header = ({ changePage, loggedIn }) => {
    return (
        <>
            <div className='flex flex-5 border-b-2'>
                <div className='flex-1 grow'>
                    <img className='aspect-auto max-h-20' src={ecoWatchNoTree}></img>
                    {/* <h1 className=''><span className='text-emerald-600'>ECO</span>Watch</h1> */}
                </div>
                <div className='flex-3 flex justify-end gap-x-6 p-2'>
                    {
                        !loggedIn && <button onClick={() => changePage("login")} className='place-self-center bg-green-950 font-bold text-center text-lg py-2 px-5 rounded-lg border-2 border-green-700'>Log In</button>
                    }
                    {
                        loggedIn && <Icon icon={personCircleOutline} />
                    }
                </div>
            </div>
        </>
    )
}

