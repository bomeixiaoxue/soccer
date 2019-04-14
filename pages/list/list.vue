<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab, index) in tabBars" :key="tab.ref" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
			 :id="tab.ref" :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item v-for="(tabItem, tabIndex) in newsList" :key="tabIndex">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(tabIndex)">
					 <!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					    <swiper-item >
					        <view class="swiper-item">
								<cover-image src="https://inews.gtimg.com/newsapp_bt/0/8531271449/641"></cover-image>
							</view>
					    </swiper-item>
					    <swiper-item>
					        <view class="swiper-item">
								<cover-image src="https://inews.gtimg.com/newsapp_bt/0/8531271449/641"></cover-image>
							</view>
					    </swiper-item>
					    <swiper-item>
					        <view class="swiper-item">
								<cover-image src="https://inews.gtimg.com/newsapp_bt/0/8531271449/641"></cover-image>
							</view>
					    </swiper-item>
					</swiper> -->
					<block v-for="(newsItem, newsIndex) in tabItem.data" :key="newsIndex">
						<uni-media-list :data="newsItem" @click="goDetail(newsItem)"></uni-media-list>
					</block>
					<view class="uni-tab-bar-loading">
						<uni-load-more :loadingType="tabItem.loadingText" :contentText="loadingText"></uni-load-more>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import uniMediaList from '@/components/uni-media-list/uni-media-list.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import "../../common/uni/uni.css";

	import {
		friendlyDate
	} from '@/common/util.js';

	export default {
		components: {
			uniMediaList,
			uniLoadMore
		},
		data() {
			return {
				background: ['red', 'blue', 'white'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				loadingText: {
					contentdown: '上拉加载更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				scrollLeft: 0,
				refreshing: false,
				refreshText: '下拉可以刷新',
				newsList: [],
				tabIndex: 0,
				tabBars: [{
					name: '国足',
					id: 0,
					ref: 'new'
				}, {
					name: '中超',
					id: 23,
					ref: 'company'
				}, {
					name: '欧冠',
					id: 221,
					ref: 'xiaofei'
				}, {
					name: '英超',
					id: 225,
					ref: 'yule'
				}, {
					name: '西甲',
					id: 208,
					ref: 'qukuailian'
				}],
				page: 1,
				url: 'https://interface.sina.cn/wap_api/layout_col.d.json?showcid=192611&col=57300%2C185953&level=1%2C2%2C3&show_num=20&act=more&jsoncallback=callbackFunction',
				newsUrl: {
					"国足": "https://interface.sina.cn/wap_api/layout_col.d.json?showcid=192611&col=57300%2C185953&level=1%2C2%2C3&show_num=20&act=more&jsoncallback=callbackFunction",
					"中超": "https://interface.sina.cn/wap_api/layout_col.d.json?showcid=72134&col=57300%2C72134%2C200434%2C192611%2C185953&level=1%2C2%2C3&show_num=20&act=more&jsoncallback=callbackFunction",
					"欧冠": "https://interface.sina.cn/wap_api/col_data.d.html?col=72428&level=&show_num=20&act=more&jsoncallback=callbackFunction",
					"英超": "https://interface.sina.cn/wap_api/layout_col.d.json?showcid=192598&col=72264&level=1%2C2%2C3&show_num=20&act=more&jsoncallback=callbackFunction",
					"西甲": "https://interface.sina.cn/wap_api/layout_col.d.json?showcid=192603&col=40754%2C72311%2C72312%2C72313%2C72314%2C72315%2C192603&level=1%2C2%2C3&show_num=20&act=more&jsoncallback=callbackFunction"
				},
				newsData: {}
			}
		},
		onLoad: function() {
			// 初始化列表信息
			this.tabBars.forEach((tabBar) => {
				this.newsList.push({
					data: [],
					requestParams: {
						columnId: tabBar.id,
						minId: 0,
						pageSize: 10,
						column: 'id,post_id,title,author_name,cover,published_at,comments_count'
					},
					loadingText: '加载中...'
				});
			});
            this.getList();
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			getList(action = 1) {
				let activeTab = this.newsList[this.tabIndex];
				activeTab.requestParams.time = new Date().getTime() + '';
				if (action === 1) {
					activeTab.requestParams.minId = 0;
				}
				uni.request({
					url: this.url + '&page=' + this.page,
					async: true,
					dataType: "jsonp",
					success: (result) => {
						this.newsData = eval("(" + result.data.replace("callbackFunction(", "").replace("}})", "}}") + ")").result.data
						console.log(JSON.stringify(this.newsData.list))
						const data = this.newsData.list.map((news) => {
							return {
								id: news._id,
								article_type: 1,
								datetime: friendlyDate(new Date(news.cdateTime).getTime()),
								title: news.title,
								image_url: news.allPics.pics[0]?news.allPics.pics[0].imgurl:'../../static/1234.jpg',
								source: news.source.replace("新浪", "好玩"),
								comment_count: news.comment,
								post_id: news.news_id,
								url: news.URL
							};
						});
						if (action === 1) {
							activeTab.data = data;
							this.refreshing = false;
						} else {
							data.forEach((news) => {
								activeTab.data.push(news);
							});
						}
						// activeTab.requestParams.minId = data[data.length - 1].id;
					}
				});
			},
			goDetail(detail) {
				uni.navigateTo({
					url: '/pages/detail/detail?query=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			loadMore() {
				this.page++
				this.getList(2);
			},
			async changeTab(event) {
				let index = event.detail.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize('tab-bar');
				let tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].ref);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].ref),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index;

				// 首次切换后加载数据
				const activeTab = this.newsList[this.tabIndex];
				if (activeTab.data.length === 0) {
					this.page = 1
					switch (index){
						case 0:
							this.url = this.newsUrl['国足']
							this.getList();
							break;
						case 1:
							 this.url = this.newsUrl['中超']
							 this.getList();
							break;
						case 2:
							this.url = this.newsUrl['欧冠']
							this.getList();
							break;
						case 3:
							 this.url = this.newsUrl['英超']
							 this.getList();
							break;
						case 4:
							 this.url = this.newsUrl['西甲']
							 this.getList();
							break;
						default:
							break;
					}
				}
			},
			getNodeSize(node) {
				return new Promise((resolve, reject) => {
					dom.getComponentRect(node, (result) => {
						resolve(result.size);
					});
				});
			},
			onRefresh(event) {
				this.refreshText = '正在刷新...';
				this.refreshing = true;
				this.getList();
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select('#' + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize('tab-bar'),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = index;
					// 首次切换后加载数据
					const activeTab = this.newsList[this.tabIndex];
					if (activeTab.data.length === 0) {
						console.log('选项卡：' + index)
						this.page = 1
						switch (index){
							case 0:
								this.url = this.newsUrl['国足']
								this.getList();
								break;
							case 1:
								 this.url = this.newsUrl['中超']
								 this.getList();
								break;
							case 2:
								this.url = this.newsUrl['欧冠']
								this.getList();
								break;
							case 3:
								 this.url = this.newsUrl['英超']
								 this.getList();
								break;
							case 4:
								 this.url = this.newsUrl['西甲']
								 this.getList();
								break;
							default:
								break;
						}
					}
				}
			}
		}
	}
</script>
<style>
	page {
		background-color: #FFFFFF;
		height: 100%;
		font-size: 11px;
		line-height: 1.8;
	}

	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}

	.uni-tab-bar .list {
		width: 750upx;
		height: 100%;
	}

	.uni-swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 70upx;
		height: 70upx;
		border-bottom: 1px solid #c8c7cc;
	}

	.swiper-tab-list {
		font-size: 30upx;
		width: 150upx;
		display: inline-block;
		text-align: center;
		color: #555;
	}

	.uni-tab-bar .active {
		color: #007AFF;
	}

	.uni-tab-bar .swiper-box {
		flex: 1;
		width: 100%;
		height: calc(100% - 100upx);
	}

	.uni-tab-bar-loading {
		padding: 20upx 0;
	}
	
	.uni-padding-wrap .page-section{
		width: 100%;
	}
	
</style>
