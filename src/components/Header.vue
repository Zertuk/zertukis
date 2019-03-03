<template>
  <header>
  <div class="max-site-width">
           <Link :data="link" v-for="(link, index) in links" :key="index"/>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Link from './Link.vue';

@Component({
  components: {
    Link
  }
})

export default class Header extends Vue {
    public links = [
        {
            link: "https://twitter.com/Zertuk",
            name: "Twitter"
        },
        {
            link: "https://github.com/Zertuk",
            name: "Github"
        },
        {
            link: "https://www.instagram.com/zertukis/",
            name: "Instagram"
        },
        {
            link: "https://zertuk.itch.io/",
            name: "Itch"
        },
        {
            link: "https://store.steampowered.com/curator/33315881",
            name: "Steam"
        },
        {
            link: "https://www.grizzlywizard.com/",
            name: "Grizzly Wizard"
        },
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    header {
        padding: 20px 0;
        text-align: left;
    }
</style>
