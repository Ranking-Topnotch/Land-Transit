// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore/lite'

// const firebaseConfig = {
//   apiKey: "AIzaSyCoYqEvFyjprecbTpRwdvzPLKDZTMcPR8w",
//   authDomain: "transit-71cb0.firebaseapp.com",
//   projectId: "transit-71cb0",
//   storageBucket: "transit-71cb0.appspot.com",
//   messagingSenderId: "214410836653",
//   appId: "1:214410836653:web:e0ce3d18ed35231ae4e424"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// const transitCollection = collection(db, 'transit')

// export async function getVans() {
//     const querySnapshot = await getDocs(transitCollection)
//     const dataArr = querySnapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return dataArr
// }



export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


// export async function getVan(id) {
//     const docRef = doc(db, "vans", id)
//     const vanSnapshot = await getDoc(docRef)
//     return {
//         ...vanSnapshot.data(),
//         id: vanSnapshot.id
//     }
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}