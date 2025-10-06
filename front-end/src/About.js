import React, { useEffect, useState } from 'react'
export default function About() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message || 'Failed to load'))
  }, [])
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt="About" style={{ maxWidth: 300 }} />
      {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  )
}
// this module fetches the json data from the backend and puts it in html format
// and display it in the about us page