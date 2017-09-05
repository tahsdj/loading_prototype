
const travelList = [
		{
			title: '成大',
			duration: '6:00~17:00',
			timeLong: '1 hour',
			imgUrl: 'img/ncku.png',
			class: 'short'
		},
		{
			title: '十鼓糖廠',
			duration: '10:00~21:00',
			timeLong: '2.5 hours',
			imgUrl: 'img/sugar.png',
			class: 'long'
		},
		{
			title: '手作課程',
			duration: '10:00~12:00',
			timeLong: '2 hours',
			imgUrl: 'img/experience.png',
			class: 'short'
		},
		{
			title: '虎山森林步道',
			duration: '15:30~17:30',
			timeLong: '1.5 hours',
			imgUrl: 'img/tigerMountain.png',
			class: 'short'
		},
		{
			title: '奇美博物館',
			duration: '9:00~17:00',
			timeLong: '2 hours',
			imgUrl: 'img/musium.png',
			class: 'long'
		}
	]


var app = new Vue({
	el: '#app',
	data: {
		travelPlan: travelList,
		btnColor: {
			backgroundColor: 'white',
			boxShadow: '2px 2px #d0cdcd'
		},
		btnContent: 'GO'
	},
	methods: {
		btnClicked(){
			this.btnColor = {
				backgroundColor: 'rgba(104,179,45,0.54)',
				color: 'white',
			}
			this.btnContent = 'booked'
		}
	}
})


const body = document.querySelector(`#frame`)
body.addEventListener('click',function(){
	app.btnColor = {
		backgroundColor: 'white',
		boxShadow: '2px 2px #d0cdcd',
		color: '#b18d55'
	}
	app.btnContent = "GO"
})