<template>
    <div>
        <a-layout space="10">
            <a-layout-item>
                <div class="item">One</div>
            </a-layout-item>
            <a-layout-item>
                <div class="item">Tow</div>
            </a-layout-item>
        </a-layout>
        <hr />
        <a-layout space="16" >
            <a-layout-item>
                <div class="item">One</div>
            </a-layout-item>
            <a-layout-item>
                <div class="item">Tow</div>
            </a-layout-item>
            <a-layout-item>
                <div class="item">Three</div>
            </a-layout-item>
        </a-layout>
    </div>
</template>
<style>
.item {
    background-color: skyblue;
    color:white;
    text-align: center;
}
</style>
<script>
import Layout from "../../lib/layout/index"
import LayoutItem from "../../lib/layout/item"
export default {
    components: {
        [Layout.name]: Layout,
        [LayoutItem.name]: LayoutItem
    }
}
</script>
