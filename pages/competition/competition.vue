<template>
	<view>
		<scroll-view scroll-x class="nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<view >
				<uni-view class="bg-white grid text-center col-5 padding-sm" style="border-bottom: 1px solid;">
					<uni-view>日期</uni-view>
					<uni-view>时间</uni-view>
					<uni-view>主队</uni-view>
					<uni-view>比分</uni-view>
					<uni-view>客队</uni-view>
				</uni-view>
			</view>
			<view v-for="(matche, index) in competitionData" :key="index">
				<view class="text-center padding-sm">
					第{{index}}轮
				</view>
				<view class="bg-white" v-for="item in matche" >
					<uni-view class="grid text-center col-5" >
						<uni-view class="padding-sm">{{getDay(item.startTime)}}</uni-view>
						<uni-view class="padding-sm">{{getTime(item.startTime)}}</uni-view>
						<uni-view class="padding-sm">{{item.homeName}}</uni-view>
						<uni-view class="padding-sm">{{item.homeGoal}} : {{item.awayGoal}}</uni-view>
						<uni-view class="padding-sm">{{item.awayName}}</uni-view>
					</uni-view>
				</view>
			</view>
		</block>
		<block v-if="TabCur==1">
			<uni-view class="bg-white flex" style="border-bottom: 1px solid;">
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">排名</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">球队</uni-view>
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">场次</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">胜/负/平</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">进/失球</uni-view>
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">积分</uni-view>
			</uni-view>
			<view v-for="(item, index) in integralData" :key="index">
				<uni-view class="bg-white flex">
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{index+1}}</uni-view>
					<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.teamName}}</uni-view>
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{getSession(item.winMatchCount, item.serial, item.planishMatchCount)}}</uni-view>
					<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.winMatchCount}}/{{item.serial}}/{{item.planishMatchCount}}</uni-view>
					<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.goals}}/{{item.goalsConceded}}</uni-view>
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{item.score}}</uni-view>
				</uni-view>
			</view>
		</block>
		<block v-if="TabCur==2">
			<uni-view class="bg-white flex" style="border-bottom: 1px solid;">
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">排名</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">球员</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">球队</uni-view>
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">进球</uni-view>
				<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">点球</uni-view>
			</uni-view>
			<view v-for="(item, index) in shooterData" :key="index">
				<uni-view class="bg-white flex">
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{index+1}}</uni-view>
					<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.playerCnName}}</uni-view>
					<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.teamCnName}}</uni-view>
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{item.goals}}</uni-view>
					<uni-view class="flex-sub padding-sm radius" style="font-size: 12px;">{{item.attPenGoal}}</uni-view>
				</uni-view>
			</view>
		</block>
	</view>
</template>

<script>
	import "../../colorui/main.css"
	import "../../colorui/icon.css"
	
	export default {
		data() {
			return {
				TabCur: 0,
				tabNav: ['赛程', '积分榜', '射手榜'],
				competitionData: [],
				integralData: [],
				shooterData: []
			};
		},
		onLoad: function() {
			this.getCompetitionData()
			this.getIntegralData()
			this.getShooterData()
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			// 获取赛程数据
			getCompetitionData() {
				uni.request({
					url: 'https://mat1.gtimg.com/apps/test2/web_shasha_23_new.json',
					success: (result) => {
						if (result.statusCode == 200) {
							this.competitionData = eval("(" + result.data.replace("matchList23Callback(", "").replace("})", "}") + ")").matches
							console.log("赛程数据：" + result.data.replace("matchList23Callback(", "").replace("})", "}"))
						}
					}
				});
			},
			// 获取积分榜数据
			getIntegralData(){
				uni.request({
					url: 'https://matchweb.sports.qq.com/team/rank?competitionId=23&from=sporthp&callback=__jpcb0',
					success: (result) => {
						if (result.statusCode == 200) {
							this.integralData = eval("(" + result.data.replace("__jpcb0(", "").replace("})","}") + ")").data.list
							console.log("积分榜数据: " + JSON.stringify(this.integralData))
						}
					}
				});
			},
			// 获取射手榜数据
			getShooterData(){
				uni.request({
					url: 'https://ziliaoku.sports.qq.com/cube/index?cubeId=33&dimId=66&order=t1&limit=200&needArr=1&from=sportsdatabase&params=t2%3A23&callback=__jpcb0',
					success: (result) => {
						if (result.statusCode == 200) {
							this.shooterData = eval("(" + result.data.replace("__jpcb0(", "").replace("})","}") + ")").data.footballPlayerRank
							console.log("射手榜数据: " + JSON.stringify(this.shooterData))
						}
					}
				});
			},
			// 获取日期
			getDay(str) {
				str = str.split(" ");
				return str[0].replace("-", "/").replace("-", "/");
			},
			// 获取时间
			getTime(str) {
				str = str.split(" ");
				return str[1].substr(0, str[1].lastIndexOf(":"))
			},
			// 场次相加
			getSession(v1, v2, v3) {
			  return parseInt(v1) + parseInt(v2) + parseInt(v3);
			}
		}
	}
</script>

<style>
	.grid.col-5 > uni-view {
		font-size: 12px;
	}
	.radio {
		font-size: 12px;
	}
</style>

<!-- 
<template>
	<view>
		赛程页面
		<view v-for="matche in competitionData">
			<view v-for="item in matche">
				{{item.homeName}}
			</view>
		</view>
		积分榜数据
		<view v-for="item in integralData">
				{{item.name}}
		</view>
		射手榜数据
		<view v-for="item in shooterData">
				{{item.playerCnName}}+++{{item.teamCnName}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				competitionData: "",
				integralData: "",
				shooterData: ""
			};
		},
		onLoad: function() {
			// this.getCompetitionData()
			// this.getIntegralData()
			this.getShooterData()
		},
		methods: {
			// 获取赛程数据
			getCompetitionData() {
				uni.request({
					url: 'https://mat1.gtimg.com/apps/test2/web_shasha_23_new.json',
					success: (result) => {
						if (result.statusCode == 200) {
							this.competitionData = eval("(" + result.data.replace("matchList23Callback(", "").replace("})", "}") + ")").matches
							console.log("赛程数据：" + result.data.replace("matchList23Callback(", "").replace("})", "}"))
						}
					}
				});
			},
			// 获取积分榜数据
			getIntegralData(){
				uni.request({
					url: 'https://matchweb.sports.qq.com/team/rank?competitionId=23&from=sporthp&callback=__jpcb0',
					success: (result) => {
						if (result.statusCode == 200) {
							this.integralData = eval("(" + result.data.replace("__jpcb0(", "").replace("})","}") + ")").data.list
							console.log("积分榜数据: " + JSON.stringify(this.integralData))
						}
					}
				});
			},
			// 获取射手榜数据
			getShooterData(){
				uni.request({
					url: 'https://ziliaoku.sports.qq.com/cube/index?cubeId=33&dimId=66&order=t1&limit=200&needArr=1&from=sportsdatabase&params=t2%3A23',
					dataType: 'jsonp',
					success: (result) => {
						if (result.statusCode == 200) {
							this.shooterData = eval("(" + result.data.replace("__jpcb0(", "").replace("})","}") + ")").data.footballPlayerRank
							console.log("射手榜数据: " + JSON.stringify(this.shooterData))
						}
					}
				});
			},
			// Unicode转中文
			hexToDec(str) {
			  str = str.replace(/\\/g,"%");
			  return unescape(str);
			}
		},
	}
	
// 	var decToHex = function(str) {	
// 	  var res=[];
// 	  for(var i=0;i < str.length;i++)
// 		res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
// 	  return "\\u"+res.join("\\u");
// 	}
// 	var hexToDec = function(str) {
// 	  str=str.replace(/\\/g,"%");
// 	  return unescape(str);
// 	}
// 	var str=decToHex("decToHex unicode 编码转换");
// 	alert("编码后："+str+"\n\n解码后："+hexToDec(str));
</script>

<style>

</style>
 -->