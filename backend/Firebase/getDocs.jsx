import { useEffect, useState } from 'react';
import { db } from '../../frontend/src/components/firebase-config';
// import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'

function GetDocs() {

    const [courses, setCourses] = useState([]);
    const usersCollectionRef = collection(db, 'courses');

    useEffect(() => {

        const getCourses = async () => {
            const data = await getDocs(usersCollectionRef);
            setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            //console.log(data);
        }

        getUsers()

    }, [])

}