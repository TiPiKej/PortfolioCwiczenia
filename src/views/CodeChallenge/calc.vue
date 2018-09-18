<template>
	<div class="calc">
		<input class="number_box" type="tel" v-model="content">

		<div class="buttons_wrapper">
			<button v-on:click="click" class="calc_button calc_cancel">C</button>
			<button v-on:click="click" class="calc_button calc_divide">/</button>
			<button v-on:click="click" class="calc_button calc_seven">7</button>
			<button v-on:click="click" class="calc_button calc_eight">8</button>
			<button v-on:click="click" class="calc_button calc_nine">9</button>
			<button v-on:click="click" class="calc_button calc_x">x</button>
			<button v-on:click="click" class="calc_button calc_four">4</button>
			<button v-on:click="click" class="calc_button calc_five">5</button>
			<button v-on:click="click" class="calc_button calc_six">6</button>
			<button v-on:click="click" class="calc_button calc_minus">-</button>
			<button v-on:click="click" class="calc_button calc_one">1</button>
			<button v-on:click="click" class="calc_button calc_two">2</button>
			<button v-on:click="click" class="calc_button calc_three">3</button>
			<button v-on:click="click" class="calc_button calc_plus">+</button>
			<button v-on:click="click" class="calc_button calc_zero">0</button>
			<button v-on:click="click" class="calc_button calc_equal">=</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "Calc",
	data: () => ({
		content: '0',
		przyciski: [
			document.getElementsByClassName('calc_cancel'),
			document.getElementsByClassName('calc_divide'),
			document.getElementsByClassName('calc_seven'),
			document.getElementsByClassName('calc_eight'),
			document.getElementsByClassName('calc_nine'),
			document.getElementsByClassName('calc_x'),
			document.getElementsByClassName('calc_four'),
			document.getElementsByClassName('calc_five'),
			document.getElementsByClassName('calc_six'),
			document.getElementsByClassName('calc_minus'),
			document.getElementsByClassName('calc_one'),
			document.getElementsByClassName('calc_two'),
			document.getElementsByClassName('calc_three'),
			document.getElementsByClassName('calc_plus'),
			document.getElementsByClassName('calc_zero'),
			document.getElementsByClassName('calc_equal')
		]
	}),
	methods: {
		reset(){
			this.content = '0'
		},
		addition(count){
			if(this.content === '0')
				this.content = String(count);
			else 
				this.content += String(count);
		},
		exec(){
			this.content = parseInt(
				eval(
					this.content.replace('x', '*')
					)*100
				)/100;
		},
		click(el){
			switch(el.target.innerHTML){
				case 'C':
					this.reset();
					break;
				case '=':
					this.exec();
					break;
				case ('/', 'x', '-', '+'):
					this.content += el.target.innerHTML;
					break;
				default:
					this.addition(el.target.innerHTML);
					break;
			}
		}
	}
}

</script>

<style lang="css" scoped="">
.calc{
	width: 220px;
	border: 2px solid #000;
	transition: .3s all;
	margin: auto;
}

.buttons_wrapper > *{
	padding: 3px 0;
	color: #fff;
}

.number_box{
	width: 100%;
	padding: 10px;
	border: none;
	border-bottom: 1px solid #000;
	text-align: right;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.buttons_wrapper{
	background: #fff;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 15px;
	padding: 15px;
}

.calc_button{
	background: #aaa;
	border: 1px solid #000;
	border-radius: 6px;
	grid-column: span 1;
	transition: .3s all;
}

.calc button:hover{
	background: #3b3b3b;
	cursor: pointer;
}

.calc_button:nth-of-child(0){
	background: #000;
}

.calc_cancel,
.calc_zero{
	grid-column: span 3;
}

.calc_cancel{
	background: #3572DB;
}

.calc_equal{
	background: #28D060;
}

.calc_cancel:hover{
	background: #3E5D93!important;
}

.calc_equal:hover{
	background: #3FA762!important;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>