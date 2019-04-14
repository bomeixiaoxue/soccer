<template>
	<view>
		<scroll-view scroll-x class="nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabNav" :key="index" @tap="tabSelect"
			 :data-id="index">
				{{tabNav[index]}}
			</view>
		</scroll-view>
		<block v-if="TabCur==0">
			<uni-view class="bg-white flex" style="border-bottom: 1px solid;">
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">时间</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">主队</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">比分</uni-view>
				<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">客队</uni-view>
			</uni-view>
			<view v-for="(matche, index) in competitionData" :key="index">
				<view class="text-center padding-sm">
					第{{index}}轮
				</view>
				<view v-for="(item, itemIndex) in matche" :key="itemIndex">
					<uni-view class="bg-white flex">
						<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.startTime}}</uni-view>
						<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.homeName}}</uni-view>
						<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.homeGoal}} : {{item.awayGoal}}</uni-view>
						<uni-view class="flex-twice padding-sm radius" style="font-size: 12px;">{{item.awayName}}</uni-view>
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
		<!-- 底部单选列表视图 -->
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
	</view>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	
	import "../../colorui/main.css"
	import "../../colorui/icon.css"
	
	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				TabCur: 0,
				tabNav: ['赛程', '积分榜', '射手榜'],
				competitionData: [],
				integralData: [],
				shooterData: [],
				leagueBz: '8',
				pickerValueArray: [{
						label: '英超',
						value: '8'
					},
					{
						label: '意甲',
						value: '21'
					},
					{
						label: '西甲',
						value: '23'
					}
				],
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0]
			};
		},
		onLoad: function() {
			this.getData(this.leagueBz)
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				console.log('切换选项卡'+this.TabCur)
				switch (this.TabCur){
					case '0':
						if (this.competitionData.length == 0) {
							this.getCompetitionData(this.leagueBz)
						} 
						break;
					case '1':
						if (this.integralData.length == 0) {
							this.getIntegralData(this.leagueBz)
						}
						break;
					case '2':
						if (this.shooterData.length == 0) {
							this.getShooterData(this.leagueBz)
						}
						break;
					default:
						break;
				}
			},
			getData(str) {
				this.getCompetitionData(str)
				this.getIntegralData(str)
				this.getShooterData(str)
			},
			// 获取赛程数据
			getCompetitionData(str) {
				uni.request({
					url: 'https://mat1.gtimg.com/apps/test2/web_shasha_'+ str +'_new.json',
					success: (result) => {
						if (result.statusCode == 200) {
							this.competitionData = eval("(" + result.data.replace("matchList"+ str +"Callback(", "").replace("})", "}") + ")").matches
							console.log(this.competitionData)
							console.log("赛程数据：" + result.data.replace("matchList"+ str +"Callback(", "").replace("})", "}"))
						}
					}
				});
			},
			// 获取积分榜数据
			getIntegralData(str){
				uni.request({
					url: 'https://matchweb.sports.qq.com/team/rank?competitionId='+ str +'&from=sporthp&callback=__jpcb0',
					success: (result) => {
						if (result.statusCode == 200) {
							this.integralData = eval("(" + result.data.replace("__jpcb0(", "").replace("})","}") + ")").data.list
							console.log("积分榜数据: " + JSON.stringify(this.integralData))
						}
					}
				});
			},
			// 获取射手榜数据
			getShooterData(str){
				uni.request({
					url: 'https://ziliaoku.sports.qq.com/cube/index?cubeId=33&dimId=66&order=t1&limit=200&needArr=1&from=sportsdatabase&params=t2%3A'+ str +'&callback=__jpcb0',
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
			},
			// 弹出底部下拉列表
			showSinglePicker() {
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			// 确认下来列表
			onConfirm(e) {
				this.getData(e.value[0])
			},
			// 取消下拉列表
			onCancel(e) {
				console.log('取消下拉列表: ' + JSON.stringify(e))
			}
		},
		onNavigationBarButtonTap(e) {
			this.showSinglePicker()
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
