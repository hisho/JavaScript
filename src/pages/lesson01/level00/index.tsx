import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>ボタンを押すとbodyの背景色が#3cb371と#ffa500に交互に変わるコードを書け！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        {/*
           classはclassName=""として付けることができます。
           idはid=""として付けることができます。
        */}
        <Button className="exampleClassName" id="exampleID">ボタン</Button>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
