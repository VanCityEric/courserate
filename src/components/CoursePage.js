import React from 'react'
import { useParams } from 'react-router-dom'

const CoursePage = () => {
const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default CoursePage