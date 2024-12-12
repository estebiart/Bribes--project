import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/";
import { registerPlugins } from './plugins/index'
import vuetify from './plugins/vuetify'

const app = createApp(App)

// Registrar tus plugins y configuraciones personalizadas aquí
registerPlugins(app)

// Usar Vuetify como un plugin
app.use(vuetify)

// Usar el enrutador
app.use(router)

// Montar la aplicación en el punto de entrada '#app'
app.mount('#app')
