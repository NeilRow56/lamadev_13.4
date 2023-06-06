'use client'

import useSWR from 'swr'

// import { useEffect, useState } from 'react'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // //   The useEffect Hook allows you to perform side effects in your components.

  // // Some examples of side effects are: fetching data, directly updating the DOM, and timers.

  // // useEffect accepts two arguments. The second argument is optional.

  // // useEffect(<function>, <dependency>)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store'
  //     })
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     // Recommendation: handle errors
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setErr(true)
  //     }

  //     const data = await res.json()
  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  //NEW WAY TO FETCH DATA USING SWR
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )

  return <div>Dashboard</div>
}

export default Dashboard
