<script>
	import 'amidst/amidst.css';
	import 'amidst/amidst.js';

	import { Router, Route } from 'svelte-routing';
	import Navigation from './components/Navigation/Navigation.svelte';
	import Container from './components/Container/Container.svelte';
	import Home from './routes/Home/Home.svelte';
	import Work from './routes/Work/Work.svelte';
	import Projects from './routes/Projects/Projects.svelte';
	import Developer from './routes/Developer/developer.svelte';

	export let url = "";
</script>

<svelte:head>
	
</svelte:head>

<Router url={url}>
	<header>
		<Container padding>
			<Navigation/>
		</Container>
	</header>
	
	<main>
		<Container>
			<Route path="/work" component={ Work }/>
			<Route path="/projects" component={ Projects }/>
			<Route path="/developer" component={ Developer }/>
			<Route path="/"><Home /></Route>
		</Container>
	</main>
	
	<footer>
	
	</footer>
</Router>

<style>
	
</style>