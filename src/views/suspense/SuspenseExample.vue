<template>
  <div class="">
    <h1>Suspense</h1>
    <div class="text-danger" v-if="errorMsg">{{ errorMsg }}</div>
    <Suspense v-else>
      <template #default>
        <Users />
      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

<script>
import Users from "./Users.vue";
import { ref } from "@vue/reactivity";
import {onErrorCaptured} from "@vue/runtime-core";

export default {
  components: {
    Users
  },
  setup() {
    let errorMsg = ref(null);

    onErrorCaptured(() => {
      errorMsg.value = `Oups , une erreur est survenue lors de la recuperation des données...`;
    });
    return{
      errorMsg
    };
  }
}
</script>

<style>
  .text-danger{
    color: red;
  }
</style>