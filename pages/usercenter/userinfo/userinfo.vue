<template>
	<view>
		<form>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					头像
				</view>
				<view class="action" @tap="ChooseImage">
					<text class='icon-cameraadd'></text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="padding-xs bg-img" :style="'background-image:url(' + userinfo.headPortrait +')'"  v-if="userinfo.headPortrait != ''"
					  @tap="ViewImage" :data-url="userinfo.headPortrait">
					</view>
					<view class="padding-xs solids" v-if="userinfo.headPortrait == '' ">
						<text class='icon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">昵称</view>
				<input name="input" v-model="userinfo.nickName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<switch class='switch-sex' @change="Sex" :class="userinfo.sex?'checked':''" :checked="userinfo.sex?true:false"></switch>
			</view>
			<view class="cu-form-group">
				<view class="title">生日</view>
				<picker mode="date" :value="userinfo.birthday" @change="DateChange">
					<view class="picker">
						{{userinfo.birthday}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">职业</view>
				<input name="input" v-model="userinfo.work"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input name="input" v-model="userinfo.telephone" :disabled="true"></input>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">个性签名</view>
				<textarea maxlength="-1" v-model="userinfo.signature"></textarea>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue margin-tb-sm lg" @click="save">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	import "../../../colorui/main.css"
	import "../../../colorui/icon.css"
	
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
				index: -1,
				date: '',
				userinfo: {
					headPortrait: '',
					sex: false,
					nickName: '',
					work: '',
					telephone: '',
					signature: '',
					birthday: ''
				}
			};
		},
		onLoad() {
			console.log('获取用户信息：'+getUserInfo())
			var user = getUserInfo()
			if (user.birthday != null && user.birthday != '') {
				user.birthday = getDate(user.birthday)
			}
			this.userinfo = user
		},
		methods: {
			DateChange(e) {
				this.userinfo.birthday = e.detail.value
			},
			Sex(e) {
				this.userinfo.sex = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						this.userinfo.headPortrait = res.tempFilePaths
						console.log('头像地址：'+this.userinfo.headPortrait)
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: [this.userinfo.headPortrait],
					current: e.currentTarget.dataset.url
				});
			},
			textareaBInput(e) {
				this.userinfo.textareaBValue = e.detail.value
			},
			save(){
				console.log('修改信息：' + JSON.stringify(this.userinfo))
				var user = {};
				uni.request({
					url: this.userUrl + '/user/update',
					method: 'POST',
					data: this.userinfo,
					dataType: 'json',
					header: {
						"Authorization" : "Bearer " + getToken()
					},
					success(res) {
						console.log('成功：' + JSON.stringify(res.data))
						if(res.data.code == "000") {
							uni.setStorage({
								key: "user",
								data: res.data.data.data
							})
							uni.showToast({
								title: "保存成功"
							})
						}else {
							console.log('失败：' + JSON.stringify(res.data))
							uni.showToast({
								title: "保存失败"
							})
						}
					},
					fail(res) {
						console.log('失败：' + JSON.stringify(res.data))
						uni.showToast({
							title: "保存失败"
						})
					}
				})
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
