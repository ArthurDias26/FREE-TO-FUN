import usePersistenceState from "../utilis/usePersistenceState";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const[user, setUser] = useState()
    const [cart, setCart] = useState('[]')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const userPersistence = localStorage.getItem('user')

        if(userPersistence){
            setUser(userPersistence)
        }

        const cartPersistence = localStorage.getItem('cart')

        if(cartPersistence){
            setCart(cartPersistence)
        }

        setLoading(false)
    }, [])

    const Login = (name, email) => {
        if (name, email) {
            const LoggedUser = {
                name,
                email
            }


            setUser(JSON.stringify(LoggedUser))
            localStorage.setItem('user', JSON.stringify(LoggedUser))
            navigate('/')
            return user
        }

    }

    const Logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        setCart('[]')
        localStorage.setItem('cart', JSON.stringify([]))
    }



    const CheckCartItems = (id, cart) => {
        const checkedCart = cart.filter((itemCart) => {
            if(itemCart.id === id){
                return null
            }
            return itemCart
        })

        return checkedCart

    }

    const AddCart = (item) => {
        if (item && !!user) {   
            const newCart = CheckCartItems(item.id, [...JSON.parse(cart)])  
            newCart.push(item) 
            setCart(JSON.stringify(newCart))
            localStorage.setItem('cart', JSON.stringify(newCart))
        }

    }

    const RemoveItemCart = (itemId) => {
        if (itemId && !!user) {
            const newCart = CheckCartItems(itemId, [...JSON.parse(cart)])     
            setCart(JSON.stringify(newCart))
            localStorage.setItem('cart', JSON.stringify(newCart))
        }

    }

    const ClearCart = () => {
            setCart('[]')
            localStorage.setItem('cart', JSON.stringify([]))
    }

    return(
        <AuthContext.Provider value={{isLogged: !!user, user, Login, Logout, loading, cart, AddCart, RemoveItemCart, ClearCart}}>
            {children}
        </AuthContext.Provider>
    )
}