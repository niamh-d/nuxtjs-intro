<script setup>
const { sayHello } = useUtils();
const { $greet } = useNuxtApp();

$greet("Hello from index");
sayHello();
</script>

<template>
  <div class="Main"></div>
</template>
