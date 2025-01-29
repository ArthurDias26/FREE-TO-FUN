import React from 'react'
import ReactDom from 'react-dom'
import {Backgorund, LoaderBall} from './style'

export default function index() {
  return ReactDom.createPortal(
    <Backgorund>

      <LoaderBall delay={0}></LoaderBall>
      <LoaderBall delay={'.15s'}></LoaderBall>
      <LoaderBall delay={'.3s'}></LoaderBall>

    </Backgorund>,
    
    document.getElementById('portal')
  )
}
