import React from 'react'
type Color = 'red' | 'blue'| 'green'
type ButtonProps = {
         backgroundColor : string,
         textColor : Color,
        fontSize: number,
        pillShape: boolean,
        padding: [number,number,number,number]
}

const Button = ({
    backgroundColor ,
    fontSize,
    pillShape,
textColor,
padding}: ButtonProps) => {

  return (
    <div>
      <button >Click me</button>
    </div>
  )
}

export default Button
