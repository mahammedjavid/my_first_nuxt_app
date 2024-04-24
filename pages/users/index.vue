<template>
  <div>
    User comp
    <input type="text" v-model="userId" />
    <nuxt-link :to="'/users/' + userId"
      ><button>Go to single user compo</button> <br
    /></nuxt-link>
    <nuxt-link to="/"><button>Back home</button></nuxt-link>
    <ul>
      <li v-for="user of usersList" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: "",
      usersList: [],
    };
  },
  methods: {
    // getUserList(){
    //     setTimeout(() => {
    //         this.usersList = [{id : '1', name : 'Javid'},{id : '2', name : 'Mahammed'}]
    //     }, 2000);
    // }
  },
  created() {
    // this.getUserList() this will act as client side rendering

    // fetching from store
    this.usersList = this.$store.getters.getUsersList;
  },
  asyncData(context) {
    // !1st way to render from server
    // setTimeout(() => {
    //     callback(null ,{usersList : [{id : '1', name : 'Javid'},{id : '2', name : 'Mahammed'}]})
    // }, 2000);
    // !second way
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({usersList : [{id : '1', name : 'Javid'},{id : '2', name : 'Mahammed'}]})
    //     }, 1000);
    //     // reject(new Error())
    // }).then((data) =>{
    //     return data
    // }).catch((err)=>{
    //     context.error(err)
    // })
  }, //aysncData will add variable to component data
//   fetch(context, callback) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({
//           usersList: [
//             { id: "1", name: "Javid" },
//             { id: "2", name: "Mahammed" },
//           ],
//         });
//       }, 1000);
//       // reject(new Error())
//     })
//       .then((data) => {
//         console.log(data)
//         context.store.commit('setUserListToState',data.usersList)
//       })
//       .catch((err) => {
//         console.log(err)
//         context.error(err);
//       });
//   },
  layout: "users",
};
</script>
