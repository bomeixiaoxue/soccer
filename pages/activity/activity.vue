<template>
	<view>
		<view class="cu-card dynamic" :class="'no-card'" v-for="(item, index) in activityData" :key="index">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="'background-image:url('+ item.userEntity.headPortrait +')'" ></view>
						<view class="content flex-sub">
							<view>{{item.userEntity.nickName}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{ item.activityEntity.startTime }}
							</view>
						</view>
					</view>
				</view>
				<view class="text-content" @click="onDetail(index)">
					{{item.activityEntity.activityContent}}
				</view>
				<view class="grid flex-sub padding-lr" :class="'col-3 grid-square'">
					<view class="bg-img" @tap="ViewImage(item.activityEntity.coverPhoto)" :style="'background-image:url('+ item.activityEntity.coverPhoto +')'" ></view>
				</view>
				<view class="text-gray text-sm text-right padding">
					<text class="icon-attentionfill margin-lr-xs"></text> {{item.activityEntity.browseCount}} 
					<text class="icon-appreciatefill margin-lr-xs" @click="onLike(index)"></text> {{item.activityEntity.dianZanCount}} 
					<text class="icon-messagefill margin-lr-xs"></text> {{item.activityEntity.commentCount}} 
				</view>
			</view>
		</view>
		<view class="">{{activityData.activityVos}}</view>
	</view>
</template>

<script>
	import "../../colorui/main.css"
	import "../../colorui/icon.css"
	
	import {
		getDate,
		getUserInfo,
		getToken,
		setUserInfo
	} from '@/common/util.js';
	
	export default {
		components: {
			getDate,
			getUserInfo,
			getToken,
			setUserInfo
		},
		data() {
			return {
				browse: 10,
				like: 20,
				comment: 30,
				activityData: [],
				test: ''
			};
		},
		onLoad: function() {
			this.getDate();
		},
		onPullDownRefresh() {
			console.log('用户刷新')
			this.getDate()
			setTimeout(function () {
				uni.stopPullDownRefresh();  //停止下拉刷新动画
			}, 1000);
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
			onLike(index) {
				this.activityData[index].activityEntity.dianZanCount++
			},
			onDetail(index) {
				uni.navigateTo({
					url: '/pages/activity/activitydetail/activitydetail?query='+encodeURIComponent(JSON.stringify(this.activityData[index]))
				})
			},
			ViewImage(url) {
				uni.previewImage({
					urls: [url],
					current: url
				});
			},
			getDate(e) {
				uni.request({
					url: this.ActivityUrl + '/activity/getList',
					header: {
						"Authorization" : "Bearer " + getToken()
					},
					success: (result) => {
						if (result.statusCode == 200) {
							this.activityData = result.data.data.activityVos;
							console.log('成功：' + JSON.stringify(this.activityData))
						}
					}
				});
			}
		}
	}
</script>

<style>
	.cu-card {
		margin-top: 30upx;
	}
</style>
