<script>
	export let typeIcon;
</script>


<style>
	/* SUNNY */
	.sunny {
		animation: sunny 15s linear infinite;
		background: linear-gradient(
			top,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.8) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		height: 140px;
		width: 20px;
		position: absolute;
		left: 74px;
		top: 0;
	}
	.sunny:before {
		background: linear-gradient(
			top,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.8) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		content: "";
		height: 140px;
		width: 20px;
		opacity: 1;
		position: absolute;
		bottom: 0px;
		left: 0px;
		transform: rotate(90deg);
	}
	.sunny:after {
		background: #ffee44;
		border-radius: 50%;
		box-shadow: rgba(255, 255, 0, 0.2) 0 0 0 15px;
		content: "";
		height: 80px;
		width: 80px;
		position: absolute;
		left: -30px;
		top: 30px;
	}

	@keyframes sunny {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}

	/* CLOUDY */
	.cloudy {
		animation: cloudy 5s ease-in-out infinite;
		background: #ffffff;
		border-radius: 50%;
		box-shadow: #ffffff 65px -15px 0 -5px, #ffffff 25px -25px, #ffffff 30px 10px,
			#ffffff 60px 15px 0 -10px, #ffffff 85px 5px 0 -5px;
		height: 50px;
		width: 50px;
		position: absolute;
		top: 28px;
		left: 18px;
		z-index: 1;
	}
	.cloudy:after {
		animation: cloudy_shadow 5s ease-in-out infinite;
		background: #000000;
		border-radius: 50%;
		content: "";
		height: 15px;
		width: 120px;
		opacity: 0.2;
		position: absolute;
		left: 5px;
		bottom: -60px;
		transform: scale(1);
	}

	@keyframes cloudy {
		50% {
			-webkit-transform: translateY(-20px);
			transform: translateY(-20px);
		}
	}

	@keyframes cloudy_shadow {
		50% {
			transform: translateY(20px) scale(0.7);
			opacity: 0.05;
		}
	}

	/* RAINY */
	.rainy {
		animation: rainy 5s ease-in-out infinite 1s;
		background: #cccccc;
		border-radius: 50%;
		box-shadow: #cccccc 65px -15px 0 -5px, #cccccc 25px -25px, #cccccc 30px 10px,
			#cccccc 60px 15px 0 -10px, #cccccc 85px 5px 0 -5px;
		display: block;
		height: 50px;
		width: 50px;
		position: absolute;
		top: 28px;
		left: 18px;
	}
	.rainy:after {
		animation: rainy_shadow 5s ease-in-out infinite 1s;
		background: #000000;
		border-radius: 50%;
		content: "";
		height: 15px;
		width: 120px;
		opacity: 0.2;
		position: absolute;
		left: 5px;
		bottom: -60px;
		transform: scale(1);
	}
	.rainy:before {
		animation: rainy_rain 0.7s infinite linear;
		content: "";
		background: #cccccc;
		border-radius: 50%;
		display: block;
		height: 6px;
		width: 3px;
		opacity: 0.3;
		transform: scale(0.9);
	}

	@keyframes rainy {
		50% {
			transform: translateY(-20px);
		}
	}

	@keyframes rainy_shadow {
		50% {
			transform: translateY(20px) scale(0.7);
			opacity: 0.05;
		}
	}

	@keyframes rainy_rain {
		0% {
			box-shadow: rgba(0, 0, 0, 0) 30px 30px, rgba(0, 0, 0, 0) 40px 40px,
				#000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
				#000 110px 45px, #000 90px 35px;
		}
		25% {
			box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
				rgba(0, 0, 0, 0) 70px 120px, rgba(0, 0, 0, 0) 80px 120px, #000 110px 70px,
				#000 90px 60px;
		}
		26% {
			box-shadow: #000 30px 45px, #000 40px 60px, #000 50px 90px, #000 55px 65px,
				rgba(0, 0, 0, 0) 70px 40px, rgba(0, 0, 0, 0) 80px 20px, #000 110px 70px,
				#000 90px 60px;
		}
		50% {
			box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 100px,
				#000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
				#000 90px 85px;
		}
		51% {
			box-shadow: #000 30px 70px, #000 40px 80px, rgba(0, 0, 0, 0) 50px 45px,
				#000 55px 80px, #000 70px 60px, #000 80px 45px, #000 110px 95px,
				#000 90px 85px;
		}
		75% {
			box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
				rgba(0, 0, 0, 0) 55px 95px, #000 70px 80px, #000 80px 70px,
				rgba(0, 0, 0, 0) 110px 120px, rgba(0, 0, 0, 0) 90px 110px;
		}
		76% {
			box-shadow: #000 30px 95px, #000 40px 100px, #000 50px 60px,
				rgba(0, 0, 0, 0) 55px 35px, #000 70px 80px, #000 80px 70px,
				rgba(0, 0, 0, 0) 110px 25px, rgba(0, 0, 0, 0) 90px 15px;
		}
		100% {
			box-shadow: rgba(0, 0, 0, 0) 30px 120px, rgba(0, 0, 0, 0) 40px 120px,
				#000 50px 75px, #000 55px 50px, #000 70px 100px, #000 80px 95px,
				#000 110px 45px, #000 90px 35px;
		}
	}

	/* RAINBOW */
	.rainbow {
		animation: rainbow 5s ease-in-out infinite;
		border-radius: 170px 0 0 0;
		box-shadow: #fb323c -2px -2px 0 1px, #f99716 -4px -4px 0 3px,
			#fee124 -6px -6px 0 5px, #afdf2e -8px -8px 0 7px, #6ad7f8 -10px -10px 0 9px,
			#60b1f5 -12px -12px 0 11px, #a3459b -14px -14px 0 13px;
		height: 70px;
		width: 70px;
		margin-left: -40px;
		position: absolute;
		left: 610px;
		top: 71px;
		transform: rotate(40deg);
	}
	.rainbow:after {
		animation: rainbow_shadow 5s ease-in-out infinite;
		background: #000000;
		border-radius: 50%;
		content: "";
		opacity: 0.2;
		height: 15px;
		width: 120px;
		position: absolute;
		bottom: -23px;
		left: 17px;
		transform: rotate(-40deg);
		transform-origin: 50% 50%;
	}
	@keyframes rainbow {
		50% {
			-webkit-transform: rotate(50deg);
			transform: rotate(50deg);
		}
	}
	@keyframes rainbow_shadow {
		50% {
			transform: rotate(-50deg) translate(10px) scale(0.7);
			opacity: 0.05;
		}
	}

	/* STARRY */
	.starry {
		animation: starry_star 5s ease-in-out infinite;
		background: #ffeb3b;
		border-radius: 50%;
		box-shadow: #ffeb3b 26px 7px 0 -1px,
			rgba(255, 255, 255, 0.1) -36px -19px 0 -1px,
			rgba(255, 255, 255, 0.1) -51px -34px 0 -1px, #ffeb3b -52px -62px 0 -1px,
			#ffeb3b 14px -37px, rgba(255, 255, 255, 0.1) 41px -19px, #ffeb3b 34px -50px,
			rgba(255, 255, 255, 0.1) 14px -71px 0 -1px, #ffeb3b 64px -21px 0 -1px,
			rgba(255, 255, 255, 0.1) 32px -85px 0 -1px, #ffeb3b 64px -90px,
			rgba(255, 255, 255, 0.1) 60px -67px 0 -1px, #ffeb3b 34px -127px,
			rgba(255, 255, 255, 0.1) -26px -103px 0 -1px;
		height: 4px;
		width: 4px;
		opacity: 1;
		position: absolute;
		left: 72px;
		top: 127px;
	}
	.starry:after {
		animation: starry 5s ease-in-out infinite;
		border-radius: 50%;
		box-shadow: #ffeb3b -25px 0;
		content: "";
		height: 100px;
		width: 100px;
		position: absolute;
		top: -106px;
		transform: rotate(-5deg);
		transform-origin: 0 50%;
	}

	@keyframes starry {
		50% {
			transform: rotate(10deg);
		}
	}

	@keyframes starry_star {
		50% {
			box-shadow: rgba(255, 255, 255, 0.1) 26px 7px 0 -1px,
				#ffeb3b -36px -19px 0 -1px, #ffeb3b -51px -34px 0 -1px,
				rgba(255, 255, 255, 0.1) -52px -62px 0 -1px,
				rgba(255, 255, 255, 0.1) 14px -37px, #ffeb3b 41px -19px,
				rgba(255, 255, 255, 0.1) 34px -50px, #ffeb3b 14px -71px 0 -1px,
				rgba(255, 255, 255, 0.1) 64px -21px 0 -1px, #ffeb3b 32px -85px 0 -1px,
				rgba(255, 255, 255, 0.1) 64px -90px, #ffeb3b 60px -67px 0 -1px,
				rgba(255, 255, 255, 0.1) 34px -127px, #ffeb3b -26px -103px 0 -1px;
		}
	}

	/* STORMY */
	.stormy {
		animation: stormy 5s ease-in-out infinite;
		background: #222222;
		border-radius: 50%;
		box-shadow: #222222 65px -15px 0 -5px, #222222 25px -25px, #222222 30px 10px,
			#222222 60px 15px 0 -10px, #222222 85px 5px 0 -5px;
		height: 50px;
		width: 50px;
		margin-left: -70px;
		position: absolute;
		left: 947px;
		top: 70px;
	}
	.stormy:after {
		animation: stormy_shadow 5s ease-in-out infinite;
		background: #000;
		border-radius: 50%;
		content: "";
		height: 15px;
		width: 120px;
		opacity: 0.2;
		position: absolute;
		left: 5px;
		bottom: -60px;
		transform: scale(1);
	}
	.stormy:before {
		animation: stormy_thunder 2s steps(1, end) infinite;
		border-left: 0px solid transparent;
		border-right: 7px solid transparent;
		border-top: 43px solid yellow;
		box-shadow: yellow -7px -32px;
		content: "";
		display: block;
		height: 0;
		width: 0;
		position: absolute;
		left: 57px;
		top: 70px;
		transform: rotate(14deg);
		transform-origin: 50% -60px;
	}

	@keyframes stormy {
		50% {
			transform: translateY(-20px);
		}
	}
	@keyframes stormy_shadow {
		50% {
			transform: translateY(20px) scale(0.7);
			opacity: 0.05;
		}
	}

	@keyframes stormy_thunder {
		0% {
			transform: rotate(20deg);
			opacity: 1;
		}
		5% {
			transform: rotate(-34deg);
			opacity: 1;
		}
		10% {
			transform: rotate(0deg);
			opacity: 1;
		}
		15% {
			transform: rotate(-34deg);
			opacity: 0;
		}
	}

	/* SNOWY */
	.snowy {
		animation: snowy 5s ease-in-out infinite 1s;
		background: #ffffff;
		border-radius: 50%;
		box-shadow: #ffffff 65px -15px 0 -5px, #ffffff 25px -25px, #ffffff 30px 10px,
			#ffffff 60px 15px 0 -10px, #ffffff 85px 5px 0 -5px;
		display: block;
		height: 50px;
		width: 50px;
		position: absolute;
		top: 28px;
		left: 18px;
	}
	.snowy:after {
		animation: snowy_shadow 5s ease-in-out infinite 1s;
		background: #000000;
		border-radius: 50%;
		content: "";
		height: 15px;
		width: 120px;
		opacity: 0.2;
		position: absolute;
		left: 8px;
		bottom: -60px;
		transform: scale(1);
	}
	.snowy:before {
		animation: snowy_snow 2s infinite linear;
		content: "";
		border-radius: 50%;
		display: block;
		height: 7px;
		width: 7px;
		opacity: 0.8;
		transform: scale(0.9);
	}

	@keyframes snowy {
		50% {
			-webkit-transform: translateY(-20px);
			transform: translateY(-20px);
		}
	}

	@keyframes snowy_shadow {
		50% {
			transform: translateY(20px) scale(0.7);
			opacity: 0.05;
		}
	}

	@keyframes snowy_snow {
		0% {
			box-shadow: rgba(238, 238, 238, 0) 30px 30px,
				rgba(238, 238, 238, 0) 40px 40px, #eeeeee 50px 75px, #eeeeee 55px 50px,
				#eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
				#eeeeee 90px 35px;
		}
		25% {
			box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
				#eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 120px,
				rgba(238, 238, 238, 0) 80px 120px, #eeeeee 110px 70px, #eeeeee 90px 60px;
		}
		26% {
			box-shadow: #eeeeee 30px 45px, #eeeeee 40px 60px, #eeeeee 50px 90px,
				#eeeeee 55px 65px, rgba(238, 238, 238, 0) 70px 40px,
				rgba(238, 238, 238, 0) 80px 20px, #eeeeee 110px 70px, #eeeeee 90px 60px;
		}
		50% {
			box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
				rgba(238, 238, 238, 0) 50px 100px, #eeeeee 55px 80px, #eeeeee 70px 60px,
				#eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
		}
		51% {
			box-shadow: #eeeeee 30px 70px, #eeeeee 40px 80px,
				rgba(238, 238, 238, 0) 50px 45px, #eeeeee 55px 80px, #eeeeee 70px 60px,
				#eeeeee 80px 45px, #eeeeee 110px 95px, #eeeeee 90px 85px;
		}
		75% {
			box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
				rgba(238, 238, 238, 0) 55px 95px, #eeeeee 70px 80px, #eeeeee 80px 70px,
				rgba(238, 238, 238, 0) 110px 120px, rgba(238, 238, 238, 0) 90px 110px;
		}
		76% {
			box-shadow: #eeeeee 30px 95px, #eeeeee 40px 100px, #eeeeee 50px 60px,
				rgba(238, 238, 238, 0) 55px 35px, #eeeeee 70px 80px, #eeeeee 80px 70px,
				rgba(238, 238, 238, 0) 110px 25px, rgba(238, 238, 238, 0) 90px 15px;
		}
		100% {
			box-shadow: rgba(238, 238, 238, 0) 30px 120px,
				rgba(238, 238, 238, 0) 40px 120px, #eeeeee 50px 75px, #eeeeee 55px 50px,
				#eeeeee 70px 100px, #eeeeee 80px 95px, #eeeeee 110px 45px,
				#eeeeee 90px 35px;
		}
	}

	.wind-icon {
		position: absolute;
		z-index: 1;
		top: 50%;
		left: 50%;
		width: 1.1875em;
		height: 1.1875em;
		margin: -1.84375em;
		background: #fff;
		border-radius: 50%;
		animation: wind_main 2s linear infinite;
	}

	.wind-icon:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: -3.9em;
		display: block;
		width: 4.5625em;
		height: 0.3em;
		background: #fff;
	}

	.wind-icon:nth-child(2) {
		position: absolute;
		z-index: 1;
		top: 68%;
		left: 44%;
		width: 0.9em;
		height: 0.9em;
		margin: -1.84375em;
		background: #fff;
		border-radius: 50%;
		animation: wind_main 2s linear infinite;
	}

	.wind-icon:nth-child(2):after {
		content: "";
		position: absolute;
		bottom: 10px;
		left: -3.16em;
		display: block;
		width: 3.5625em;
		height: 0.27em;
		background: #fff;
	}

	.wind-icon:nth-child(3) {
		position: absolute;
		z-index: 1;
		top: 68%;
		left: 42%;
		width: 0.9em;
		height: 0.9em;
		margin: -1.84375em;
		background: #fff;
		border-radius: 50%;
		opacity: 0;
		animation: wind 3s 0.25s linear infinite;
	}

	.wind-icon:nth-child(3):after {
		content: "";
		position: absolute;
		bottom: 0;
		left: -2.95em;
		display: block;
		width: 3.3625em;
		height: 0.2em;
		background: #fff;
	}

	.wind-icon:nth-child(4) {
		position: absolute;
		z-index: 1;
		top: 80%;
		left: 33%;
		width: 0.7em;
		height: 0.7em;
		margin: -1.84375em;
		background: #fff;
		border-radius: 50%;
		opacity: 0;
		animation: wind 3s 0.25s linear infinite;
	}

	.wind-icon:nth-child(4):after {
		content: "";
		position: absolute;
		bottom: 8px;
		left: -1.85em;
		display: block;
		width: 2.1515em;
		height: 0.2em;
		background: #fff;
	}

	@keyframes wind_main {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translate(6em);
		}
	}

	@keyframes wind {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.3;
		}
		100% {
			opacity: 0;
			transform: translate(6em);
		}
	}

	.fog {
		width: 80px;
		height: 20px;
		background: transparent;
		position: absolute;
		margin: auto;
		border-radius: 50%;
		bottom: 20px;
		animation: fog-a 10s linear infinite;
	}

	.fog1 {
		width: 80px;
		height: 20px;
		background: transparent;
		position: absolute;
		margin: auto;
		border-radius: 50%;
		bottom: 10px;
		animation: fog-a 10s linear infinite;
	}

	.f1 {
		left: 0;
		right: 80px;
		border-bottom: 4px solid #fff;
	}

	.f2 {
		right: 0;
		left: 80px;
		border-top: 4px solid #fff;
	}

	.fog2 {
		width: 80px;
		height: 20px;
		background: transparent;
		position: absolute;
		margin: auto;
		border-radius: 50%;
		bottom: 15px;
		animation: fog-a 10s linear infinite;
	}

	.fog3 {
		width: 80px;
		height: 20px;
		background: transparent;
		position: absolute;
		margin: auto;
		border-radius: 50%;
		bottom: 25px;
		animation: fog-a 10s linear infinite;
	}

	@keyframes fog-a {
		0% {
			opacity: 0.2;
			transform: rotateX(0deg) translateX(0);
		}

		35% {
			opacity: 0.5;
			transform: rotateX(30deg) translateX(-20px);
		}

		70% {
			opacity: 0.8;
			transform: rotateX(60deg) translateX(20px);
		}

		100% {
			opacity: 0.2;
			transform: rotateX(0deg) translateX(0);
		}
}
</style>

{#if typeIcon === 'partly-cloudy-day'}
	<div class="cloudy"></div>
	<div class="sunny"></div>

{:else if typeIcon === 'cloudy'}
	<div class="cloudy"></div>

{:else if typeIcon === 'clear-day'}
	<div class="sunny"></div>

{:else if typeIcon === 'clear-night'}
	<div class="starry"></div>

{:else if typeIcon === 'rain'}
	<div class="rainy"></div>

{:else if typeIcon === 'snow'}
	<div class="snowy"></div>

{:else if typeIcon === 'sleet'}
	<div class="snowy"></div>
	<div class="rainy"></div>

{:else if typeIcon === 'wind'}
	<div class="windy">
		<div class="wind-icon"></div>
		<div class="wind-icon"></div>
		<div class="wind-icon"></div>
		<div class="wind-icon"></div>
	</div>
{:else if typeIcon === 'fog'}
	<div class="cloudy"></div>
	<div class="fog f1"></div>
	<div class="fog f2"></div>
	<div class="fog1 f1"></div>
	<div class="fog1 f2"></div>
	<div class="fog2 f1"></div>
	<div class="fog2 f2"></div>
	<div class="fog3 f1"></div>
	<div class="fog3 f2"></div>

{:else if typeIcon === 'partly-cloudy-night'}
	<div class="cloudy"></div>
	<div class="starry"></div>

{/if}