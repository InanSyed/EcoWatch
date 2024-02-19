// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

// import firebaseConfig from "../../firebase.config.json";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase();

export const getCommunities = async () => {
    const communityRef = ref(db, "communities/");
    
    try {
        return (await get(communityRef)).val()
    } catch {
        return {}
    }
}

export const createCommunity = (name) => {
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