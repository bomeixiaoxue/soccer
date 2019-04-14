<template>
	<view class="bg-white">
		<view class="banner">
			<image class="banner-img" :src="banner.image_url"></image>
			<view class="banner-title">{{banner.title}}</view>
		</view>
		<view class="article-meta">
			<text class="article-author">{{banner.source}}</text>
			<text class="article-text">发表于</text>
			<text class="article-time">{{banner.datetime}}</text>
		</view>
		<view>{{result}}</view>
		<view class="article-content">
			<view v-for="(item, index) in content" :key="index">
				<view class="uni-common-mt" style="padding:20upx;">
					<rich-text :nodes="item"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const FAIL_CONTENT = '<p>获取信息失败</p>';
	
	export default {
		data() {
			return {
				result: '',
				banner: {},
				content: [],
				title: 'rich-text',
				nodes: [{
					name: 'div',
					attrs: {
						class: 'div-class',
						style: 'line-height: 60px; color: red; text-align:center;'
					},
					children: [{
						type: 'text',
						text: 'kkkkk'
					}]
				}]
			}
		},
		onShareAppMessage() {
			return {
				title: this.banner.title
			}
		},
		onLoad(event) {
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(event.query));
			} catch (error) {
				this.banner = JSON.parse(event.query);
			}
			// this.nodes[0].children[0].text = "林广豪"

			this.getDetail();
			uni.setNavigationBarTitle({
				title: this.banner.title
			});
		},
		methods: {
			getDetail() {
				uni.request({
					url: this.banner.url,
					async: false,
					success: (result) => {
						if (result.statusCode == 200) {
							var parser = new DOMParser();
							var htmlDoc = parser.parseFromString(result.data, "text/html")
							var art_ps = htmlDoc.getElementsByClassName('art_p');
							for (var i = 0; i < art_ps.length; i++) {
								this.content[i] = art_ps[i].innerHTML
								// 不知道干嘛一定要设置一个模型，content才能生效
								this.result = ' '
							}
						} else {
							this.content = FAIL_CONTENT;
						}
						console.log('获取新闻详情结果：' + JSON.stringify(result))
					}
				});
			}
		}
	}
</script>

<style>
	.banner {
		height: 360upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.banner-img {
		width: 100%;
	}

	.banner-title {
		max-height: 84upx;
		overflow: hidden;
		position: absolute;
		left: 30upx;
		bottom: 30upx;
		width: 90%;
		font-size: 32upx;
		font-weight: 400;
		line-height: 42upx;
		color: white;
		z-index: 11;
	}

	.article-meta {
		padding: 20upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: gray;
	}

	.article-text {
		font-size: 26upx;
		line-height: 50upx;
		margin: 0 20upx;
	}

	.article-author,
	.article-time {
		font-size: 30upx;
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
</style>
