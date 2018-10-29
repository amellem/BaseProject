<template>
  <section>
    <h1>
      Register
    </h1>
    <fieldset>
      <input type="email" name="email" placeholder="Email" v-model="email"/><br>
      <input type="password" name="password" placeholder="Password" v-model="password"/><br>
      <button @click="register">Register</button>
    </fieldset>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }, 
  watch: {
    email(value){
      console.log(`Email has changed to ${value}`)
    }
  },
  methods: {
    async register(){
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      this.email = '';
      this.password = '';
      alert(`${response.data.message} has been registered!`)
    }
  }
}
</script>

<style scoped>
  fieldset{
    border: none;
    text-align: center;
  }
  fieldset input{
    margin: 1em;
    padding: 1.5em;
  }
  fieldset button{
    background-color: coral;
    border:none;
    color:antiquewhite;
    text-align: center;
    padding: 1.5em;
    width: 15em;
    font-weight: bolder;
    cursor: pointer;
  }
  fieldset button:hover{
    background-color: antiquewhite;
    color:coral;
  }
</style>
