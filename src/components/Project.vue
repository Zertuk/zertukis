<template>
  <div class="project">
      <span>{{project.name}}</span>
      <img :src="getImageSrc()">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ProjectModel } from '../models/ProjectModel';

@Component
export default class Project extends Vue {
  @Prop() private project: ProjectModel;

  getImageSrc() {
    return require('../assets/' + this.project.img);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .project {
    width: 50%;
    display: inline-block;
    height: 400px;
  }

  img {
    width: 100%;
  }
</style>
