<script>
	var websocket;
	export default {
		onLaunch: function () {
			console.log('App Launch');
			 uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif

					// #ifdef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif
				}
			});
// 			websocket = new WebSocket("ws://localhost:8887"),
// 			websocket.onopen = function () {
// 				console.log('连接已建立，正在等待数据...');
// 				if ( websocket && 1 == websocket.readyState ) {
// 					websocket.send("测试成功");
// 					console.log("发送成功");
// 				} else{
// 					console.log("还没成功");
// 				}
// 			},
// 			websocket.onmessage = function (a) {
// 				console.log("测试");
// 				console.log(a.data);
// 				console.log(a);
// 			},
// 			websocket.onclose = function () {
// 				console.log('关闭连接');
// 			};
			
			
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* colorui组件 */
	/* @import "./colorui/main.css"; */
	/* 全局样式 */
	@import url("./common/uni/uni.css");
</style>
