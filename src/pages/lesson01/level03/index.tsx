import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>.Lesson01Level03Buttonを取得し、1つ目のボタンを押すと<br />bodyの背景色が#3cb371と#ffa500に交互に変わるコードを書け！</p>
          <p>.Lesson01Level03Buttonを取得し、2つ目のボタンを押すと<br />bodyの背景色が#ffc0cbと#6495edに交互に変わるコードを書け！</p>
          <p>.Lesson01Level03Buttonを取得し、3つ目のボタンを押すと<br />bodyの背景色が#9370dbと#fffaf0に交互に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <Button className="Lesson01Level03Button">ボタン1</Button>
          <Button className="Lesson01Level03Button">ボタン2</Button>
          <Button className="Lesson01Level03Button">ボタン3</Button>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
