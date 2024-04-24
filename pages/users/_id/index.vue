<template>
    <div>
        Single user comp and id is  : {{ $route.params.id }}
        <nuxt-link to="/users"><button>Back user</button></nuxt-link>
    </div>
</template>
<script>
    export default{
        validate(data){
            console.log(data)
            return true
        },
        layout : 'users'
    }
</script>