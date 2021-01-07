import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>#Lesson01Level06Buttonを取得し、ボタンを一度押すとbodyの背景色が<br />#3cb371に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <Button id="Lesson01Level06Button">ボタン1</Button>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
