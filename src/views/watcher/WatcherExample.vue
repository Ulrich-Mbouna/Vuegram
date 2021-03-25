<template>
  <div>
    <h2>Watchers in Vue 3</h2>
    <div class="">
        Name :<input type="text" v-model="name" />
    <p>{{ name }}</p>
    </div>
    <div class="">
        Email :<input type="text" v-model="email" />
    <p>{{ email}}</p>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import { watch, watchEffect } from "vue";
    export default {
  setup() {
    // const search = ref('tezet');
    const name = ref(null);
    const email = ref(null);

    watchEffect(() => {
        console.log("Nom:",name.value);
        console.log("Email:",email.value);
    })

    // watch([name,email],()=> {
        
    //     console.log('name',name.value);
    //     console.log('email',email.value);
    // });

    return { 
        name,email
    }
  }
  }
</script>
<style lang="">
    
</style>