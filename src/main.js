import { unregister } from './registerServiceWorker';
import Vue from "vue";
import App from "@/App2.vue";
import router from "./router";

let app;

window.renderRestaurant = (containerId, history) => {
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount("#" + containerId);
  unregister();
};

window.unmountRestaurant = containerId => {
  // ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
