import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <ButtonLink href="lesson01/level00">level00</ButtonLink>
          <ButtonLink href="lesson01/level01">level01</ButtonLink>
          <ButtonLink href="lesson01/level02">level02</ButtonLink>
          <ButtonLink href="lesson01/level03">level03</ButtonLink>
          <ButtonLink href="lesson01/level04">level04</ButtonLink>
          <ButtonLink href="lesson01/level05">level05</ButtonLink>
          <ButtonLink href="lesson01/level06">level06</ButtonLink>
          <ButtonLink href="lesson01/level07">level07</ButtonLink>
          <ButtonLink>TOP</ButtonLink>
          <ButtonLink href="template">テンプレート</ButtonLink>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
