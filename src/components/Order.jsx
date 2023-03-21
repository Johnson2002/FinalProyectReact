import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
const Order = () => {
    const [idOrder, setOrder] = useState(null);
    const [nombre, setNombre] = useState("");
    const [gmail, setGamil] = useState("");
    const { cart } = useContext(CartContext);

    const dataBase = getFirestore();
    const orders = collection(dataBase, "Orden");

    const orden = {
        nombre,
        gmail,
        cart,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(orders, orden).then(({ id }) => finalizarOrden(id));
    };

    const finalizarOrden = (id) => {
        setOrder(id);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre y apellido"
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setGamil(e.target.value)}
                />
                <button type="submit">Enviar</button>
                <p>Orden Id {idOrder}</p>
            </form>
        </>
    )
}

export default Order