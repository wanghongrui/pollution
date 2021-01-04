<template>
    <div class="chainration">
        <div class="ration_chart"></div>
    </div>
</template>

<script>

// 指定图表的配置项和数据
const chart_option = {
	backgroundColor: '#012b60',
	// color:['#41e3bf','#e91f63','#259dd2'],
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
				name: '负面舆论',
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
				name: '正面舆论',
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
            console.log(this.$echarts.graphic);
            let chartClass='.ration_chart';
			let chartDiv=this.$el.querySelector(chartClass);
			console.log(chartDiv)
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
	display: inline-block;
	.ration_chart{
		width:300px;
		height: 300px;
	}
}
</style>