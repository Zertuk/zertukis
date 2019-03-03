<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
    <div class="projects max-site-width">
      <Project v-for="(project, index) in projects" :key="index" :project="project"/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Project from './components/Project.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    HelloWorld,
    Project,
    Footer
  },
})
export default class App extends Vue {
  public projects: any[] = [
    {
      name: 'Spooky Ghosts Dot Com',
      img: 'spooky-ghosts-witch',
      href: 'https://store.steampowered.com/app/820620/Spooky_Ghosts_Dot_Com/',
      desc: 'Spooky Ghosts Dot Com | GDScript'
    }, 
    {
      name: 'Space Lich Omega 2',
      img: 'slotwo',
      href: 'https://www.spacelichomega2.com',
      sourcehref: 'https://github.com/Zertuk/slotwo',
      desc: 'Space Lich Omega 2 | AngularJS'
    },
    {
      name: 'test',
      img: 'spooky-ghosts-witch',
      href: 'https://store.steampowered.com/app/820620/Spooky_Ghosts_Dot_Com/'
    }, 
    {
      name: 'test2',
      img: 'spooky-ghosts-witch',
      href: 'https://store.steampowered.com/app/820620/Spooky_Ghosts_Dot_Com/'
    }
  ];

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

* {
  box-sizing: Border-box 
}

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
}

.projects {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
}

.max-site-width {
  max-width: 1200px;
  margin: 0 auto;
}



</style>
