    const state = {
        category:[
            {name:'Cat', imgSrc:'https://i.pinimg.com/originals/7d/1d/81/7d1d8104d1460bb020561f06a6522bad.png'},
            {name:'Dog', imgSrc:'https://www.mcicon.com/wp-content/uploads/2021/06/Dog-37.jpg'},
            {name:'Fish', imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/1024px-Fish_icon_%28The_Noun_Project_27052%29.svg.png'},
            {name:'Cow', imgSrc:'https://i.pinimg.com/736x/2b/1e/3b/2b1e3be0893520d45d64a14d520c0868.jpg'},
            {name:'Lion', imgSrc:'https://cdn5.vectorstock.com/i/thumb-large/11/34/wild-lion-icon-logo-template-vector-23921134.jpg'}
        ]
    }
    
    const getters = {
        getAllAnimals(state){
            return state.category;
        }
    }
    const mutations = {
        ADD_ANIMAL(state, payload){
            state.category.push(payload);
        },
        DELETE_ANIMAL(state, payload){
            state.category.splice(payload,1);
        }
    }
    
    
    const actions = {
        addAnimal(context, payload){
            context.commit('ADD_ANIMAL', payload);
        },
        deleteAnimal(context,payload){
            context.commit('DELETE_ANIMAL',payload)
        }
    }
    
    
    export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
    }
    