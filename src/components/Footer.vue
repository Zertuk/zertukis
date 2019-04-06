<template>
  <footer>
    <SocialMediaLinks/>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SocialMediaLinks from './SocialMediaLinks.vue';

@Component({
  components: {
    SocialMediaLinks,
  },
})

export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    footer {
        margin-top: 60px;
        padding: 20px 0;
        text-align: left;
    }
</style>
