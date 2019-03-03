<template>
  <div class="max-site-width">
    <h1>Justin Forcier</h1>
    <h2>Software Engineer, Indie Game Developer, Pixel Artist</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../variables.scss";

h3 {
  margin: 40px 0 0;
}
h1, h2 {
  text-align: left;
  margin-left: 20px;
  color: $accent-color;
}
@media (min-width: $max-width) {
    h1, h2 {
        margin-left: 0;
    }
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
