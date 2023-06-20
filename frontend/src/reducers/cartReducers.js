import { CART_ADD_ITEM } from '../constants/cartConstants'



export const cartReducer = (state={cartItems: []}, actions) => {
    switch (actions.type) {
        case CART_ADD_ITEM:
            const item = actions.payload
            const existItem = state.cartItems.find(x => x.pruduct === item.product )

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        default:
            return state
    }
}