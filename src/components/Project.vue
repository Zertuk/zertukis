<template>
  <div class="project">
      <span>
        <h2>{{project.name}}</h2>
      </span>
      <img :src="getImageSrc('png')">
      <img class="show-hover" :src="getImageSrc('gif')">
      <div class="show-hover project-info" v-bind:class="{ 'project-info-bottom': project.bottom }">
        <p>{{project.desc}}</p>
        <div class="project-links">
          <a :href="project.href" target="_blank" rel="noopenner" title="View Project">
            <i class="material-icons">link</i>
          </a>
          <a v-if="project.sourcehref" :href="project.sourcehref" target="_blank" rel="noopenner" title="View Source Code">
            <i class="material-icons">code</i>
          </a>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ProjectModel } from '../models/ProjectModel';

@Component
export default class Project extends Vue {
  @Prop() private project!: ProjectModel;

  public getImageSrc(type: string) {
    return require('../assets/' + this.project.img + '.' + type);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h2 {
    max-width: 90%;
  }

  @media (max-width: 1017px) {
    .project-info p {
        font-size: 14px;
    }
    h2 {
      font-size: 44px;
    }
  }

  .project {
    width: 50%;
    display: inline-block;
    position: relative;

    &:hover {
      img {
        display: none;
      }
      .show-hover {
        display: flex;
        align-items: center;
      }
      span {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
    .project {
      width: 100%;
    }
  }

  img {
    width: 100%;
    display: block;
  }

  .show-hover {
    display: none;
  }

  span {
    background: rgba(44, 62, 80, 0.5);
    width: 100%;
    font-size: 40px;
    color: #f2f2f0;
    position: absolute;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
  }

  .project-info {
    z-index: 1;
    height: 67px;
    background: rgba(44, 62, 80, 0.80);
    position: absolute;
    left: 0;
    width: 100%;
    padding: 10px;
    font-size: 20px;
    border: 2px solid #f2f2f0;
    p {
      width: 75%;
      display: inline-block;
      color: #f2f2f0;
      text-align: left;
      font-size: 18px;
      margin-top: 2px;
      margin-bottom: 0;
    }
  }

  .project-info:not(.project-info-bottom) {
    top: -67px;
    border-bottom: none;
  }

  .project-info-bottom {
    bottom: -67px;
    border-top: none;
  }

  @media (min-width: 1017px) {
    h2 {
      max-width: 500px;
      font-size: 60px;
    }
  }

  .project-links {
    flex-grow: 1;
    justify-content: flex-end;
    display: flex;
  }

  a {
    color: #f2f2f0;
    margin: 0 5px;
  }
  
  a:hover {
    color: #f3d040;
  }
</style>
