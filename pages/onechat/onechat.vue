<template>
	<view>
		<view class="cu-chat" style="margin-bottom: 170upx;">
			
			<view v-for="item in chatData" :style="[{bottom:InputBottom+100+'px'}]">
				<!-- 本人消息 -->
				<view class="" v-if="item.p == 1">
					<view class="cu-item self">
						<view class="main">
							<view class="action">
								<text class="icon-locationfill text-orange text-xxl"></text>
							</view>
							<view class="content shadow">
								{{item.content}}
							</view>
						</view>
						<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
						<view class="date">13:23</view>
					</view>
				</view>
				
				<!-- 好友消息 -->
				<view class="" v-if="item.p == 0">
					<view class="cu-item">
						<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
						<view class="main">
							<view class="content shadow">
								{{item.content}}
							</view>
						</view>
						<view class="date">13:23</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="icon-sound text-grey"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur" v-model="inputData"></input>
			<view class="action">
				<text class="icon-emojifill text-grey"></text>
			</view>
			<button class="cu-btn bg-green shadow" @click="sendMessage">发送</button>
		</view>

	</view>
</template>

<script>
	import "../../colorui/main.css"
	import "../../colorui/icon.css"
	
	export default {
		data() {
			return {
				InputBottom: 0,
				inputData: '',
				mesData: [
				],
				chatData: [
					{"p":1,"content":"在吗？"},
					{"p":0,"content":"在，怎么了？"},
					{"p":1,"content":"吃饭没"},
					{"p":0,"content":"没吃"}
				]
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:"娜娜"
			})
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			sendMessage(e) {
				if (this.inputData != '') {
					var dataItem = {};
					dataItem["p"] = 1
					dataItem["content"] = this.inputData
					this.chatData[this.chatData.length] = {"p":1,"content":this.inputData}
					this.inputData = ""
					console.log("发送消息:" + this.inputData)
				} else{
					console.log("不能发送空消息")
				}
				
			}
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
</style>
