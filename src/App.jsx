import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Talent from './pages/talent/Talent';
import Training from './pages/training/Training';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/zuriclone' index element={<Landing/>}/>
        <Route path='/zuriclone/training' element={<Training/>}/>
        <Route path='/zuriclone/talent' element={<Talent/>}/>
      </Routes>
    </>
  )
}

export default App