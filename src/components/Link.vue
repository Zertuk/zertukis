<template>
    <a :href="data.link" target="_blank" rel="noopener noreferrer">
        {{data.name}}
        <span class="anchor-underline"></span>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LinkModel } from '../models/LinkModel';

@Component
export default class Link extends Vue {
     @Prop() private data: LinkModel;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    a {
        font-weight: bold;
        color: #f2f2f0;
        margin: 0 5px;
        font-size: 22px;
        position: relative;
        text-decoration: none;
    }

    .anchor-underline {
        position: absolute;
        width: 0;
        height: 4px;
        background: #633662;
        left: 50%;
        top: 26px;
        transition: all 0.2s ease;
        margin-left: -2px;
    }

    a:hover .anchor-underline {
        width: 100%;
        left: 0;
    }
</style>
