import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import { Heading, Text } from "@chakra-ui/react";
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
            <Heading className="Heading">
                <Text className="title">
                    Introduce tus datos para concretar la compra
                </Text>
            </Heading>
            <div className="Container">
                <form className="FormContainer" onSubmit={handleSubmit}>
                    <input
                        className="FormContainer"
                        type="text"
                        placeholder="Nombre y apellido"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        className="FormContainer"
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setGamil(e.target.value)}
                    />
                    <div className="Button">
                        <button type="submit">Enviar</button>
                    </div>
                        <p>Orden Id: {idOrder}</p>
                </form>
            </div>
        </>
    )
}

export default Order