import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
  let navigate = useNavigate();
  return (
    <div>
        <main id='menu'>
            <button className='menubutton'
            onClick={()=>navigate('/')}>
                Home
            </button>
            <button className='menubutton'
            onClick={()=>navigate('/sessions/all')}>
                Sessions
            </button>
            <button className='menubutton'
            onClick={()=>navigate('/npcs')}>
                NPCs
            </button>
            <button className='menubutton'
            onClick={()=>navigate('/notes')}>
                Notes
            </button>
        </main>
    </div>
  )
}
