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

export const Navbar = ({ setPage }) => {
    return (
        <nav className="sticky md:bottom-0 bottom-2 flex justify-center">
            <div className="bg-base rounded-full md:rounded-none w-11/12 md:w-full flex justify-around">
                <button onClick={() => setPage("feed")} className="">
                    <Icon icon={newspaperOutline} />
                </button>
                <button onClick={() => setPage("homescreen")} className="">
                    <Icon icon={homeOutline} />
                </button>
                <button onClick={() => setPage("discover")} className="">
                    <Icon icon={searchOutline} />
                </button>
                {/* <button onClick={() => setPage("empty")} className="">
                <Icon icon={calendarClearOutline} />
            </button> */}
            </div>
        </nav>
    )
}