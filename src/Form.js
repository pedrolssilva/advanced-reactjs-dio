import React, {useContext} from 'react';
import {ThemeContext} from './Theme';

function Form(){
  const context = useContext(ThemeContext)

  const renderForm = (
    <form action="">
      <label htmlFor="">Name:</label>
      <input />
      
      <label htmlFor="">Email:</label>
      <input />
      
      <label htmlFor="">Age:</label>
      <input />

      <label htmlFor="">Phone:</label>
      <input />
    </form>
  ) 

  const renderNotLogged = (
     <h1>Login is requested</h1>
  )

  return (
    <div>
      {!context.token ? renderNotLogged : renderForm}
    </div>
  )
}

export default Form;