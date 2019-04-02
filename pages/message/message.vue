<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<view class="cu-list menu-avatar">
				<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index"
				 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" @click="InterChat" :data-target="'move-box-' + index">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]">
						<view class="cu-tag badge">99+</view>
					</view>
					<view class="content">
						<view class="text-pink"><text class="text-cut">莫甘娜</text></view>
						<view class="text-gray text-sm flex"> <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm">{{index+1}}</view>
					</view>
					<view class="move">
						<view class="bg-grey">置顶</view>
						<view class="bg-red">删除</view>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import "../../colorui/main.css"
	import "../../colorui/icon.css"
	
	export default {
		data() {
			return {
				iconList: [{
					icon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					icon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					icon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					icon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					icon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					icon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					icon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					icon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					icon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					icon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			SwitchSex(e) {
				this.skin = e.detail.value
			},

			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				// e.touches[0].pageX - this.listTouchStart的数值越大滑动速度越快
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > -150 ? 'right' : 'left'
			},
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			// 进入聊天窗口
			InterChat(e) {
				uni.navigateTo({
					url: "../onechat/onechat"
				})
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: "../plugin/indexes"
			})
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>