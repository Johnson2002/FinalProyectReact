import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge, Divider } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { Utils } from "../context/UtilsContext";
import image from "../assets/pcGamer.png";

const ItemDetail = ({ data }) => {
    console.log(data)
    const { id, marca, descripcion, precio, stock } = data;
    
    const { formatPrice } = useContext(Utils);
    return (
        <>
            <Card direction={{ base: "row", sm: "nowrap" }}
                overflow="hidden"
                variant="outline"
                className="itemDetailProduct"
                bg={"white"}
                border={"solid"}
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "500px" }}
                    src={image}
                    alt={marca}
                    className="ImgDetail"
                />

                <Stack>
                    <CardBody className="cardBody">
                        <Heading size={"3xl"} className="productTitle">
                            {marca}
                        </Heading>
                        <Badge colorScheme={"black"} variant="subtle">
                            <Text color={"black"} fontFamily="monospace" fontSize={"3xl"}>
                                $ {formatPrice(precio)}
                            </Text>
                        </Badge>
                    </CardBody>
                    <CardFooter>
                        <ItemCount
                            stockDisponible = {stock}
                            id = {id}
                            marca = {marca}
                            precioArs ={precio}
                            image = {image}
                            descripcion = {descripcion}
                        />
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default ItemDetail;