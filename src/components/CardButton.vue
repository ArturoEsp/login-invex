<script setup lang="ts">
 defineProps<{ title: string, buttonText?: string, buttonLink?: string }>()
</script>

<template>
  <div class="CardButton">
    <div class="CardButton__Header">
      <h3>{{title }}</h3>
      <a v-if="buttonText" :href="buttonLink">{{ buttonText }}</a>
    </div>
    <div class="CardButton__Content">
      <slot />
    </div>
    <div class="CardButton__Footer"></div>
  </div>
</template>

<style lang="css" scoped>
  .CardButton {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 8px;
    padding: 14px;
    width: 100%;
  }

  .CardButton .CardButton__Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
  }

  .CardButton .CardButton__Header h3 {
    font-size: 18px;
  }

  .CardButton .CardButton__Header a {
    background-color: var(--color-red);
    color: #fff;
    padding: 6px 18px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: all .25s ease-in-out;
    text-decoration: none;
  }

  .CardButton .CardButton__Header a:visited {
    text-decoration: none;
  }

  .CardButton .CardButton__Header a:hover {
    background-color: var(--color-red-shadow-30);
  }

  .CardButton .CardButton__Content {
    min-height: 50px;
    padding: 12px 0;
    word-break: break-all;
  }
</style>