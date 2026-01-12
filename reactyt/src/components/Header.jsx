import React, { useContext } from 'react'
import { DataContext } from '../Context/UserContext'

const Header = () => {
    const dataa=useContext(DataContext);
  return (
    <div>Header madhe {dataa.city}</div>
  )
}

export default Header