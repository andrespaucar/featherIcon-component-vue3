
import {createApp} from 'vue';
const app = createApp({})

import FeatherIconComponent from "./components/featherIcon.vue";
app.component('feather-icon' , FeatherIconComponent)

app.mount("#app")
