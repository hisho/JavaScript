/**
 * 背景色をスイッチする
 */
export default class SwitchBgColor {
  private elm:HTMLElement;
  private colors: string[];
  private pointer:number;

  constructor() {
    this.elm = document.body;
    this.colors = ['#ffffff', '#000000'];
    this.pointer = 0;
    return this;
  }

  /**
   * 設定を変更する
   * @param {HTMLElement} options.elm HTMLElement 背景色を変更するターゲットHTML要素
   * @param {string[]} options.colors 変更するカラーの配列
   * @return {this} SwitchBgColor;
   */
  config(options: {
    elm?:HTMLElement,
    colors:string[]
  }) {
    if(options.elm) this.elm = options.elm;
    if(options.colors) this.colors = options.colors;
    return this;
  }

  /**
   * 背景色を次にすすめる
   * @return {this} SwitchBgColor;
   */
  next() {
    if(++this.pointer >= this.colors.length) this.pointer -= this.colors.length;
    this.elm.style.backgroundColor = this.colors[this.pointer];
    return this;
  }

  /**
   * 背景色を前にもどす
   * @return {this} SwitchBgColor;
   */
  back() {
    if(--this.pointer < 0) this.pointer += this.colors.length;
    this.elm.style.backgroundColor = this.colors[this.pointer];
    return this;
  }
}
