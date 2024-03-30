import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItams, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItams[itemId]) {
            setCartItems((prev) => ({
                ...prev, [itemId]: 1
            }))
        }
        else {
            setCartItems((prev) => ({
                ...prev, [itemId]: prev[itemId] + 1
            }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] - 1
        }))

    }

    useEffect(() => {
        console.log(cartItams)
    }, [cartItams])



    const contextValue = {
        food_list,
        cartItams,
        setCartItems,
        addToCart,
        removeFromCart


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;