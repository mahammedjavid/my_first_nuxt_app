<template>
    <div>
        <p>Enter article ID</p>
        <input type="text" v-model="articleID" />
        <nuxt-link :to="'/articles/' + articleID"><button>go to this article</button></nuxt-link>
        <nuxt-child></nuxt-child>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                articleID : ''
            }
        }
    }
</script>