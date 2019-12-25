<template>
  <div id="app">
    <router-view />
    <div style="width:1000px;margin:20px auto 0; padding:20px 0;">
      <a target="_blank"
         href="http://beian.miit.gov.cn/"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京ICP备19043286号</p>
      </a>
      <a target="_blank"
         href="http://beian.miit.gov.cn/"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京ICP备19043286号-1</p>
      </a>
      <a target="_blank"
         href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502038975"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="~imgs/blogo.png"
             style="float:left;" />
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11010502038975号</p>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "common/styles/reset.scss";
</style>
