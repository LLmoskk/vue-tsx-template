import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
  setup(props) {
    const count = ref(0);

    return () => (
      <>
        <h1>{props.msg}</h1>
        <div class="card">
          <button type="button" onClick={() => count.value++}>
            count is {count.value}
          </button>
          <p>
            Install
            <a href="https://github.com/vuejs/language-tools" target="_blank"> Volar </a>
            in your IDE for a better DX
          </p>
          <p class="read-the-docs" style={{ color: "#888" }}>
            Click on the Vite and Vue logos to learn more
          </p>
        </div>
      </>
    );
  },
});
