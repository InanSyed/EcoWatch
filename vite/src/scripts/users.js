import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, ref, set, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "../../firebase.config.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export function AddUser(uuid, email) {
    set(ref(db, 'users/' + uuid), {
        email: email,
        communities: 0
        });
}

export function JoinCommunity(uuid, community) {
    const userRef = ref(db, "users/" + uuid);

    get(child(userRef, community)).
        then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
        })
        .catch((error) => {
            console.error(error);
        });
}