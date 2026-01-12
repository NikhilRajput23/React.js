import React, { createContext } from 'react'
export const DataContext=createContext();
const UserContext = ({children}) => {
  const useData={
    name:'nikhil',
    age:19,
    city:'Shirpur'
  }
  return (
    <div>
        <DataContext value={useData}>{children}</DataContext></div>
  )
}

export default UserContext