<template>
    <div class="tabContainer relative flex flex-col tab w-full h-full rounded-lg">
        <div class="tab-header px-2 relative w-full flex flex-row overflow-hidden bg-white border-b border-b-gray-300" ref="tabHeader">
            <span v-for="(item, index) in items"
                  :ref="item.ref"
                  v-wave
                  :data-ref="item.ref"
                  @click="clickOnItem($event, item)"
                  :class="{'text-chatListActiveBg': item.active, 'active-item-hover-bg': item.active}"
                  class="relative text-gray-500 tab-header-item shrink-0 cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
                {{ item.title }}
            </span>
            <div ref="line" class="line absolute bottom-0 left-0 h-1 rounded-lg w-0 bg-chatListActiveBg"></div>
        </div>
        <div ref="tabsContainer" class="flex-1 snap-mandatory snap-x relative tabs-container flex flex-row overflow-hidden h-full w-full">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tab",
    data() {
        return {
            items: [],
            counter: 0
        }
    },
    props: {
        lazyLoad: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        addItem(tab) {
            let item = {};
            item['tab'] = tab;
            item.title = tab.title;
            item.active = tab.active;
            item.index = this.counter++;
            item.ref = "tabHeaderItem"+item.index;
            this.items.push(item);
        },
        moveLineToElement( elm ) {
            let  left = elm.offsetLeft;
            let width = elm.offsetWidth;
            this.$refs.line.style.left = (left + ((width/2)/2)) + "px";
            this.$refs.line.style.width = (width - (width/2)) + "px";
        },
        clickOnItem(e, item) {
            this.$refs.tabsContainer.scrollLeft = item.tab.$refs.tabItem.offsetLeft;

            this.items.map((item)=>{
                item.active = false;
                item.tab.show = item.active;
                return item;
            });
            item.active = true;
            item.tab.show = item.active;

            this.moveLineToElement( e.target );

            // this.$refs.tabHeader.scrollLeft = (e.target.offsetLeft - this.$refs.tabHeader.offsetLeft)
            //     - (this.$refs.tabHeader.offsetWidth / 2)
            //     + (e.target.offsetWidth / 2);
            this.$refs.tabHeader.scrollLeft = (e.target.offsetLeft) - (this.$refs.tabHeader.offsetWidth/2) + (e.target.offsetWidth / 2);
        },
        init() {

            this.$nextTick(function () {

                this.items.map((item)=>{
                    if (item.active) {
                        this.$refs.tabsContainer.scrollLeft = item.tab.$refs.tabItem.offsetLeft;
                        item.tab.show = item.active;
                        this.moveLineToElement( this.$refs[item.ref][0] );
                    }
                });
            })
        }
    },
    mounted() {
        let scrollStep = 80;
        this.$refs.tabHeader.addEventListener('mousewheel', (event) => {
            if (event.deltaY < 0) {
                this.$refs.tabHeader.scrollLeft -=  scrollStep;
            }
            else if (event.deltaY > 0) {
                this.$refs.tabHeader.scrollLeft += scrollStep;
            }
        });
        this.init();
    }
}
</script>

<style >
@import './style.css';

.tabs-container,
.tab-header {
    scroll-behavior: smooth;
}
.tab-header-item{
    transition: all .3s;
}
.line{
    transition: all .3s;
}

.active-item-hover-bg:hover {
    background: rgba(51, 144, 236, 0.1);
}

</style>
