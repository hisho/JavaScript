/**
 * 背景色をトグルする
 */
export default class ToggleBgColor {
  private elm:HTMLElement;
  private readonly colors: string[];
  private state: {
    isAlt:boolean
  };

  /**
   * コンストラクタ
   * @param options.elm HTMLElement 背景色を変更するターゲットHTML要素
   * @param options.iniColor String カラー１
   * @param options.altColor String カラー２
   * @return this ToggleBgColor
   */
  constructor(options?:{
    elm?:HTMLElement,
    iniColor?:string,
    altColor?:string
  }) {
    this.elm = document.body;
    this.colors = ['#3cb371', '#ffa500'];
    if(options) this.config(options);
    this.state = {
      isAlt: false
    };
    return this;
  }

  /**
   * 設定を変更する
   * @param options.elm HTMLElement 背景色を変更するターゲットHTML要素
   * @param options.iniColor String カラー１
   * @param options.altColor String カラー２
   * @return this ToggleBgColor;
   */
  config(options: {
    elm?:HTMLElement,
    iniColor?:string,
    altColor?:string
  }) {
    if(options.elm) this.elm = options.elm;
    if(options.iniColor) this.colors[0] = options.iniColor;
    if(options.altColor) this.colors[1] = options.altColor;
    return this;
  }

  /**
   * 背景色をトグルする
   * @return this ToggleBgColor;
   */
  toggle() {
    this.elm.style.backgroundColor = this.colors[Number(this.state.isAlt)];
    this.state.isAlt = !this.state.isAlt;
    return this;
  }
}
