import React from 'react'
import { Box, Image, Center } from '@chakra-ui/react'
import image from "../assets/gr10.png";
export const Bienvenido = () => {
  const welcome = "Bienvenido Usuario a nuestra tienda online de Computadoras!"
  return (
    <>
      <Box className="welcome">
        {welcome}
      </Box>
      <Center>
        <Box className='containerImg' boxSize={"50%"}>
          <Image src="https://cdn.pixabay.com/photo/2016/11/21/12/16/computer-1844996_1280.jpg"
            alt="pc-gaming"
            borderRadius={"15px"}
          />
        </Box>
      </Center>
    </>
  )
}

export default Bienvenido;
