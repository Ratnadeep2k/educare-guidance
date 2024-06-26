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
function App () {
  return (
    <>
      <Router>
        <Routes>
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
          <Route
            path='/admin/dashboard'
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            }
          />
          <Route
            path='/admin/users'
            element={
              <AdminLayout>
                <Users />
              </AdminLayout>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
