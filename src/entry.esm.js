
// Import vue components
import * as components from '@/lib-components/index';
import '@/lib-components/style.css';
import VWave from 'v-wave'

// install function executed by Vue.use()
const install = function installVue3Tab(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
    app.use(VWave)
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
