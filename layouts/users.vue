<template>
    <div>
        <TheHeader></TheHeader>
        <header>Users Section</header>
      <nuxt />
    </div>
  </template>
  <script>
    import TheHeader from '../components/TheHeader.vue';

export default{
  components : {
    TheHeader 
  }
}
</script>