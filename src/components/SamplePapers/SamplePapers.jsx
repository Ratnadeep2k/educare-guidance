import React, { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
  IconButton
} from '@mui/material'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function SamplePapers () {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null
  })

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const uploadData = new FormData()
    uploadData.append('title', formData.title)
    uploadData.append('description', formData.description)
    uploadData.append('file', formData.file)

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      toast.success('Sample paper uploaded successfully')
      setFormData({
        title: '',
        description: '',
        file: null
      }) // Clear the form after submission
    } catch (error) {
      toast.error('Failed to upload sample paper')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: '600px',
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
        <Typography variant='h4' gutterBottom>
          Upload Sample Paper
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
                fullWidth
                margin='normal'
                variant='outlined'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                fullWidth
                margin='normal'
                variant='outlined'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                component='label'
                fullWidth
                sx={{ mb: 2 }}
              >
                Upload File
                <input type='file' hidden name='file' onChange={handleChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <ToastContainer />
      </Paper>
    </Box>
  )
}

export default SamplePapers
