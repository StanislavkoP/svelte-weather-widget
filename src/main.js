import App from './App.svelte';

const app = new App({
	target: document.querySelector('#weather-widget'),
});

window.app = app;

export default app;