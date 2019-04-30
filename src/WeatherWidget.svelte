<script>
	import { onMount } from 'svelte';

	import GeneralIcon from './GeneralIcon';

	import { getUserPosition, getWeatherByCoord } from './helpers';

	export let currentWeather = {};
	export let userLocationInformation = {
		coordPosition : {
			latitude : 0,
			longitude: 0,
		},
		timezone : ''
	}
	export let ui = '';

	function getState () {
		currentWeather.icon = ui;
	}

	onMount(() => {
		getUserPosition()
			.then(coordinates => {
				userLocationInformation.coordPosition.latitude = coordinates.latitude;
				userLocationInformation.coordPosition.longitude = coordinates.longitude;

				getWeatherByCoord(coordinates)
					.then(res => {
						console.log(res)
						currentWeather = res.currently;
						userLocationInformation.timezone = res.timezone;
					})
			})
			.catch(err => console.warn(`ERROR(${err.code}): ${err.message}`))
	})
</script>

<style>
	.weather {
		max-width: 400px;
		padding: 21px;
		box-sizing: border-box;
	}

	.weather * {
		box-sizing: border-box;
	}

	.weather img {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.weather__top {
		display: flex;
		padding: 21px;
		color: white;
		text-align: center;
		background-color: #64b9ff;
	}

	.weather.rain .weather__top {
		color: #0D47A1;
		background-color: #bbdefb;
	}

	.weather.clear-night .weather__top {
		background-color: black;
	}

	.weather.sleet .weather__top,
	.weather.snow .weather__top {
		color: white;
		background-color: #90a4ae;
	}

	.weather.rain .weather__top {
		color: white;
		background-color: #90a4ae;
	}

	.weather__top-right,
	.weather__top-left {
		width: 50%;
	}

	.weather__status {
		font-size: 16px
	}

	.weather__general-temp {
		font-size: 50px;
		font-weight: 600
	}

	.weather__graphic {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.weather__details {
		display: flex;
		flex-wrap: wrap;
		background-color: white;
	}

	.weather__detail {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		padding: 11px 20px;
		line-height: 1.3;
	}

	.weather__detail:nth-child(1) {
		border-right: 1px solid #E3EBF3;
		border-bottom: 1px solid #E3EBF3;
	}

	.weather__detail:nth-child(2) {
		border-bottom: 1px solid #E3EBF3;
	}

	.weather__detail:nth-child(3) {
		border-right: 1px solid #E3EBF3;
	}


	.weather__detail-icon {
		width: 30px;
	}

	.weather__detail-left {
		margin-right: 10px;
	}

	.weather__detail-right {
		text-align: right;
	}

	.weather__detail-name {
		text-transform: uppercase;
	}


</style>

	<div class="weather-wrap">
		<input type="text" bind:value={ui}>
		<div class={"weather " + currentWeather.icon}>
			<div class="weather__top">
				<div class="weather__top-left">
					<div class="weather__status">
						{ currentWeather.summary }
					</div>
					
					<div class="weather__general-temp">
						<span class="weather__general-temp-num">
							{#if currentWeather.temperature }
								{ Math.round(currentWeather.temperature) }
							{/if}
						</span>
						<span class="weather__general-temp-symb">
							C&deg;
						</span>
					</div>

					<div class="weather__location">
						{ userLocationInformation.timezone }
					</div>
				</div>

				<div class="weather__top-right">
					<div class="weather__graphic">
							<GeneralIcon  typeIcon={currentWeather.icon}/>
					</div>
				</div>
			</div>
			
			<div class="weather__bottom">
				<div class="weather__details">
					<div class="weather__detail">
						<div class="weather__detail-left">
							<img src="./icons/thermometer-temperature-control-tool.svg" alt="" class="weather__detail-icon">
						</div>
						<div class="weather__detail-right">
							<div class="weather__detail-name">
								Real feel
							</div>
							<div class="weather__detail-value">
								{ Math.round(currentWeather.apparentTemperature) } C&deg;
							</div>
						</div>
					
					</div>
					<div class="weather__detail">
						<div class="weather__detail-left">
							<img src="./icons/breeze.svg" alt="" class="weather__detail-icon">
						</div>
						<div class="weather__detail-right">
							<div class="weather__detail-name">
								wind
							</div>
							<div class="weather__detail-value">
							{#if currentWeather.windSpeed }
								{ currentWeather.windSpeed.toFixed(1) } km/h
							{/if}
							</div>
						</div>
					</div>

					<div class="weather__detail">
						<div class="weather__detail-left">
							<img src="./icons/meter.svg" alt="" class="weather__detail-icon">
						</div>
						<div class="weather__detail-right">
							<div class="weather__detail-name">
								Pressure
							</div>
							<div class="weather__detail-value">
								{#if currentWeather.pressure }
									in { currentWeather.pressure.toFixed(2) }
								{/if}
							</div>
						</div>
					</div>

					<div class="weather__detail">
						<div class="weather__detail-left">
							<img src="./icons/sun.svg" alt="" class="weather__detail-icon">
						</div>
						<div class="weather__detail-right">
							<div class="weather__detail-name">
								Uv index
							</div>
							<div class="weather__detail-value">
								{ currentWeather.uvIndex }
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	<button on:click={getState}>
		Get state
	</button>
</div>
