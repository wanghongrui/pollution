<template>
    <div class="chainration">
		<div class="number-tip-wrap">
			<div class="number-tip tip_1">
				<div>总地块数</div>
				<div class="number">677</div>
			</div>
			<div class="number-tip">
				<div class="label">今日下降</div>
				<div>
					<i class="iconfont">&#xe6da;</i>
					<span>55</span>
				</div>
			</div>
		</div>
        <div class="ration_chart"></div>
    </div>
</template>

<script>

// 指定图表的配置项和数据
const chart_option = {
	backgroundColor: 'rgba(0,0,0,0.5)',
	// graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
	graphic: {
		type: 'text',               // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
		top: 'center',              // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
		left: 'center',             // 同上
		style: {
			text: '地块对比',       // 文本块文字。可以使用 \n 来换行。[ default: '' ]
			fill: '#fff',           // 填充色。
			fontSize: 12,           // 字体大小
			fontWeight: 'bold'		// 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
		}
	},

	series: [{
		name: '访问来源',
		type: 'pie',
		radius: ['20%', '30%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: true,
				formatter: '{b}\n\n占比：{d}%\n\n数量： {c}',
				textStyle: {
					fontSize: '14'
				}
			},
			emphasis: {
				show: true,
				textStyle: {
					fontWeight: 'bold',
					fontSize: '14'
				}
			}
		},
		labelLine: {
			normal: {
				show: true,
				length: 4,
				length2: 5
			}
		},
		itemStyle: {
			normal: {
				borderWidth: 5,
				borderType: 'solid',
				shadowBlur: 20
			}
		},
		data: [{
				value: 18,
				name: '已处理',
				label: {
					normal: {
						textStyle: {
							color: '#ff9300'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: '#ff9300'
						}
					}
				},
				itemStyle: {
					
				}
			},

			{
				value: 34,
				name: '未处理',
				label: {
					normal: {
						textStyle: {
							color: '#00e6fc'
						}
					}
				},
				labelLine: {
					normal: {
						lineStyle: {
							color: '#00e6fc'
						}
					}
				},
				itemStyle: {}
			}
		]
	}]
};

export default {
    name: "chainration",
    data(){
        return {

        }
    },
    mounted(){
        console.log("dsdf");
        console.log(this.$echarts);
        // 初始化图表
        this.$nextTick(()=>{
            this.init();
        })

    },
    methods:{
        // 初始化
        init(){
            let chartClass='.ration_chart';
			let chartDiv=this.$el.querySelector(chartClass);
            // 初始化值
            chart_option.series[0].data[0].itemStyle={
                normal: {
						color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                         color:'rgba(255,200,30, .1)',
                    }, {
                        offset: 1,
                         color:'rgba(255,200,30, .5)',
                    }]),
						borderColor: '#ff9300',
						shadowColor: 'rgba(255,147,0, 0.9)',
                      shadowBlur:30
					}
            };
            chart_option.series[0].data[1].itemStyle={
                normal: {
                    color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                        color:'rgba(0,230,252, .1)',
                }, {
                    offset: 1,
                        color:'rgba(220,0,252,1)',
                }]),
                    borderColor: '#00e6fc',
                    shadowColor: 'rgba(0,230,252, .9)',
                    shadowBlur:30
                }
            };
            // 初始化图表
            this.$echarts.init(chartDiv).setOption(chart_option, true);
        },
    }
}
</script>

<style lang="scss">
.chainration{
	z-index: 10;
    display: inline-block;
	position: relative;
	top: 55px;

	.ration_chart{
		width:300px;
		height: 300px;
	}
	.number-tip-wrap{
		display: flex;
		position: relative;

		.number-tip{
			color:#ffff;
			background:rgba(0,0,0,0.5);
			display: inline-block;
			flex: 1;
			.label{
				font-size: 12px;
			}
		}
	}

	
}
</style>