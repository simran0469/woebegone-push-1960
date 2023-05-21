const initialState = {
    cart: []
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CART":

            const itemIndex = state.cart.findIndex((item) => item.id === payload.id)

            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1
            }
            else {
                const temp = { ...payload, quantity: 1 }
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }

        case "RMV_CART":
            const data = state.cart.filter((el) => el.id !== payload)
            return {
                ...state,
                cart: data
            }

        case "RMV_ONE":
            const itemIndex_dec = state.cart.findIndex((item) => item.id === payload.id)

            if (state.cart[itemIndex_dec].quantity >= 1) {
                const dltItem = state.cart[itemIndex_dec].quantity -= 1;
                console.log([...state.cart, dltItem])
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else if (state.cart[itemIndex_dec].quantity === 1) {
                const data = state.cart.filter((el) => el.id !== payload)
                return {
                    ...state,
                    cart: data
                }
            }

        default:
            return state;
    }
}