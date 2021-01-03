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
          <ButtonLink>TOP</ButtonLink>
          <ButtonLink href="template">テンプレート</ButtonLink>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
