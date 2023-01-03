var vm = new Vue ({
	el: "#portfolio",
	data: {
		body: document.getElementsByTagName('body')[0],
		ifLightboxOpen: false,
		ifClosing: false,
		dataset: [
			{
				titleZh: '作品截選',
				titleEn: 'Portfolio',
				info: '作品工作範圍皆包含UI切版部分，技術上皆使用SCSS處理，除手機專用作品外都使用RWD設計<br>部分作品為期間限定活動，故無法提供線上連結，若有興趣歡迎聯絡詳談',
				works: [
					{
						"name" : "特力屋油漆調色服務",
						"previewPicture" : "img/tr1.png",
						"previewPicture2" : "img/tr2.png",
						"url" : 'https://www.trplus.com.tw/_ui/pages/paint_service/service_paint.html',
						"techs" : [
							'色彩預覽功能使用jQuery處理使用者互動，搭配PixiJS渲染canvas畫面',
							'購物車部分以library方式引入vue.js處理資料，並使用Axios串接廠商提供的api',
						],
						"info" : "油漆配色模擬服務，提供多種場景供挑選參考，並可直接計算預估用量及下單"
					},
					{
						"name" : "統一 Open Point 贈點活動系列",
						"previewPicture" : "img/fur.jpg",
						"previewPicture2" : "img/nud.jpg",
						"url" : null,
						"techs" : [
							'主要使用PixiJS渲染canvas遊戲畫面，部分資料內容以HTML結構處理',
							'使用jQuery進行事件監聽與流程控制，jQuery ajax串接api，取得用戶遊戲進度，並在流程關鍵時機點回傳用戶動作'
						],
						"info" : "手機專用小遊戲活動，完成每日任務進行抽獎，用Webveiw方式崁入於客戶的app內"
					},
					{
						"name" : "Jupiter 先機投資官網",
						"previewPicture" : "img/q1.png",
						"previewPicture2" : "img/q11.png",
						"url" : "https://www.cgsice.com/jupiter/",
						"techs" : [
							'使用D3.js實作基金淨值走勢圖表',
							'與後端原生PHP合作，設計易於串接的HTML結構交付',
						],
						"info" : "公司及基金資訊展示、基金淨值查詢"
					},
					{
						"name" : "宜蘊醫療官網",
						"previewPicture" : "img/nuwa.jpg",
						"previewPicture2" : "img/nuwa2.jpg",
						"techs" : [
							'以Vue Cli(Vue 2.0 + Vue Router + Vuex)作為專案基底',
							'使用Axios與後端api溝通，並以local storage實作登入功能',
						],
						"url" : "https://www.nuwacare.com/zh-TW",
						"info" : "醫療資訊展示及診所線上掛號系統"
					},
					{
						"name" : "日商麒麟技術官網",
						"previewPicture" : "img/kirin.jpg",
						"previewPicture2" : "img/kirin2.jpg",
						"url" : "https://kirineng.com.tw/",
						"techs" : [
							'以Vue Cli(Vue 2.0 + Vue Router + Vuex)作為專案基底',
							'使用Axios與後端api溝通',
						],
						"info" : "公司資訊展示、聯絡及徵才窗口",
					},
					{
						"name" : "ROG CROSSWORD CHALLENGE",
						"previewPicture" : "img/b51.png",
						"previewPicture2" : "img/b52.png",
						"url" : null,
						"techs" : [
							'純HTML專案，以jQuery監聽事件並即時更新使用者作答位置、答案、比對正解及刷新DOM',
						],
						"info" : "期間限定小遊戲功能，插入在客戶產品頁面中"
					},
					{
						"name" : "ASUS 產品頁面系列 (以Prime Z690一案介紹)",
						"previewPicture" : "img/prime.jpg",
						"previewPicture2" : "img/prime2.jpg",
						"url" : "https://www.asus.com/Motherboards-Components/Motherboards/PRIME/PRIME-Z690-P-WIFI-CSM/",
						"techs" : [
							'使用ScrollMagic + TweenMax製作滾動動畫效果',
						],
						"info" : "產品規格展示"
					},
					{
						"name" : "104 人才招募頁系列",
						"previewPicture" : "img/fm.jpg",
						"url" : "https://kad.events.104.com.tw/familymart_20220208/",
						"techs" : [
							'jQuery',
							'PixiJS'
						],
					},
					// {
					// 	"name" : "木棉花國際官網",
					// 	"previewPicture" : "img/muse.jpg",
					// 	"url" : "https://www.e-muse.com.tw/zh",
					// 	"techs" : [
					// 		'jQuery',
					// 		'PixiJS'
					// 	],
					// 	"info" : "公司資訊及代理作品展示",
					// },
					// {
					// 	"name" : "ZADAK at Computex 2019",
					// 	"previewPicture" : "img/b2.png",
					// 	"url" : null,
					// 	"techs" : [
					// 		'jQuery',
					// 		'PixiJS'
					// 	],
					// },
				],
			},
		]
	},
	methods: {
		openLightbox(num) {
			this.ifLightboxOpen = true;
			this.nowShow = this.works[num];
			this.body.classList.add('overflow');
		},
		closeLightbox() {
			this.body.classList.remove('overflow');
			this.ifClosing = true;
			setTimeout(() => {
				this.ifClosing = false;
				this.ifLightboxOpen = false;
			}, 300);
		},
	},
});