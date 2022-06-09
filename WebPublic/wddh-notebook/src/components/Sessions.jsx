import React from 'react'
import Session from './Session'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, child, get,set } from "firebase/database"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Sessions() {
    const navigate = useNavigate();
    const sessionId = useParams().session;
    const dbRef = ref(getDatabase());
    const [sessionList, setSessionList] = useState([]);
    const [loading, setLoading] = useState(true)

    function getSessions() {
        get(child(dbRef, `sessions`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log("9")
                    setSessionList(snapshot.val());
                    setLoading(false)
                }
            })
            .catch((error) => {
                console.error(error);
        })
    }
    
    useEffect(()=>{
        getSessions();
    }, [])

    function addNewSession() {
        const num = sessionList.length;
        set(child(dbRef, `sessions/${num}`),{
            id: num,
            notes: ""
        });
        getSessions();
    }
    
    if (loading) return  <main id='sessionspage'>...Loading</main>
  return (
      <main id='sessionspage'>
          <div id='sessionselectors'>
            {sessionList.map((num,index)=>{
                return (
                    <button key={`session${index}button`}
                    className='sessionbutton'
                    onClick={()=>navigate(`/sessions/${index}`)}>
                        {index}
                    </button>
                )
            })}
            <button key={"newsessionbutton"}
                className='sessionbutton'
                onClick={()=>addNewSession()}>
                    +
            </button>
          </div>
          <div>
            <Session id={sessionId}/>
          </div>
      </main>
  )
}
