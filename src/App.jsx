import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PriceChart from './components/PriceChart/PriceChart'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Products></Products>
      <div className='md:flex'>
      <Dashboard></Dashboard>
      <PriceChart></PriceChart>
      </div>
    </>
  )
}

export default App
