export default class ToggleBgColor {
  private elm:HTMLElement;
  private readonly colors: string[];
  private state: {
    isAlt:boolean
  };

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
  }

  config(options: {
    elm?:HTMLElement,
    iniColor?:string,
    altColor?:string
  }) {
    if(options.elm) this.elm = options.elm;
    if(options.iniColor) this.colors[0] = options.iniColor;
    if(options.altColor) this.colors[1] = options.altColor;
  }

  toggle() {
    this.elm.style.backgroundColor = this.colors[Number(this.state.isAlt)];
    this.state.isAlt = !this.state.isAlt;
  }
}
