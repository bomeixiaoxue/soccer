<template>
	<view>
		赛程页面
		<view v-for="(matche, index) in competitionData" :key="index">
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
					url: 'https://ziliaoku.sports.qq.com/cube/index?cubeId=33&dimId=66&order=t1&limit=200&needArr=1&from=sportsdatabase&params=t2%3A23&callback=__jpcb0',
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
