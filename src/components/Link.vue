<template>
    <a :href="data.href" :target="data.target" rel="noopener" v-bind:class="{ 'vertical-align-sub': data.isIcon }">
        <span v-html="data.name">{{data.name}}</span>
        <span class="anchor-underline"></span>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LinkModel } from '../models/LinkModel';

@Component
export default class Link extends Vue {
     @Prop() private data!: LinkModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../variables.scss";

    a {
        display: inline-block;
        font-weight: bold;
        color: #7d3c5a;
        margin-left: 20px;
        font-size: 22px;
        position: relative;
        text-decoration: none;
    }
    @media (min-width: $max-width) {
        a:first-of-type {
            margin-left: 0;
        }
    }

    .vertical-align-sub {
        vertical-align: sub;
    }

    .anchor-underline {
        position: absolute;
        width: 0;
        height: 4px;
        background: $accent-color;
        right: 0;
        top: 26px;
        transition: all 0.2s ease;
        margin-left: -2px;
    }

    a:hover .anchor-underline {
        width: 100%;
        left: 2px;
    }

</style>
