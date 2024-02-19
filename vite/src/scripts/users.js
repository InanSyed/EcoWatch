import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, child, ref, set, get } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import firebaseConfig from "../../firebase.config.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

export const addUser = (uuid, email) => {
    set(ref(db, 'users/' + uuid), {
        email: email,
        communities: [
            "Windsor, ON",
            "Tecumseh, ON"
        ]
        });
}

export const joinCommunity = (uuid, community) => {
    const userRef = ref(db, "users/" + uuid);
    const userCommunitiesRef = child(userRef, "communities")

    get(userCommunitiesRef)
        .then((snap) => {
            if (!snap.exists()) {
                set(snap.ref, [community]);
                return;
            }

            const c = snap.val();
            c.push(community);
            set(snap.ref, [...new Set(c)])
        })
        .catch((error) => {
            console.error(error);
        });
    }

export const toggleCommunityMembership = (uuid, community) => {
    console.log(uuid, community)
    get(
        child(child(ref(db, "users/"), uuid), "communities")
    ).then((snap) => {
        console.log(snap.ref)
        if (!snap.exists()) {
            set(snap.ref, [community])
            return;
        }

        if (!snap.val().includes(community)) {
            set(snap.ref, [...new Set(snap.val()), community])
            return;
        }

        const c = snap.val()
        const sc = c.toSpliced(c.indexOf(community), 1);


        set(snap.ref, [...new Set(sc)])
    })
}

// todo remove
export const getJoinedCommunities = async (uuid) => {
    const userRef = ref(db, "users/" + uuid);
    const userCommunitiesRef = child(userRef, "communities");
    
    try {
        const c = (await get(userCommunitiesRef)).val()
        return c
    } catch {
        return []
    }
}