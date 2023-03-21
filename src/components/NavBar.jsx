import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Button} from "@chakra-ui/react";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <>
      <div className='navbar'>
          <Box pt="3" pl="1">
            <Link to={"/"} className="Title">
              IT - SHOP
            </Link>
          </Box>
          <Box p="5" w="250px">
            <Link to={"/catalogo"}>
              <h2 className="catalogo">Catalogo</h2>
            </Link>
          </Box>
          <CartWidget />
      </div>
          
    </>
  )
}

export default NavBar