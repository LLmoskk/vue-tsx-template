import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import "./App.css";
import ViteLogo from "../public/vite.svg";
import VueLogo from "../public/vue.svg";

export default defineComponent({
  setup() {
    return () => (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={ViteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src={VueLogo} class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Vite + Vue + TSX" />
      </>
    );
  },
});
