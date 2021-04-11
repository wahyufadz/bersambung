<script lang="ts">
	import Router from "svelte-spa-router";
	import { routes } from "./util/routes";
</script>

<main>
	<a href="/#/">Home</a>
	<a href="/#/login">Login</a>
	<Router {routes}></Router>
</main>