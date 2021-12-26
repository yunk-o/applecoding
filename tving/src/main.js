import { createApp } from 'vue'

import { router } from './router/router'; // 라우터 추가하고 

import App from './App.vue'

// Create Vue Instance
const app = createApp(App);

app.use(router); // 사용 설정 하기

app.mount('#app')

window.Kakao.init("351d2490be68e1d133416c1efda79d40")