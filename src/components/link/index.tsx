import React, {useContext} from "react";
import {CurrentPage} from "src/config";
import {LinkPropsType} from "src/components/link/types";

export const Link: React.FC<LinkPropsType> = (
  {
    href = '',
    className = '',
    children
  }) => {
  const {path} = useContext(CurrentPage);
  return (
    <>
      <a href={path + (href)} className={className}>{children}</a>
    </>
  )
}
