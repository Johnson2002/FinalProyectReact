import React from 'react'
import { Box } from '@chakra-ui/react'
export const Bienvenido = () => {
    const welcome = "Bienvenido Usuario a nuestra tienda online de Computadoras!"
  return (
    <div>
        <Box className="welcome">
            {welcome}
        </Box>
    </div>
  )
}

export default Bienvenido;
