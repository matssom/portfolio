<script>
	import 'amidst/amidst.css';
	import 'amidst/amidst';
	import { Router, Route } from 'svelte-routing';
	import Navigation from './components/Content/Navigation.svelte';
	import Container from './components/Layout/Container.svelte';
	import Home from './routes/Home.svelte';
	import Work from './routes/Work.svelte';
	import Education from './routes/Education.svelte';
	import Tools from './routes/Tools.svelte';
	import Skills from './routes/Skills.svelte';
	import Npm from './routes/Npm.svelte';
	import Footer from './components/Content/Footer.svelte';
	import { theme } from './store/theme.js';

	export let url = "";

</script>

<div class="body {$theme.name}">
	<Router url={url}>
		<header>
			<Container padding>
				<Navigation />
			</Container>
		</header>
		
		<main>
			<Route path="/work" component={ Work }/>
			<Route path="/education" component={ Education }/>
			<Route path="/tools" component={ Tools }/>
			<Route path="/soft-skills" component={ Skills }/>
			<Route path="/npm" component={ Npm }/>
			<Route path="/"><Home /></Route>
		</main>
		
		<footer>
			<Footer />
		</footer>
	</Router>
</div>

<style>
	.body {
		background-color: var(--back-color);
	}

	.night {
		--primary-color: #0678F4;
		--primary-color-2: #0053ac;
		--primary-color-3: #083769;

		--secondary-color: #333435;
		--secondary-color-2: #3c4146;
		--secondary-color-3: #5d6b79;

		--text-color-0: #1f1f1f;
		--text-color: #494949;
		--text-color-2: #dadada;
		--text-color-3: #fff;

		--back-color: #2b2b2b;
		--back-color-2: #38393b;
		--back-color-3: #F7F8F8;
		--back-color-4: white;
		--back-color-5: linear-gradient(50deg, rgb(148, 219, 247) 0%, rgb(223, 238, 240) 100%);

		--border-color: #272727;

		--shade: rgba(0,0,0,0.1);
		--shade-2: rgba(0,0,0,0.2);

		--primary-heading-color: white;
		--primary-button-text: white;

		--button-color:			var(--secondary-color);
		--button-color-hover:	var(--secondary-color-2);	
		--button-color-active:	var(--secondary-color-3);

		--link-color:			#a3d0ff;
		--link-color-hover: 	#bed7f1;
		--link-color-active: 	#ffffff;

		--tag-color: var(--back-color);

		--card-color: var(--back-color-2);
		--card-color-2: var(--back-color-2);

		--icon-color: var(--text-color-3);
		--icon-color-2: var(--text-color-2);
		--icon-color-3: var(--text-color-3);

		--proficient-color: 	#4e4a50;

		--gap-huge: 5.5rem;
		--gap-large: 2.8rem;
		--gap-medium: 1.4rem;
		--gap-small: 1rem;

		--border-radius-button: .3rem;
		--border-radius-card: .5rem;
		
		--transition: all .1s linear;
		--box-shadow: 0 2px 4px rgba(14,30,37,.12);
	}
</style>