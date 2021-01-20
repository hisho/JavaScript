#全体のコード

```typescript
//①
(() => {

  //②
  //#Lesson01Level01Button DOM
  const button = document.getElementById('Lesson01Level01Button');

  //early return when does not exist #Lesson01Level01Button DOM
  if (!button) return;

　//③
  //body DOM
  const body = document.body;

  //④
  //initialize state
  const state = {
    press: false
  }

  //⑤
  //handle click event
  function clickEvent() {
    //⑥
    if (state.press) {
      //⑦
      //change body background-color
      body.style.backgroundColor = "#3cb371";
    } else {
      //⑦
      //change body background-color
      body.style.backgroundColor = "#ffa500";
    }
    //⑥
    //change state
    state.press = !state.press;
  }

  //⑧
  //register click event for button DOM
  button.addEventListener('click', clickEvent, false);

})()
```

## 1.即時関数
即時関数(関数を定義と同時に実行)で囲う事で変数の衝突を防ぐ事ができます。

### アロー関数
```typescript
//即時関数
(() => {
  //内容
})()
```
### 通常の関数
```typescript
//即時関数
(function () {
  //内容
})()
```

## 2.IDの取得
`document.getElementById`または`document.querySelector`でDOM(idが付いたタグ)の取得が可能   
取得できない時はエラーを吐くため`早期リターン`を使い`以降の処理をさせない`事でエラーを防ぐ事が可能
```typescript
//#Lesson01Level01Button DOMをgetElementByIdで取得
const button = document.getElementById('Lesson01Level01Button');

//#Lesson01Level01Button DOMをquerySelectorで取得
//※querySelectorの場合は`#`を忘れないように！
//const button = document.querySelector('#Lesson01Level01Button');

//#Lesson01Level01Buttonが取得できない場合は以降の処理をさせない
if (!button) return;
```

## 3.bodyの取得
`document.body`または`document.querySelector`でbodyのDOMの取得が可能   
`body`,`head`,`html`などは`querySelector`を使わなくてもすぐに取得が可能   
※typescriptの場合querySelectorを使うと返り値がHTMLBodyElement | nullになるので`document.body`推奨
```typescript
//body DOM
const body = document.body;
```

## 4.ステータスを管理するオブジェクトを作成
今回は変わる値が一つしか無いが、Objectにすることで将来的に複数のステータスを管理するようになった時に楽なためObjectで管理する   
`state.press`でアクセス可能   
※Objectは`const`で宣言しても再代入可能
```typescript
//ステータスを管理するオブジェクト
const state = {
  press: false
}
```

## 5.クリックした時の関数
クリックした時に実行する関数を宣言   
`button`が押される度にこの関数が実行される
```typescript
//クリックした時の関数
function clickEvent() {
//内容
}
```

## 6.ステータスの反転
`state.press`が`true`の時`内容①`を実行`false`の時`内容②`を実行する。   
if分が終わったら`state.press`を`!state.press`にすることで`現在のstate.pressの値`を`反転する`   
※`!ture`で`false`に`!false`で`ture`になる
```typescript
if (state.press) {
  //内容①
} else {
  //内容②
}
state.press = !state.press;
```

## 7.背景色の変更
`DOM`.`style`.`styleのプロパティ名(キャメルケース)` = `値`にすることで代入可能   
`DOM`.`setAttribute`でも可能だが、上記の方が楽でわかりやすい
```typescript
if (state.press) {
  //state.pressがtureの時
  body.style.backgroundColor = "#3cb371";
} else {
  //state.pressがfalseの時
  body.style.backgroundColor = "#ffa500";
}
```

## 8.クリックイベントの登録
`DOM`.addEventListener('イベントの種類', 関数)とすることでイベントを登録できる
第三引数が気になる人は各自で調べてみて欲しい
```typescript
//クリックイベントに登録する
button.addEventListener('click', clickEvent, false);
```
