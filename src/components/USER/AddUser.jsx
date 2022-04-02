import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
const [error, setError] = useState()

  const submitHandler = (e) => {
    //basic form validation
    e.preventDefault()
    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0  || +enteredAge < 1) {
    //   return
    // }
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 
    ) {
      setError({title : 'invalid input', message : 'please enter a valid name and age (non - empty values)'})
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid input",
        message: "please enter a valid  age (> 1)",
      })
      return
    }
      props.onAddusers(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const changeUsername = (e) => {
  setEnteredUsername(e.target.value)
}
  const changeAge = (e) => {
  setEnteredAge(e.target.value)
}
// this -  {error && <ErrorModal  message = {error.message} title  = {error.title}/>} means that if error is NOT EMPTY
  //  render errorModal component which is set to non -empty in the conditional statements

  //to close the handler set it to empty

  const closeErrorHandler = () => {
    setError(null)
  }
  return (
    <Wrapper>
     {error && <ErrorModal  message = {error.message} title  = {error.title} onCloseError = {closeErrorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="userName"
            value={enteredUsername}
            onChange={changeUsername}
          />
          <label htmlFor="age"> age (in years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={changeAge}
          />

          <Button type="submit" submitHandler={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  )
};

export default AddUser;
