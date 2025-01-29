import React from 'react'
import { BackgroundMessage, Message } from './style'
import ReactDOM from 'react-dom'

export default function Index({title, message, visible, setVisible, ActionButton}) {
    
    if(!visible){
        return null
    }

  return ReactDOM.createPortal(
    <BackgroundMessage>
        <Message>
            <h3>{title}</h3>
            <p>{message}</p>

            <div className='flex_container'>
                {ActionButton}
                <button onClick={() => setVisible(false)}>Close</button>
            </div>
        </Message>
    </BackgroundMessage>,
    document.getElementById('portal')
  )
}
