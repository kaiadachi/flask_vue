<template>
<div id="app">
	<header class="nav">
		<nav class="navbar is-info" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<div class="hero-body">
					<h1 class="title">スクレイプくん</h1>
				</div>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
					<router-link to="/" class="navbar-item">Home</router-link>
					<router-link to="/about" class="navbar-item">About</router-link>
				</div>
			</div>
		</nav>
	</header>

	<router-view />

	<footer class="footer">
		<div class="content has-text-centered">
			<p>
				<strong>スクレイプくん</strong> by <a href="https://kaisportfolio.work/">Kai Adachi</a>
			</p>
		</div>
	</footer>
</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
