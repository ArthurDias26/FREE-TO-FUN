import React from 'react'
import { PreviewContainer } from './style'
import BackImage from '../../../assets/image/reserve-background.png'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <PreviewContainer url={BackImage}>
      <h1>Find & track the best <span>free-to-play</span> games!</h1>

      <p>Track what you've played and look for what to play next! Plus, see the best free ones of this year</p>

      <div className='flex_ container'>

        <Link to='/login'>GET STARTED</Link>
        <Link to='/top'>See The Best of Year</Link>

      </div>
    </PreviewContainer>
  )
}
