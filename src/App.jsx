import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Landing from './pages/landing/Landing';
import Training from './pages/training/Training';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Landing/>}/>
        <Route element={<SharedLayout/>}>
          <Route path='training' element={<Training/>}/>
          {/* <Route path='talent' element={<Talent/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App