export default class ToggleBgColor {
  private readonly elem:HTMLElement;
  private readonly iniColor:string;
  private readonly altColor:string;
  private isAlt:boolean;

  constructor(elem:HTMLElement, iniColor:string = '#3cb371', altColor = '#ffa500') {
    this.elem = elem;
    this.iniColor = iniColor;
    this.altColor = altColor;
    this.isAlt = false;
    //this.elem.style.backgroundColor = this.iniColor;
  }

  toggle() {
    if(this.isAlt) {
      this.elem.style.backgroundColor = this.iniColor;
    } else {
      this.elem.style.backgroundColor = this.altColor;
    }
    this.isAlt = !this.isAlt;
  }
}
