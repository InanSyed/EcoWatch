import { IonIcon } from "@ionic/react"
import { homeOutline, calendarClearOutline, newspaperOutline } from 'ionicons/icons'

function Icon({icon}) {
    return (
        <div className="flex-1 flex place-center">
                <IonIcon
                    className="flex-1 h-10 p-2"
                    icon={icon}
                />
            </div>
    )
}

export const Navbar = () => {
    return (
        <nav className="flex flex-5 h-14 w-screen bg-blue">
            <Icon icon={newspaperOutline}/>
            <Icon icon={homeOutline}/>
            <Icon icon={calendarClearOutline}/>
        </nav>
    )
}