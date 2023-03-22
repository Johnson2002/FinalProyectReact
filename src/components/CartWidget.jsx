import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Box, Button, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="cartWidgetContainer">
        <Box p="6">
          <Box pl="4">
            <Link to={"/cart"}>
              <Button
                colorScheme="green"
                variant="ghost"
                borderWidth="2px"
                borderRadius="lg"
                borderColor="white"
              >
                <i className="fa-sharp fa-solid fa-cart-shopping paddingIcons iconoAgrandado"></i>
                <Badge p="1" ml="1" colorScheme="twitter">
                  {cart.length}
                </Badge>
              </Button>
            </Link>
          </Box>
        </Box>
      </div>

    </>
  );
};

export default CartWidget;
