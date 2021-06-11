<template>
  <div class="box">
    <div class="notification is-primary">
      <p>
        1. 入力情報にGoogleにて検索したいKWと、取得したいページ数、CSSセレクタを書き込む
      </p>
      <p>
        例えば、KW: 松の育て方, ページ数: 1, CSSセレクタ: h1 とすれば「松の育て方」で検索した上位10件のh1情報とURLが取得される
      </p>
      <p>URLとタイトルはデフォルトで取得する</p>
      <p>CSSセレクタはh1,h2など複数指定可能</p>
      <p>ページは負荷を考慮して3ページ、最大30件までとしている</p>
    </div>
    <div class="notification is-primary">
      <p>2. 出力情報を確認し、Go Crawlボタンを押す</p>
      <p>入力したKWとページ数は自動で出力項目へ反映される</p>
      <p>CSSセレクタに関しては入力後、「CSSセレクタに追加」ボタンにて手動で追加</p>
    </div>
    <div class="notification is-primary">
      <p>3. Resultsに結果が吐き出されるので、良さそうであればCSVダウンロードボタンよりダウンロードを行う。</p>
    </div>
    <div class="notification is-warning">
      <p>※注意点</p>
      <p>CSSセレクタを検証ツールなどでコピペしてくるとき、nth-childなどchild要素を持ったものは、nth-of-typeに変更すること。</p>
      <p>例: nth-child(3) → nth-of-type(3)</p>
    </div>
  </div>
</template>
