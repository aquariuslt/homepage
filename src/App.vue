<template>
  <div
    v-if="app"
    class="home-layout md-layout md-alignment-center-center">

    <div class="md-size-100">
      <p class="md-display-1">{{app.title}}</p>

      <div class="md-layout md-alignment-center-center"
        v-for="entry in app.entries"
        :key="entry.name">
        <a :href="entry.url"
           target="_blank"
           rel="noopener">
          {{entry.name}}
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import coreApi from '@/api/core.api';

  export default {
    name: 'app',
    data() {
      return {
        app: null
      };
    },
    created: function() {
      let $this = this;
      $this.loadAppData();
    },
    methods: {
      loadAppData: function() {
        let $this = this;
        coreApi.getApplicationConfig().then((res) => {
          $this.app = res.data;
          document.dispatchEvent(new Event('app-rendered'));
        });
      }
    }
  };
</script>

<style scoped>
  .home-layout {
    height: 100vh;
  }
</style>
