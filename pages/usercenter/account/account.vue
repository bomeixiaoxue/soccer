<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">账号</view>
				<input name="input" :disabled="true" v-model="passwordData.username"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">原密码</view>
				<input name="input" v-model="passwordData.password" placeholder="请输入原密码"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">新密码</view>
				<input name="input" v-model="passwordData.newPassword" placeholder="请输入新密码"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input name="input" v-model="passwordData.affirmPassword" placeholder="请输入确认密码"></input>
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
				passwordData: {
					username: '',
					password: '',
					newPassword: '',
					affirmPassword: ''
				}
			};
		},
		onLoad() {
			var user = getUserInfo()
			this.passwordData.username = user.username
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
