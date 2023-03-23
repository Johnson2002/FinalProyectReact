import { Box, Flex, Button, Input, Spacer, Badge, HStack } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Utils } from "../context/UtilsContext";

export const ItemCount = ({stockDisponible, id, priceArs, title}) => {
    const [count, setCount] = useState(0);
    const [stock, setStock] =useState(stockDisponible);
    const [restart, setRestart] = useState(false);
    const [counting, setCounting] = useState(
        stockDisponible > 0 ? false : true
    );

    const {cart, setCart} = useContext(CartContext);
    const {showToast} = useContext(Utils);

    const setCantidad = () => {
        let newCantidad = count + 1;

        if(newCantidad == stockDisponible){
            setCounting(true);
            showToast("Llegaste al tope de stock a seleccionar!", "Peligro");
        }
        setCount(newCantidad);
        setStock(stock - 1);
        setRestart(false);
    }

    const restCantidad = () => {
        let newCantidad = count - 1;

        if(newCantidad == 0 ) {setRestart(true)}

        setCantidad(newCantidad);
        setStock(stock + 1);
        setCounting(false);
    };

    const reestablecer = () => {
        setCantidad(0);
        setStock(stock);
        setCounting(stock ? false : true);
        setRestart(true);
    }
    const sendToCart = () => {
        if(!count)
            return showToast("Seleccione la cantidad.", "Error")
        reestablecer(stock - count);
    }
    return (
        <>
        <HStack>
        <Box>
          <Box p={2}>Cantidad</Box>
          <Flex>
            <Button onClick={restCantidad} isDisabled={counting}>
              -
            </Button>
            <Spacer />
            <Input value={count} readOnly />
            <Spacer />
            <Button onClick={setCantidad} isDisabled={restart}>
              +
            </Button>
          </Flex>
          <Box p={2}>
            Stock: <Badge bg={"green.300"}>{stock}</Badge>
          </Box>
        </Box>
        <Button
          colorScheme="whatsapp"
          variant="outline"
          onClick={sendToCart}
          fontSize={20}
          height={50}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <Box m={2}>Agregar</Box>
        </Button>
      </HStack>
        </>
    );
}


export default ItemCount;