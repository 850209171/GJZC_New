<template>
  <div class="home">
    <div class="manage_page fillcontain">
      <el-row style="height: 100%;">
        <el-col :span="3" style="min-height: 100%;background-color: #324157;overflow: hidden;">
          <el-menu
            router
            :default-active="$route.name"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#049eff">
            <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-document"></i>数据管理</template>
              <el-menu-item index="list">用户列表1</el-menu-item>
              <el-menu-item index="list2">用户列表2</el-menu-item>
              <el-menu-item index="list3">用户列表3</el-menu-item>
              <el-menu-item index="list4">用户列表4</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-document"></i>编辑</template>
              <el-menu-item index="index">编辑1</el-menu-item>
              <el-menu-item index="index2">编辑2</el-menu-item>
              <el-menu-item index="index3">编辑3</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="21">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
  }
}
</script>
<style scoped>
.home, .fillcontain {
  height: 100%;
}
.el-menu {
  border: 0;
}
.el-col {
  background-color: #EFF2F7;
  height: 100%;
  overflow: auto;
}
.home {
  /deep/ .el-submenu .el-menu-item {
    background-color: #1f2d3d !important;
  }
  /deep/ .el-submenu__title:hover, .el-submenu .el-menu-item:hover {
    background-color: #48576a !important;
  }
}
</style>
