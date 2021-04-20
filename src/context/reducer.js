export const initialState = {
    basket: [],
}
//reducer helps to push the data from component to data layer
export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASSKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex(obj => 
                 obj.id === action.item.id
            ); 
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index,1);
                console.log(newBasket);
            } else {
                console.warn("item not found");
            }
            return {
                ...state,
                basket: newBasket
            }
            // if(index>=0){
            //     return {
            //         ...state,
            //         basket: state.basket.splice(index,1),
            //     };

            // }
            // else {
            //     console.warn("item not found");
            //     return state;
            // }
            
        default:
            return state;
    }
};