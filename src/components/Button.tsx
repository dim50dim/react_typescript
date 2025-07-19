import React from 'react'

type ButtonProps = {

   }


 function Button({children}: ButtonProps){
  return (
    <div>
      <button onClick={onClick} >Click me</button>
    </div>
  )
}

export default Button
