import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import PerfectScrollbar from '@/plugins/perfect-scrollbar'

import '@/scss/style.scss'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(PerfectScrollbar)
app.use(createPinia())

app.mount('#app')
