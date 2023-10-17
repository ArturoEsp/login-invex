<script lang="ts" setup>
import CardButton from "../../components/CardButton.vue";
import CardNew from "../../components/CardNew/CardNew.vue";
import NavBar from "../../components/NavBar.vue";
import useAuthStore from "../../store/auth.store";

const { state } = useAuthStore;

</script>

<template>
  <div class="MainApp">
    <NavBar />
    <div class="Wrapper">
      <div class="MainApp__Header">
        <h2>Edgar, aquí tienes el resumen de tus productos:</h2>
      </div>
      <div class="MainApp__Content">
        <div class="MainApp__Content-Cards">
          <CardButton
            title="Cuenta de efectivo"
            button-text="Ver detalle"
            button-link="https://invex.modyo.be/invex-digital"
          >
          </CardButton>
          <CardButton
            title="Cuenta de inversión"
            button-text="Ver detalle"
            button-link="https://invex.modyo.be/fiduciario-pruebas-fiduciario-develop-portal-fiduciario"
          >
          </CardButton>
          <CardButton title="Estatus de mis solicitudes">
            {{ state.token }}
          </CardButton>
        </div>
        <div class="MainApp__Content-News">
          <h2>Te podría interesar:</h2>
          <CardNew
            :steps="[0, 1, 2]"
            img="https://d2ra1qv4p9we6t.cloudfront.net/uploads/556fff44-0e3c-465a-bac2-83d8596e2ebc/original/card-news-login.png"
            title="Plan Personal de retiro"
            description="Inversión mínima alrededor de $50 MXN"
            paragraph="Crea estrategias de inversión personalizadas con el balance perfecto entre tus objetivos y tus preferencias de riesgo y manéjalas desde INVEX Trade."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.MainApp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.MainApp .Wrapper {
  width: 1028px;
  max-width: 1028px;
  padding: 2rem 4rem;
}

.MainApp .MainApp__Header {
  padding: 28px 0;
}

.MainApp .MainApp__Header h2 {
  font-size: 1.3344rem;
}

.MainApp .MainApp__Content {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 18px;
}

.MainApp .MainApp__Content .MainApp__Content-Cards,
.MainApp .MainApp__Content .MainApp__Content-News {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.MainApp .MainApp__Content .MainApp__Content-News h2 {
  font-size: 1.3344rem;
}

@media screen and (max-width: 1024px) {
  .MainApp .MainApp__Content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .MainApp .Wrapper {
    max-width: 800px;
    width: 100%;
    padding: 2rem 2rem;
  }
}

@media screen and (max-width: 768px) {
  .MainApp .MainApp__Content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .MainApp .Wrapper {
    max-width: 800px;
    width: 100%;
    padding: 2rem 1rem;
  }
}
</style>

<style scoped lang="css"></style>
