import React, {useContext} from "react";
import {CurrentPage} from "src/config";

type LinkPropsType = Readonly<{
  href?: string
}>

export const Link: React.FC<LinkPropsType> = ({href, children}) => {
  const {path} = useContext(CurrentPage);
  return (
    <>
      <a href={path + (href ? href : '')}>{children}</a>
    </>
  )
}
