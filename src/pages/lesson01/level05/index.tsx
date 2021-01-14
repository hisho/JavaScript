import React from 'react';
import { ProcessedOptions } from 'html-webpack-plugin';
import { newRenderToStaticMarkup } from "src/hooks";
import { Button, ButtonLink, Section } from "src/components";

export default ({ htmlWebpackPlugin }: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>#Lesson01Level05Buttonを取得し、ボタンを押すとbodyの背景色が<br />#Lesson01Level05Color01で設定した色に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <label>カラーピッカー：<input type="color" id="Lesson01Level05Color01" value="" /></label>
          <Button id="Lesson01Level05Button">ボタン1</Button>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
