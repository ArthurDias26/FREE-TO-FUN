import React from 'react'
import { Button } from './style'
import {Link} from 'react-router-dom'

export default function index({text, icon, color, url, type}) {
    if (type === 'internal') {
        return (
            <Button color={color}>
                <Link to={url ? url : '#'}>{icon ? <>{icon} </> : ''}{text}</Link>
            </Button>
        )
    }
    else{
        return (
            <Button color={color}>
                <a href={url ? url : ''} target='_blank' rel="noreferrer">{icon ? <>{icon} </> : ''}{text}</a>
            </Button>
      )
    }
  
}
