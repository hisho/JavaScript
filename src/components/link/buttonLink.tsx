import React from "react";
import {Link} from "src/components";
import {LinkPropsType} from "src/components/link/types";

export const ButtonLink: React.FC<LinkPropsType> = (
  {
    href = '',
    className = '',
    children
  }) => {
  return (
    <>
      <Link href={href} className={"buttonLink" + className}>
        {children}
      </Link>
    </>
  )
}
