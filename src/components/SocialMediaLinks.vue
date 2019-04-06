<template>
    <div class="max-site-width">
        <Link :data="link" v-for="(link, index) in links" :key="index"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Link from './Link.vue';

@Component({
  components: {
    Link,
  },
})

export default class SocialMediaLinks extends Vue {
    public links = [
        {
            href: 'https://twitter.com/Zertuk',
            name: 'Twitter',
            target: '_blank',
        },
        {
            href: 'https://github.com/Zertuk',
            name: 'Github',
            target: '_blank',
        },
        {
            href: 'https://www.instagram.com/zertukis/',
            name: 'Instagram',
            target: '_blank',
        },
        {
            href: 'https://zertuk.itch.io/',
            name: 'Itch',
            target: '_blank',
        },
        {
            href: 'https://store.steampowered.com/curator/33315881',
            name: 'Steam',
            target: '_blank',
        },
        {
            href: 'https://www.grizzlywizard.com/',
            name: 'Grizzly Wizard',
            target: '_blank',
        },
        {
            href: 'mailto:just.forcier@gmail.com',
            name: '<i class="material-icons">email</i>',
            isIcon: true,
            target: '_self',
        },
    ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
