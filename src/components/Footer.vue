<template>
  <footer>
    <div class="max-site-width">
        FOOTER HERE
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Link from './Link.vue';

@Component({
  components: {
    Link
  }
})

export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    footer {
        padding: 20px 0;
        text-align: left;
    }
</style>
