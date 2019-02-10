<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
    <div class="projects">
      <Project v-for="(project, index) in projects" :key="index" :project="project"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Project from './components/Project.vue';

@Component({
  components: {
    Header,
    HelloWorld,
    Project
  },
})
export default class App extends Vue {
  public projects: any[] = [
    {
      name: 'test',
      img: 'spooky-ghosts-witch.gif'
    }, 
    {
      name: 'test2',
      img: 'spooky-ghosts-witch.gif'
    }
  ];

}
</script>

<style lang="scss">

body {
  background: #f3d040;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
