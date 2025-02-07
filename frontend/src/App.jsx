
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/headerComponent'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEmployeeComponent from './components/AddEmployeeComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import DepartmentComponent from './components/DepartmentComponent'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <HeaderComponent /> 
      <Routes>
      <Route path='/' element= {<ListEmployeeComponent/>}></Route>
      <Route path='/employees' element= {<ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element= {<AddEmployeeComponent/>}></Route>
      <Route path = '/edit-employee/:id' element={<AddEmployeeComponent/>}></Route>
      <Route path='/departments' element= {<ListDepartmentComponent/>}></Route>
      <Route path='/add-department' element= {<DepartmentComponent/>}></Route>
      <Route path='/update-department/:id' element= {<DepartmentComponent/>}> </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
