<template>
    <div class="digital">
        <ul>
            <li
                :class="{'number-item': !isNaN(item) }"
                v-for="(item,index) in computeNumber"
                :key="index"
            >
                <span v-if="!isNaN(item)">
                    <i ref="numberItem" class="item">0123456789</i>
                </span>
                <span v-else>{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"digital",
    props: {
        number: {
            type: Number,
            default: 8
        }
    },
    data(){
        return {
            computeNumber:['0','0','0',',','9','1','7']
        }
    },
    mounted(){
        this.increaseNumber();
    },
    methods:{
        // 定时增长数字
        increaseNumber () {
            let self = this;
            this.timer = setTimeout(() => {
                // 获取新的随机数
                // self.newNumber = self.newNumber + self.getRandomNumber(1, 1000);
                self.setNumberTransform();
            }, 2000);
        },
        // 设置每一位数字的偏移
        setNumberTransform () {
            let numberItems = this.$el.querySelectorAll(".number-item .item");
            let numberArr = this.computeNumber.filter(item => !isNaN(item));
            for (let index = 0; index < numberItems.length; index++) {
                let elem = numberItems[index];
                elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
            }
        },
        // 获取随机数
        getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }
}
</script>
<style lang="scss">
.digital{
    ul{
        width: auto;
        margin: 0;
        padding: 0;

        li{
            display: inline-block;
            width: 54px;
            margin: 0;
            color: #d78211;
            font-size: 62px;
        }
    }
    .number-item {
        width: 50px;
        display: inline-block;
        width: 54px;
        height: 70px;
        background: url(../assets/img/number-bg.png) no-repeat center center;
        background-size:100% 100%;
        font-size: 62px;
        line-height: 70px;
        text-align: center;
        color: #d78211;

        /* 新加部分的代码 */
        position: relative;
        text-orientation: upright;
        vertical-align: bottom;

        & > span {
            position: relative;
            display: inline-block;
            margin-right: 10px;
            width: 100%;
            height: 100%;
            writing-mode: vertical-rl;
            text-orientation: upright;
            overflow: hidden;
            & > i {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%,0);
                transition: transform 0.5s ease-in-out;
                letter-spacing: 10px;
                font-style: normal;
            }
        }
        }

}
</style>