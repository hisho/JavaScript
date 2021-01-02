import React from "react";

type sectionPropsType = Readonly<{
  children: React.ReactNode
}>

export const Section: React.FC<sectionPropsType> = ({children}) => {
  return (
    <>
      <div className="section">
        {children}
      </div>
    </>
  )
}
