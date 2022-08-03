import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import SharedLayout from './components/SharedLayout';
import Error from './pages/Error';
import Landing from './pages/landing/Landing';
import Training from './pages/training/Training';


const App = () => {
  return (
    <>
      <Landing/>
      <Training/>
      {/* <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path='training' element={<Training/>}/>
          <Route path='talent' element={<Talent/>}/>
          <Route element={<ProtectedRoutes/>}>
          </Route>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes> */}
    </>
  )
}

export default App