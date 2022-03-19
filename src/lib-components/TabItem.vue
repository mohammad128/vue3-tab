<template>
    <div ref="tabItem" class="snap-center item-content min-w-full w-full h-full flex-grow w-full h-full left-0 right-0 bottom-0 overflow-y-auto ">
        <div class="w-full h-full overscroll-y-auto">
            <template v-if="$parent.lazyLoad">
                <slot v-if="show"/>
            </template>
            <template v-else>
                <slot/>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabItem",
    props: {
        title: String,
        active: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            show: false,
        }
    },
    mounted() {
        this.show = this.active;
        this.$parent.addItem( this );
    },
    watch: {
    }
}
</script>

<style scoped>
.itemContent{
    transition: all .3s;
}
</style>
