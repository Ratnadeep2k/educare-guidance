import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Box,
  TextField,
  MenuItem,
  Select
} from '@mui/material'
import { Edit, Delete, Add, Save } from '@mui/icons-material'
import axios from 'axios'

const StudentsTable = ({ fetchData }) => {
  const navigate = useNavigate()

  const [editMode, setEditMode] = useState(null)
  const [editedFields, setEditedFields] = useState({})
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/students`
      )
      setStudents(response.data)
    } catch (error) {
      console.error('Error fetching students: ', error)
    }
  }

  const handleChange = (e, index) => {
    const { name, value } = e.target
    setEditedFields(prevFields => ({
      ...prevFields,
      [index]: {
        ...prevFields[index],
        [name]: value
      }
    }))
  }

  const handleEdit = index => {
    setEditMode(index)
    setEditedFields({ ...editedFields, [index]: { ...students[index] } })
  }

  const handleSave = async (student, index) => {
    try {
      const studentId = student._id
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/students/${studentId}`,
        editedFields[index]
      )
      console.log('Data saved: ', response.data)
      setEditMode(null)
      setEditedFields({})
      fetchStudents()
    } catch (error) {
      console.error('Error saving data: ', error)
    }
  }

  const handleDelete = async student => {
    try {
      const studentId = student._id
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/students/${studentId}`
      )
      console.log('Student deleted:', student)
      fetchStudents()
    } catch (error) {
      console.error('Error deleting student: ', error)
    }
  }

  const handleCreate = () => {
    navigate('/admin/students/create')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 2
        }}
      >
        <Button
          sx={{ width: 120 }}
          variant='contained'
          color='primary'
          startIcon={<Add />}
          onClick={handleCreate}
        >
          Create
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Sex</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Enrollment Date</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      name='name'
                      value={editedFields[index]?.name || student.name}
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    student.name
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      type='number'
                      name='age'
                      value={editedFields[index]?.age || student.age}
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    student.age
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <Select
                      name='sex'
                      value={editedFields[index]?.sex || student.sex}
                      onChange={e => handleChange(e, index)}
                    >
                      <MenuItem value='Male'>Male</MenuItem>
                      <MenuItem value='Female'>Female</MenuItem>
                    </Select>
                  ) : (
                    student.sex
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      type='number'
                      name='phone'
                      value={editedFields[index]?.phone || student.phone}
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    student.phone
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      name='address'
                      value={editedFields[index]?.address || student.address}
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    student.address
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      type='date'
                      name='enrollmentDate'
                      value={
                        editedFields[index]?.enrollmentDate
                          ? new Date(editedFields[index].enrollmentDate)
                              .toISOString()
                              .split('T')[0]
                          : new Date(student.enrollmentDate)
                              .toISOString()
                              .split('T')[0]
                      }
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    new Date(student.enrollmentDate).toLocaleDateString()
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <TextField
                      name='course'
                      value={editedFields[index]?.course || student.course}
                      onChange={e => handleChange(e, index)}
                    />
                  ) : (
                    student.course
                  )}
                </TableCell>
                <TableCell>
                  {editMode === index ? (
                    <IconButton
                      aria-label='save'
                      onClick={() => handleSave(student, index)}
                    >
                      <Save />
                    </IconButton>
                  ) : (
                    <>
                      <IconButton
                        aria-label='edit'
                        onClick={() => handleEdit(index)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label='delete'
                        onClick={() => handleDelete(student)}
                      >
                        <Delete />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default StudentsTable
