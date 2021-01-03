import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>.Lesson01Level02Buttonを取得し、それぞれのボタンを押すと<br />bodyの背景色が#3cb371と#ffa500に交互に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <Button className="Lesson01Level02Button">ボタン</Button>
          <Button className="Lesson01Level02Button">ボタン</Button>
          <Button className="Lesson01Level02Button">ボタン</Button>
          <Button className="Lesson01Level02Button">ボタン</Button>
          <Button className="Lesson01Level02Button">ボタン</Button>
          <Button className="Lesson01Level02Button">ボタン</Button>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
