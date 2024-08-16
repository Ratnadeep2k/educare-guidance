import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StudentsTable from './StudentsTable'

function StudentsTables () {
  const [students, setStudents] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/students`
      )
      const data = response.data
      console.log(data)
      setStudents(data)
    } catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <StudentsTable students={students} fetchData={fetchData} />
    </div>
  )
}

export default StudentsTables
