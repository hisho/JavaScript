import React from "react";

type ButtonPropsType = Readonly<{
  className?: string
  id?: string
  children: React.ReactNode
}>

export const Button: React.FC<ButtonPropsType> = ({className, id, children}) => {
  return (
    <>
      <button type="button" className={`button ${className ? className : ''}`} id={id ? id : ''}>
        {children}
      </button>
    </>
  )
}
