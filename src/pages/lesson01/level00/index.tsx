import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>ボタンを押すと背景色が変わるコードを書け！</p>
          <p>再度ボタンを押すと元の色に戻るようにせよ！</p>
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
