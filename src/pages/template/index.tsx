import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Helmet} from "react-helmet";
import {ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Helmet>
        <title>テンプレート</title>
      </Helmet>
      <Section>
        <div className="flex flex-col">
          <ButtonLink>TOPに戻る</ButtonLink>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
