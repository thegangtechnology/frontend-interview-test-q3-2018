import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

Vue.config.productionTip = false;

import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy);

import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faMinusCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);
library.add(faMinusCircle);
library.add(faPlusCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");