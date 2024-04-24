import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state : {
            usersList : []
        },
        mutations : {
            setUserListToState(state , payload){
                state.usersList = payload
            }
        },
        actions : {
            nuxtServerInit(context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({data : [{id : '1', name : 'Javid'},{id : '2', name : 'Mahammed'}]}) 
                    }, 3000);
                }).then((data) => {
                    context.commit('setUserListToState',data.data)
                })
            },
            getUserListFromAPI(context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({data : [{id : '1', name : 'Javid'},{id : '2', name : 'Mahammed'}]}) 
                    }, 0);
                }).then((data) => {
                    context.commit('setUserListToState',data.usersList)
                })
            }
        },
        getters : {
            getUsersList(state){
                return state.usersList
            }
        }
    })
}
export default createStore