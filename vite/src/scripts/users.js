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

export function JoinCommunity(uuid, community) {
    const userRef = ref(db, "users/" + uuid);

    get(child(userRef, "communities")).
        then((snapshot) => {
        if (snapshot.exists()) {
            const arr = snapshot.val();
            arr.push(community);
            set(snapshot.ref, arr)
        } else {
            console.log("No data available");
        }
        })
        .catch((error) => {
            console.error(error);
        });
}