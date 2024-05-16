<template>
  <div>Login</div>
</template>

<script>

fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    expiresInMins: 60, // optional, defaults to 60
  })
})
.then(res => res.json())
.then(console.log);

export default {

  

}
</script>

<style>

</style>