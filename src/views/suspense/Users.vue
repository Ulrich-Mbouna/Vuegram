<template>
  <div>
    <h2>Users</h2>
    <User v-for="user in users" :key="user.id" :user="user"></User>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import { defineAsyncComponent } from 'vue';
const User = defineAsyncComponent(() => import(/*webpackChunkName: "user" */ './User'))

export default {
  components: {
    User
  },
  async setup() {
    let users = ref(null);
    
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      let data = await response.data;
      console.log(data);
      users.value = data;
        
        return{
            users
        }
}

}
</script>

<style>

</style>