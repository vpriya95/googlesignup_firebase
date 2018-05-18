<template>
  <div id="app" class="flyout">
     <HeaderPage></HeaderPage>
     <main :style="{marginTop: '60px'}">
      <router-view></router-view>
    </main>

  </div>
</template>
<script>
import HeaderPage from './docs/HeaderPage.vue'; 

export default {
  name: 'app',
  components: {
    HeaderPage
  },
  data() {
    return {
      siteName: "Just Deploy",
    };
  }
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	/*min-height:100vh;*/
	justify-content: space-between;
}

</style>
