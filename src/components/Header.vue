<template>
    <header>
        <SocialMediaLinks/>     
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SocialMediaLinks from './SocialMediaLinks.vue';

@Component({
  components: {
    SocialMediaLinks,
  },
})

export default class Header extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    header {
        padding: 20px 0;
        text-align: left;
    }
</style>
