import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [data, setData] = useState('')
  const [propies, setProps] = useState()

  useEffect(() => {
    makeFetch()
    organizeData(data)
  }, [])

  const makeFetch = () => {
    let theGoodStuff = fetch(
      'https://akabab.github.io/superhero-api/api/all.json'
    ).then((response) => {
      response.json().then((data) => {
        setData(data)
      })
    })
  }

  const organizeData = (arr) => {
    let newArr = arr.filter((items, idx) => {
      return idx % 20 === 0
    })
    console.log(newArr)
  }
  return <div className='App'>hello</div>
}

export default App
