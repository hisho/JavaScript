import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      テスト
      <Section>
        <div className="flex flex-col">
          <ButtonLink>TOP</ButtonLink>
          <ButtonLink href="template">テンプレート</ButtonLink>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
