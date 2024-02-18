import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, ref, set, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "../../firebase.config.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export const getFeedPosts = async () => {
    const postsRef = ref(db, 'posts/')
    try {
        return (await get(postsRef)).val()
    } catch {
        return []
    }
}

export function AddUser(uuid, email) {
    set(ref(db, 'users/' + uuid), {
        email: email,
        communities: [
            "Windsor, ON",
            "Tecumseh, ON"
        ]
        });
}

export const GetCommunities = async () => {
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

export function CreateCommunity(name) {
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

export const getFeedPosts = async () => {
    const postsRef = ref(db, 'posts/')
    try {
        return (await get(postsRef)).val()
    } catch {
        return []
    }

export function JoinCommunity(uuid, community) {
    const userRef = ref(db, "users/" + uuid);

    get(child(userRef, "communities")).
        then((snapshot) => {
            if (snapshot.exists()) {
                const arr = snapshot.val();
                arr.push(community);
                set(snapshot.ref, [...new Set(arr)])
            } else {
                set(snapshot.ref, [community]);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}