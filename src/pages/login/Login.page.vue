<script setup lang="ts">
import { ref, watch } from "vue";
import { useAuthMutation } from "../../api/mutations";
import useAuthStore from "../../store/auth.store";
import router from "../../router";
import { routesList } from "../../constants";
import { setTokenSessionStorage } from "../../services";

type FormProps = {
  userName: string;
  password: string;
};

const formValues = ref<FormProps>({
  password: "",
  userName: "",
});
const { data, error, mutate } = useAuthMutation();
const { commit } = useAuthStore;

const handleSubmit = () => {
  mutate({
    password: formValues.value.password,
    username: formValues.value.userName,
  });
};

watch(data, (val, old) => {
  console.log("data", { val, old });
  if (val) {
    commit("setData", {
      token: val.access_token,
      tokenId: val.id_token,
    });

    setTokenSessionStorage(val.access_token);
    router.push({ path: routesList.HOME })
  }
});

watch(error, (val, old) => {
  console.log("error", { val, old });
});
</script>

<template>
  <div class="body">
    <div class="Header">
      <div class="logo">
        <img
          src="https://d2ra1qv4p9we6t.cloudfront.net/uploads/b45a8fe4-7369-46c1-937f-40e77314dade/original/invex-logo.svg"
          alt="Logo INVEX"
        />
      </div>
    </div>
    <div class="Body">
      <div class="container-img">
        <h2>Bienvenido a INVEX</h2>
      </div>
      <div class="container-form">
        <div class="alert-message hide" id="alertMessage">
          <span
            ><i class="bi bi-x-circle-fill"></i>
            <span id="textAlerMessage"></span
          ></span>
          <button id="btnCloseAlert">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <form>
          <h3>Inicia sesión</h3>
          <div class="form__group field">
            <input
              v-model="formValues.userName"
              type="text"
              class="form__field"
              placeholder="Usuario o correo electrónico *"
              name="username"
              id="username"
            />
            <label for="name" class="form__label"
              >Usuario o correo electrónico *</label
            >
          </div>
          <div class="form__group field">
            <input
              v-model="formValues.password"
              type="password"
              class="form__field"
              placeholder="Contraseña *"
              name="password"
              id="password"
            />
            <label for="name" class="form__label">Contraseña *</label>
            <i class="bi bi-eye-slash" id="togglePassword"></i>
          </div>
          <button type="button" class="button-form" v-on:click="handleSubmit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

:root {
  --color-red: rgba(164, 29, 54, 1);
  --color-red-shadow-20: #83172b;
  --color-red-shadow-30: #731426;
  --color-text: rgba(34, 34, 34, 1);
  --border-radius-input: 3px;
}

h1,
h2,
h3,
h4,
p,
span {
  color: var(--color-text);
}

button {
  outline: 0;
  border: 0;
}

.Header {
  background-color: var(--color-red);
  padding: 16px;
}

.Header .logo {
  width: 120px;
}

.Header .logo img {
  width: 100%;
}

.Body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
}

.Body .container-img {
  background-image: url("https://d2ra1qv4p9we6t.cloudfront.net/uploads/4488570e-795a-412f-b96b-b6cc702fcb75/original/Imagen_sintexto_1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
}

.Body .container-img h2 {
  color: #fff;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.6);
  font-size: 2.8rem;
  text-align: center;
}

.Body .container-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
}

.Body .container-form form {
  width: 520px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 60px;
}

.Body .container-form form h3 {
  font-size: 1.5rem;
  font-weight: 500;
}

/* Alert Message */
.alert-message {
  background-color: #fcd9e0;
  color: #ed002f;
  width: 100%;
  padding: 12px 14px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.alert-message.hide {
  display: none !important;
}

.alert-message span {
  color: #ed002f;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.alert-message i {
  display: grid;
  place-content: center;
}

.alert-message span i {
  font-size: 16px;
}

.alert-message button {
  display: grid;
  place-content: center;
  font-size: 28px !important;
  background-color: transparent;
  color: #ed002f;
  cursor: pointer;
}

/* End Alert Message */

.button-form {
  background-color: var(--color-red);
  width: 100%;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  letter-spacing: 0.3px;
  border-radius: var(--border-radius-input);
  transition: all 0.25s ease-in-out;
}

.button-form:hover {
  background-color: var(--color-red-shadow-20);
}

.form__group {
  position: relative;
  width: 100%;
  padding: 2px 0;
  border: 1px solid #9b9b9b6c;
  border-bottom: 2px solid #9b9b9b;
  border-radius: var(--border-radius-input);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
}

.form__group i {
  font-size: 18px;
  cursor: pointer;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 0.799rem;
  color: var(--color-text);
  padding: 16px;
  padding-bottom: 5px;
  background: transparent;
  transition: border-color 0.2s;
  font-weight: 400;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 0.899rem;
  cursor: text;
  top: 12px;
  left: 12px;
}

.form__label {
  position: absolute;
  top: 3px;
  left: 12px;
  display: block;
  transition: 0.2s;
  color: #9b9b9b;
  font-size: 0.7rem;
  z-index: -2;
}

.form__field:focus {
  border-image: linear-gradient(to right, #9b9b9b, #9b9b9b);
  border-image-slice: 1;
}

.form__field:focus ~ .form__label {
  position: absolute;
  top: 3px;
  display: block;
  transition: 0.2s;
  color: var(--color-text);
  font-weight: 400;
  font-size: 0.7rem;
}

.form__field:required,
.form__field:invalid {
  box-shadow: none;
}

@media screen and (max-width: 990px) {
  .Body {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
  }

  .Body .container-img {
    display: none;
  }

  .Body .container-form {
    padding: 80px 20px;
  }

  .Body .container-form form {
    width: 100%;
  }
}

@media screen and (max-width: 648px) {
  .Body .container-form form {
    margin-top: 20px;
  }

  .Body .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
  }
}
</style>
