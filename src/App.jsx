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
      <div className='md:flex md:w-[900px] mx-auto'>
      <Dashboard></Dashboard>
      <PriceChart></PriceChart>
      </div>
    </>
  )
}

export default App
