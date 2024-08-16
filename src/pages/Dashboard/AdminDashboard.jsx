import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import StudentsTables from '../../components/Students/StudentsTables'

const AdminDashboard = () => {
  return (
    <DefaultLayout>
      <div className='col-span-12 xl:col-span-8'>
        <StudentsTables />
      </div>
    </DefaultLayout>
  )
}

export default AdminDashboard
