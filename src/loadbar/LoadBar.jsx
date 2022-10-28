import React from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useSelector } from 'react-redux'

function LoadBar() {
    const progressBar = useSelector(state => state.weather.progress)

  return (
    <LoadingBar
        color= '#1D7ACB'
        progress={progressBar}
      />
  )
}

export default LoadBar