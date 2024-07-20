import React, { useEffect, useState } from 'react'
import { getDatabase } from 'firebase/database'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material'
import { styled } from '@mui/system'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold'
}))

const UsersTable = () => {
  const [data, setData] = useState([])
  const database = getDatabase()

  async function fetchData() {
    try {
      const user = auth.currentUser
      if (user) {
        const userId = user.uid
        const dbRef = database.ref('users/' + userId + '/students')
        dbRef.on('value', snapshot => {
          const students = snapshot.val()
          const studentList = []
          for (let id in students) {
            studentList.push(students[id])
          }
          setData(studentList)
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData()
    console.log('fetching data', data)
  }, [])

  const rowsPerPage = 1

  const pageCount = Math.ceil(data.length / rowsPerPage)

  const [page, setPage] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <div>
      <h2>Students Information</h2>
      {/* {data
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((data, index) => (
          <UserTable
            key={index}
            data={data}
            fetchData={fetchData}
            page={page}
            setPage={setPage}
          />
        ))}
      <TablePagination
        component='div'
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]} */}
    </div>
  )
}

export default UsersTable
