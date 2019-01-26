<template>
<div id="app">
	<header>
		<nav class="navbar is-info" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<div class="hero-body">
					<h1 class="title">{{title}}</h1>
				</div>
			</div>
		</nav>
		<nav class="panel">
			<p class="panel-tabs">
				<router-link to="/">Home</router-link>
				<router-link to="howto">How to</router-link>
				<router-link to="/about">About</router-link>
			</p>
		</nav>
	</header>

	<router-view />

	<footer class="footer">
		<div class="content has-text-centered">
			<p>
				<strong>{{title}}</strong> by <a href="https://kaisportfolio.work/">Kai Adachi</a>
			</p>
		</div>
	</footer>
</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			title: 'スクレイプくん'
		}
	}
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.panel-tabs a{
	font-size: 1.5em;
}
</style>
