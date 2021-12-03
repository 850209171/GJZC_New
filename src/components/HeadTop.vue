<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">
        <span v-if="index == $route.meta.length-1" class="no-redirect">{{ item }}</span>
        <a v-else href="javascript:;">{{ item }}</a>
        <!--<router-link v-else :to="{ name:item }">{{ item }}</router-link>-->
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!--<el-dropdown @command="handleCommand" menu-align='start'>
      <img :src="baseImgPath + adminInfo.avatar" class="avator">
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>-->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<styles>
.header_container {
  background-color: #EFF2F7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
