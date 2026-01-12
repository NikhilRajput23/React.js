import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { DataContext } from './Context/UserContext'

const App = () => {
  const data=useContext(DataContext);
  return (
    <div><h1>name{data.usename}{data.name}
    <Header/>
<Footer/>
</h1>
    </div>

  )
}

export default App