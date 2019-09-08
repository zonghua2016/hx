<template>
  <div class="imgs">
    <h2 class="title">打卡活动图片生成器</h2>
    <div class="inputText">
      <input type="text"
             class="name"
             placeholder="请输入名字"
             @input="chgName"
             v-model="name">
      <button @click="inputTxt">确定</button>
    </div>
    <div class="signInDays">
      <!-- 1 3 7 11  16  20 -->
      <span :class="[signInDays===1?'chked':'']"
            @click="chkSignInDays(1)">第一天</span>
      <span :class="[signInDays===3?'chked':'']"
            @click="chkSignInDays(3)">第三天</span>
      <span :class="[signInDays===7?'chked':'']"
            @click="chkSignInDays(7)">第七天</span>
      <span :class="[signInDays===11?'chked':'']"
            @click="chkSignInDays(11)">第十一天</span>
      <span :class="[signInDays===16?'chked':'']"
            @click="chkSignInDays(16)">第十六天</span>
      <span :class="[signInDays===20?'chked':'']"
            @click="chkSignInDays(20)">第二十天</span>
    </div>
    <div class="loadGroup"
         v-show="genImgLoading">
      <h2 v-text="genImgLoading"></h2>
      <div class="loading"
           v-show="!generateImgData">
        <img src="~imgs/loading.png"
             alt="">
      </div>
    </div>
    <div id="imgGroup"
         class="imgGroup"
         ref="imgGroup"
         v-show="showOriginImg">
      <div class="txts">
        <span class="first"
              v-text="firstName"></span>
        <span class="secd"
              v-text="secdName"></span>
        <span class="third"
              v-text="thirdName"></span>
      </div>
      <img ref="signInImgsUrl"
           :src="signInImgsUrl"
           alt="">
    </div>
    <div class="generateImg"
         v-show="!showOriginImg">
      <img :src="generateImgData"
           alt="">
    </div>
  </div>
</template>
<script>
import { getPageScrollY } from 'js/utils'
import html2canvas from "html2canvas";
export default {
  name: 'GenerateImg',
  data() {
    return {
      name: '', // 名字
      firstName: '', // 名字第一个字
      secdName: '',
      thirdName: '',
      signInDays: 1, // 第X天打卡
      signInImgs: {
        '1': 'https://img.topgamers.cn/img_ab4e1b63_106280_1.jpg',
        '3': 'https://img.topgamers.cn/img_e755355d_106280_3.jpg',
        '7': 'https://img.topgamers.cn/img_228831cf_106280_7.jpg',
        '11': 'https://img.topgamers.cn/img_f483b38b_106280_11.jpg',
        '16': 'https://img.topgamers.cn/img_2767c066_106280_16.jpg',
        '20': 'https://img.topgamers.cn/img_2a2dd597_106280_20.jpg'
      }, // 素材图url列表
      signInImgsUrl: '', // 选中素材图url
      generateImgData: '', // 生成图片base64数据
      showOriginImg: true, // 是否显示素材图
      genImgLoading: '', // 生成图片loading
    }
  },
  mounted() {
    this.signInImgsUrl = this.signInImgs[this.signInDays];
  },
  methods: {
    // 更改name
    chgName() {
      this.showOriginImg = true;
      this.generateImgData = '';
      this.genImgLoading = '';
    },
    // 确定
    inputTxt() {
      if (!!this.name && (this.name.length >= 2 || this.name.length <= 3)) {
        let nameArr = this.name.split('');
        if (nameArr.length === 2) {
          this.firstName = nameArr[0];
          this.secdName = '';
          this.thirdName = nameArr[1];
        } else {
          this.firstName = nameArr[0];
          this.secdName = nameArr[1];
          this.thirdName = nameArr[2];
        }

        this.showOriginImg = true;
        this.generateImgData = '';
        this.genImgLoading = '正在生成图片...'
        let h2cParams = {
          useCORS: true,
          backgroundColor: null,
          scale: this.backingScale(),
          scrollX: 0,
          scrollY: getPageScrollY(),
        };
        this.$nextTick(() => {
          setTimeout(() => {
            html2canvas(this.$refs.imgGroup, h2cParams)
              .then(canvas => {
                this.generateImgData = canvas.toDataURL("image/jpeg");
                this.genImgLoading = '生成图片成功，长按保存！'
                setTimeout(() => {
                  this.showOriginImg = false;
                }, 200)
              })
              .catch(error => {
                console.log("Erorr product share-img:", error);
              });
          }, 500)
        })
      } else {
        this.$toast("请输入正确名字！(2~3个字)", { duration: 1500 });
      }
    },
    backingScale() {
      if (window.devicePixelRatio && window.devicePixelRatio > 1) {
        return window.devicePixelRatio;
      }
      return 1;
    },
    // 更改打卡天数
    chkSignInDays(days) {
      this.showOriginImg = true;
      this.generateImgData = '';
      this.genImgLoading = '';
      this.signInDays = days;
      this.signInImgsUrl = this.signInImgs[this.signInDays];
    }
  }
}
</script>
<style lang="css">
html,
body {
  background-color: #000 !important;
}
#app {
  background-color: #1a192f;
}
img#downImg {
  display: none;
}
</style>
<style lang="scss" scope>
@import "styles/reset.scss";
.imgs {
  padding: 0.3rem;
  font-size: 0.26rem;
  background-color: #1a192f;
  color: #fff;
  h2.title {
    margin-bottom: 0.2rem;
    text-align: center;
    color: goldenrod;
    font-size: 0.5rem;
    line-height: 0.8rem;
  }
  .inputText {
    height: 1rem;
    margin-bottom: 0.3rem;
    box-sizing: border-box;
    input {
      width: 60%;
      height: 100%;
      text-indent: 1em;
      border-radius: 0.1rem;
      font-size: .36rem;
    }
    button {
      width: auto;
      height: 100%;
      padding: 0 0.5rem;
      margin-left: 0.1rem;
      background-color: goldenrod;
      color: #fff;
      border-radius: 0.1rem;
      cursor: pointer;
    }
  }
  .signInDays {
    padding: 0.08rem;
    span {
      display: inline-block;
      margin-bottom: 0.15rem;
      padding: 0.3rem 0.4rem;
      white-space: nowrap;
      background-color: goldenrod;
      border-radius: 0.08rem;
      cursor: pointer;
      &.chked {
        font-weight: bold;
        background-color: gold;
      }
    }
  }
  .loadGroup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
    h2 {
      margin-right: 0.2rem;
      line-height: 0.6rem;
      font-size: 0.34rem;
    }
    .loading {
      img {
        width: 0.5rem;
        animation: rotate 1.8s infinite linear;
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .imgGroup {
    position: relative;
    width: 100%;
    height: auto;
    .txts {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-items: center;
      width: 0.5rem;
      height: auto;
      top: 1.2rem;
      left: 0.68rem;
      span {
        display: block;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0.1rem 0;
        font-size: 0.4rem;
        text-align: center;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>