<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
      <div class="aside">
        <dl>
          <dt>主应用</dt>
            <dd><RouterLink to="/editor">Editor-富文本编辑器</RouterLink></dd>
            <dd><RouterLink to="/watermark">watermark-水印</RouterLink></dd>
          <dt>React-子应用</dt>
            <dd><RouterLink to="/react-sub-project/user">User-用户列表</RouterLink></dd>
            <dd><RouterLink to="/react-sub-project/menu">Menu-菜单</RouterLink></dd>
          <dt>Vue-子应用</dt>
            <dd><RouterLink to="/vue-sub-project/article">Article-文章列表</RouterLink></dd>
            <dd><RouterLink to="/vue-sub-project/publish">Publish-发布文章</RouterLink></dd>
        </dl>
      </div>
      <div class="main">
        <RouterView v-show="$route.name" />
        <!-- 加载子应用  -->
        <div id="micro"></div>
      </div>
  </div>
</template>

<style scoped>
.wrapper { display: flex; height: 100vh;}
.wrapper .aside { flex: 0 0 200px; background: #000;}
.wrapper .aside dl { color: #fff; padding: 5px; line-height: 30px;}
.wrapper .aside dt { margin-top: 20px;}
.wrapper .aside dd { margin-left: 20px;}
.wrapper .main { flex: 1; padding: 10px 20px; }
</style>
