<template>
	<view>
		<view class="cu-chat" style="margin-bottom: 170upx;">
			<view class="cu-item self">
				<view class="main">
					<view class="content bg-green shadow">
						<text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">2018年3月23日 13:23</view>
			</view>
			<view class="cu-info round">对方撤回一条消息!</view>
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						<text>喵喵喵！喵喵喵！</text>
					</view>
				</view>
				<view class="date "> 13:23</view>
			</view>
			<view class="cu-info">
				<text class="icon-roundclosefill text-red "></text> 对方拒绝了你的消息
			</view>
			<view class="cu-info">
				对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
				<text class="text-blue">发送好友验证</text>
			</view>
			<view class="cu-item self">
				<view class="main">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"></image>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date"> 13:23</view>
			</view>
			<view class="cu-item self">
				<view class="main">
					<view class="action text-bold text-grey">
						3"
					</view>
					<view class="content shadow">
						<text class="icon-sound text-xxl padding-right-xl"> </text>
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			
			<!-- 本人消息 -->
			<view class="cu-item self" v-for="item in mesData">
				<view class="main">
					<view class="action">
						<text class="icon-locationfill text-orange text-xxl"></text>
					</view>
					<view class="content shadow">
						{{item}}
					</view>
				</view>
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
				<view class="date">13:23</view>
			</view>
			
			<!-- 好友消息 -->
			<view class="cu-item">
				<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
				<view class="main">
					<view class="content shadow">
						好友
					</view>
					<view class="action text-grey">
						<text class="icon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
					</view>
				</view>
				<view class="date">13:23</view>
			</view>
			<view v-for="item in chatData" :style="[{bottom:InputBottom+100+'px'}]">
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
				
				<view class="" v-if="item.p == 0">
					<!-- 好友消息 -->
					<view class="cu-item">
						<view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
						<view class="main">
							<view class="content shadow">
								{{item.content}}
							</view>
							<view class="action text-grey">
								<text class="icon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
							</view>
						</view>
						<view class="date">13:23</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="" :style="[{bottom:InputBottom+'px'}]">
			122
		</view> -->
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
					"内容1",
					"内容2"
				],
				chatData: [
					{"p":1,"content":"吃饭没"},
					{"p":0,"content":"没吃"}
				]
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:"好友名字"
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
