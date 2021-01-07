import React from 'react';
import {ProcessedOptions} from 'html-webpack-plugin';
import {newRenderToStaticMarkup} from "src/hooks";
import {Button, ButtonLink, Section} from "src/components";

export default ({htmlWebpackPlugin}: ProcessedOptions) => {
  return newRenderToStaticMarkup(
    <>
      <Section>
        <div>
          <p>
            ボタン(#Lesson01Level07Button)を取得し、<br />
            登録を押すとbodyの背景色が#3cb371と#ffa500に交互に変わる様にせよ！<br />
            ただし、解除を押した後はボタンを押してもbodyの背景色は変わらなくなり、<br />
            再度登録を押すとまたbodyの背景色が交互に変わる様にすること！</p>
          <ButtonLink>TOPに戻る</ButtonLink>
          <p className="text-center text-8xl">↓</p>
        </div>
      </Section>

      <Section>
        <div>
          <Button id="Lesson01Level07Button">ボタン</Button>
          <div className="-ml-2 flex">
            <div className="pl-2 w-1/2">
              <button id="Lesson01Level07ButtonRegister" className="w-full rounded px-4 py-2 text-white font-bold bg-green-400 transition-colors duration-300 ease-out hover:bg-green-600 focus:bg-green-600" type="button">登録</button>
            </div>
            <div className="pl-2 w-1/2">
              <button id="Lesson01Level07ButtonUnRegister" className="w-full rounded px-4 py-2 text-white font-bold bg-red-600 transition-colors duration-300 ease-out hover:bg-red-800 focus:bg-red-800" type="button">解除</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )(htmlWebpackPlugin);
};
