import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, ref, set, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "../../firebase.config.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export const getCommunities = async () => {
    const communityRef = ref(db, "communities/");
    
    try {
        return (await get(communityRef)).val()
    } catch {
        return []
    }

    // get(cRef)
    //     .then((snapshot) => {O    if (snapshot.exists()) {
    //             console.log(snapshot)
    //             console.log(snapshot.val())
    //             return snapshot.val();
    //         } else {
    //             return 'default value';
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
    // return {};
}

export function createCommunity(name) {
    const cRef = ref(db, "communities/");

    get(cRef).
        then((snapshot) => {
            if (snapshot.exists()) {
                const arr = snapshot.val();
                arr.push({
                    name: name,
                    members: {}
                });
                set(snapshot.ref, arr)
            } else {
                set(snapshot.ref, [{
                    name: name,
                    members: {}
                }]);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
