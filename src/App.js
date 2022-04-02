import React, {useState, Fragment } from "react"
import AddUser from "./components/USER/AddUser"
import UsersList from "./components/USER/UsersList"

const App = () => {
  const [userList, setUserList] = useState([])


  const addUsersHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name : uName, age : uAge, id : Math.random().toString()}]
    })
  }

  return (
    <Fragment>
      
      <AddUser  onAddusers = {addUsersHandler} />
      <UsersList  users = {userList}/>
    </Fragment>
  )
}

export default App
