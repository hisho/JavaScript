/**
 * 背景色をトグルする
 */
export default class SwitchBgColor {
  private elm:HTMLElement;
  private colors: string[];
  private state: {
    pointer:number
  };

  /**
   * コンストラクタ
   * @param options.elm HTMLElement 背景色を変更するターゲットHTML要素
   * @param options.iniColor String カラー１
   * @param options.altColor String カラー２
   * @return this SwitchBgColor
   */
  constructor(options?:{
    elm?:HTMLElement,
    colors:string[]
  }) {
    this.elm = document.body;
    this.colors = ['#3cb371', '#ffa500'];
    if(options) this.config(options);
    this.state = {
      pointer: 0
    };
    return this;
  }

  /**
   * 設定を変更する
   * @param options.elm HTMLElement 背景色を変更するターゲットHTML要素
   * @param options.colors 変更するカラーの配列
   * @return this SwitchBgColor;
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
   * @return this SwitchBgColor;
   */
  next() {
    this.elm.style.backgroundColor = this.colors[this.state.pointer];
    if(++this.state.pointer >= this.colors.length) this.state.pointer -= this.colors.length;
    return this;
  }

  /**
   * 背景色を前にもどす
   * @return this SwitchBgColor;
   */
  back() {
    this.elm.style.backgroundColor = this.colors[this.state.pointer];
    if(--this.state.pointer < 0) this.state.pointer += this.colors.length;
    return this;
  }
}
