<script setup lang="ts">
import { routesList } from '../constants';
import router from '../router';
import { removeTokenSession } from '../services';
import useAuthStore from "./../store/auth.store";

const { commit } = useAuthStore;

const logout = () => {
  commit('clean');
  router.push({ path: routesList.LOGIN })
  removeTokenSession();
};
</script>

<template>
  <div class="NavBar">
    <div class="NavBar__Icon">
      <img
        src="https://d2ra1qv4p9we6t.cloudfront.net/uploads/b45a8fe4-7369-46c1-937f-40e77314dade/original/invex-logo.svg"
        alt="Logo INVEX"
      />
    </div>
    <div class="NavBar__Profile">
      <div class="icons"></div>
      <div class="profile">
        <button v-on:click="logout">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.NavBar {
  background-color: var(--color-red);
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.NavBar .NavBar__Icon {
  width: 120px;
}

.NavBar .NavBar__Icon img {
  width: 100%;
}

.NavBar .NavBar__Profile .profile button {
  color: #fff;
  background-color: transparent;
  cursor: pointer;
}
</style>
