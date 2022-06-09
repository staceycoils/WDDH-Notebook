import React from 'react';
import { getDatabase, ref, child, get, onValue,set,update, push, onChildChanged } from "firebase/database"
import database from "../firebase.mjs"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Session(props) {
    const { id } = props
    const dbRef = ref(getDatabase());
    const [sessionData, setSessionData] = useState("")
    const [noteData, setNoteData] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (id === 'all') return
        setLoading(true)
        get(child(dbRef, `sessions/${id}/notes`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setSessionData(snapshot.val());
                } else {
                    setSessionData("No data available");
                }
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [id])

    onChildChanged(child(dbRef, `sessions/${id}`), (data) => {
        console.log(data)
    })


    function updateNotes(str) {
        setNoteData(str)
    }

    function sendNotes() {
        console.log(noteData)
        update(child(dbRef, `sessions/${id}`), {
            notes: noteData
        })
    }

    if (id === 'all') 
    return (
        <div>
            Select a session.
        </div>
    ) 
    if (loading) return  <div>...Loading</div>
    else return (
        <div>
            <textarea defaultValue={sessionData}
            id='sessiontext'
            onChange={(e)=>{
                updateNotes(e.target.value)
            }}>
            </textarea>
            <button onClick={()=>{
                sendNotes()
            }}>
                BEETROOT
            </button>
        </div>
    ) 
  
}
