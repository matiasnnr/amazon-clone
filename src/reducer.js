export const initialState = {
    basket: [],
    user: null
  }
  
  // Selector
  export const getBasketTotal = (basket) => 
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
    basket?.reduce((amount, item) => item.price + amount, 0)
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default reducer