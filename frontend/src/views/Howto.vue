<template>
<div class="box">
	<div class="notification is-primary">
		<p>
			1. 入力情報にスクレイピング先のURLと、CSSセレクタを書き込む。
			パスの指定は、CSSセレクタのみの対応である。CSSセレクタは複数指定することができ、追加ボタンより追加が可能。
		</p>
	</div>
	<div class="notification is-link">
		2. 出力情報を確認し、Go Crawlボタンを押す。
	</div>
	<div class="notification is-info">
		<p>3. Resultsに結果が吐き出されるので、良さそうであればCSVダウンロードボタンよりダウンロードを行う。</p>
	</div>
	<div class="notification is-warning">
		<p>※注意点</p>
		<p>CSSセレクタを検証ツールなどでコピペしてくるとき、nth-childなどchild要素を持ったものは、nth-of-typeに変更すること。</p>
		<p>例: nth-child(3) → nth-of-type(3)</p>
	</div>


</div>
</template>
