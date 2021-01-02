import React, {FC, ReactNode, useContext} from 'react'
import {Helmet} from "react-helmet";
import {CurrentPage} from "src/config";

type LayoutType = {
  children: ReactNode
}

export const Layout: FC<LayoutType> = ({children}) => {
  const {path} = useContext(CurrentPage);
  return (
    <>
      <Helmet>
        <html lang="ja"/>
        <meta charSet="UTF-8"/>
        <title>Practice JavaScript</title>
        <script src={`${path}assets/js/main.js`} defer/>
        <link rel="stylesheet" href={`${path}assets/css/common.css`}/>
        <link rel="stylesheet" href={`${path}assets/css/utilities.css`}/>
      </Helmet>
      <body>
      {children}
      </body>
    </>
  )
}
