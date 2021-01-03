import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>#Lesson01Level01Buttonを取得し、そのボタンを押すと<br />背景色が#3cb371と#ffa500に交互に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <Button id="Lesson01Level01Button">ボタン</Button>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
