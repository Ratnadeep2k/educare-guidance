import React, { useEffect, useState } from 'react'
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
import { Edit, Delete } from '@mui/icons-material'
import { readUserdata } from '../../firebase/utils/readUserData'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold'
}))

const UsersTable = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const rowsPerPage = 5

  const fetchData = async () => {
    const userData = await readUserdata()
    setData(userData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <h2>Students Information</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Edit className='cursor-pointer' />
                    <Delete className='cursor-pointer' />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component='div'
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
  )
}

export default UsersTable
