import React from 'react'
import { GameCard} from './style'
import { Link } from 'react-router-dom'
import {MdMonitor} from 'react-icons/md'
import {FaChrome} from 'react-icons/fa'

export default function Index({id, thumb, title, platform}) {
  return (
    <GameCard>
        <Link to={`/exhibition/${id}`}>
            <img src={thumb} alt={`${title} Thumb`}/>
            <h3>{title}</h3>
            {platform === "PC (Windows)" ? (<MdMonitor/>) : (<FaChrome className='small'/>)}
        </Link>
    </GameCard>
  )
}
