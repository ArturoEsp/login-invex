<script setup lang="ts">
import Img from "../../assets/card-img.png";
defineProps<{
  img: string;
  description: string;
  title: string;
  paragraph: string;
  steps?: number[];
}>();
</script>

<template>
  <div class="CardNew">
    <div class="CardNew__Image">
      <img :src="img" alt="Card New" />
    </div>
    <div class="CardNew__Container">
      <span>{{ description }}</span>
      <h3>{{ title }}</h3>
      <p>{{ paragraph }}</p>
      <div class="CardNew__Buttons">
        <!-- <button class="secondary-button">Conoce más</button>
        <button class="primary-button">Contratar</button> -->
      </div>
      <div v-if="steps" class="CardNew__Steps">
        <div v-for=" in steps" class="step">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.CardNew {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.CardNew .CardNew__Image {
  width: 100%;
  height: 100%;
  max-height: 200px;
  overflow: hidden;
}

.CardNew .CardNew__Image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.CardNew .CardNew__Container {
  padding: 16px 26px;
}

.CardNew .CardNew__Container span {
  font-size: 0.88rem;
  opacity: 0.8;
  display: inline-block;
  padding: 12px 0;
}

.CardNew .CardNew__Container h3 {
  font-size: 1.4rem;
  margin-bottom: 12px;
}

.CardNew .CardNew__Container p {
  line-height: 1.5;
  font-size: 0.899rem;
}

.CardNew .CardNew__Container .CardNew__Buttons {
  margin: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
}

.CardNew .CardNew__Container .CardNew__Buttons button {
  background-color: var(--color-red);
  padding: 12px 18px;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid transparent;
  transition: all .25s ease-in-out;
}

.CardNew .CardNew__Container .CardNew__Buttons button.secondary-button {
  background-color: transparent;
  color: var(--color-red);
}

.CardNew .CardNew__Container .CardNew__Buttons button.primary-button:hover {
  background-color: var(--color-red-shadow-30);
}

.CardNew .CardNew__Container .CardNew__Buttons button.secondary-button:hover {
  border: 1px solid var(--color-red);
}

.CardNew .CardNew__Container .CardNew__Steps {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.CardNew .CardNew__Container .CardNew__Steps .step {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #565A5C;
}

.CardNew .CardNew__Container .CardNew__Steps .step:first-child {
  background-color: var(--color-red);
}

</style>
