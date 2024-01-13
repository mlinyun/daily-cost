<template>
  <div>
    <div class="box">首页</div>
    <i class="iconfont icon-wode"></i>
    <van-row gutter="10">
      <van-col span="5">
        <van-button type="primary">主要按钮</van-button>
      </van-col>
      <van-col span="5">
        <van-button type="success">成功按钮</van-button>
      </van-col>
      <van-col span="4">
        <van-button type="default">默认按钮</van-button>
      </van-col>
      <van-col span="5">
        <van-button type="warning">警告按钮</van-button>
      </van-col>
      <van-col span="5">
        <van-button type="danger">危险按钮</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "HomeViews",
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>
