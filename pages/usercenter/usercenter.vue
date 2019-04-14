<template>
	<view class="center">
		<view class="logo" @click="goLogin" :hover-class="!login ? 'logo-hover' : ''" style="background-color: rgb(0, 122, 255); color: rgb(255, 255, 255);">
			<image class="logo-img" :src="login ? uerInfo.headPortrait :avatarUrl"></image>
			<view class="logo-title" @click="goLogin()">
				<text class="uer-name">{{login ? uerInfo.nickName: 'Hi，您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!login">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<navigator url="/pages/usercenter/account/account" hover-class="navigator-hover">
                <view class="center-list-item border-bottom">
                   	<text class="list-icon">&#xe60f;</text>
                   	<text class="list-text">账号管理</text>
                   	<text class="navigat-arrow">&#xe65e;</text>
                </view>
            </navigator>
			<navigator url="/pages/usercenter/userinfo/userinfo" hover-class="navigator-hover">
			<view class="center-list-item">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text">个人资料</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			 </navigator>
		</view>
		<view class="center-list">
			<navigator url="/pages/usercenter/help/help" hover-class="navigator-hover">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">帮助与反馈</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			 </navigator>
			<navigator url="/pages/usercenter/service/service" hover-class="navigator-hover">
			<view class="center-list-item">
				<text class="list-icon">&#xe65f;</text>
				<text class="list-text">服务条款及隐私</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			 </navigator>
		</view>
		<view class="center-list">
			<navigator url="/pages/usercenter/about/about" hover-class="navigator-hover">
			<view class="center-list-item">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">关于应用</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			 </navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				uerInfo: {}
			}
		},
		onLoad() {
			var loginbz = false;
			uni.getStorage({
				key: "loginbz",
				success(res) {
					console.log('登录标志：' + JSON.stringify(res.data))
					loginbz = res.data;
				}
			})
			this.login = loginbz;
			if (loginbz) {
				// 已经登录
				var user = {};
				uni.getStorage({
					key: "user",
					success(res) {
						console.log('用户信息：' + JSON.stringify(res.data))
						user = res.data;
					}
				})
				console.log('已经登录成功：'+ JSON.stringify(user))
				this.uerInfo = user
			}else {
				console.log('用户未登录')
			}
		},
		methods: {
			goLogin() {
				if (!this.login) {
					uni.navigateTo({
						url: '/pages/user/login/login'
					})
				}
			}
		}
	}
</script>

<style>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #f8f8f8;
	}

	.center {
		flex-direction: column;
	}

	.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #2F85FC;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}

	.uer-name {
		height: 60upx;
		line-height: 60upx;
		font-size: 38upx;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}

	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #2F85FC;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}

	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		flex: 1;
		text-align: left;
	}

	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 34upx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
</style>
