import Footer from './components/Footer'
import Body from './pages/Body'
import Contact from './components/Contact'
import Subjects from './components/Subjects'
import SignUpTemp from './pages/Authentication/SignUpTemp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Admission from './components/Admission'
import LoginTemp from './pages/Authentication/LoginTemp'
import NavbarTemp from './components/NavbarTemp'
import About from './components/About'
import AdminDashboard from './pages/Dashboard/AdminDashboard'
import RegularLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import Users from './pages/Users/Users'
import CreateStudentForm from './components/Students/CreateStudentsTable'
import SamplePapersUpload from './pages/SamplePapersUpload/SamplePapersUpload'
import { AuthProvider } from './components/context/authContext'
import PrivateRoute from './routes/PrivateRoutes/PrivateRoutes'

function App () {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path='/'
            element={
              <RegularLayout>
                <Body />
              </RegularLayout>
            }
          />
          <Route
            path='/admission'
            element={
              <RegularLayout>
                <Admission />
              </RegularLayout>
            }
          />
          <Route
            path='/contact'
            element={
              <RegularLayout>
                <Contact />
              </RegularLayout>
            }
          />
          <Route
            path='/subjects'
            element={
              <RegularLayout>
                <Subjects />
              </RegularLayout>
            }
          />
          <Route
            path='/register'
            element={
              <RegularLayout>
                <SignUpTemp />
              </RegularLayout>
            }
          />
          <Route
            path='/login'
            element={
              <RegularLayout>
                <LoginTemp />
              </RegularLayout>
            }
          />
          <Route
            path='/about'
            element={
              <RegularLayout>
                <About />
              </RegularLayout>
            }
          />

          {/* Private Routes */}
          <Route
            path='/admin/dashboard'
            element={
              <PrivateRoute
                element={
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path='/admin/users'
            element={
              <PrivateRoute
                element={
                  <AdminLayout>
                    <Users />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path='/admin/students/create'
            element={
              <PrivateRoute
                element={
                  <AdminLayout>
                    <CreateStudentForm />
                  </AdminLayout>
                }
              />
            }
          />
          <Route
            path='/admin/upload'
            element={
              <PrivateRoute
                element={
                  <AdminLayout>
                    <SamplePapersUpload />
                  </AdminLayout>
                }
              />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
