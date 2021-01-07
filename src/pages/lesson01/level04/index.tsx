import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>.Lesson01Level04Buttonを取得し、1つ目のボタンを押すとbodyの背景色が<br />①#3cb371→②#ffa500→③#ffc0cb→①#3cb371...と順番に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <Button className="Lesson01Level04Button">ボタン1</Button>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
