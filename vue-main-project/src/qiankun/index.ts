import { registerMicroApps, addGlobalUncaughtErrorHandler,start } from 'qiankun';

registerMicroApps([
  {
    name: 'react-sub-project', // app name registered
    entry: 'http://localhost:8001',
    container: '#micro',
    activeRule: '/react-sub-project',
  },
  {
    name: 'vue-sub-project', // app name registered
    entry: 'http://localhost:8002',
    container: '#micro',
    activeRule: '/vue-sub-project',
  }
]);

addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
});

// start();
export default start
