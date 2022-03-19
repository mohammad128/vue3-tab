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
  <div id="app" style="width: 500px; box-sizing: border-box;">
    <Tab>
      <TabItem v-for="n in 9" :title="`Tab${n}`" >
        <p v-for="i in 3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum dolorum voluptate deserunt perspiciatis modi incidunt magnam, sed explicabo amet consectetur, quisquam tempore libero enim maiores esse non necessitatibus aliquam.</p>
      </TabItem> 
    </Tab>
  </div>
</template>
