<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { Vue3TabSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  Vue3TabSample,
  // }
});
</script>

<template>
  <div id="app" style="width: 100%; box-sizing: border-box;">
    <Tab>
      <TabItem title="Tab1" >
        This is Tab1
      </TabItem> 
      <TabItem title="Tab2" active>
        <p v-for="i in 30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum dolorum voluptate deserunt perspiciatis modi incidunt magnam, sed explicabo amet consectetur, quisquam tempore libero enim maiores esse non necessitatibus aliquam.</p>
      </TabItem> 
    </Tab>
  </div>
</template>
