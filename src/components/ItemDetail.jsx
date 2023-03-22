import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge } from "@chakra-ui/react";
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
            <Card direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                className="itemDetailProduct"
                bg={"black.200"}
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "500px" }}
                    src={image}
                    alt={marca}
                    className="ImgDetail"
                />

                <Stack>
                    <CardBody>
                        <Heading size={"2xl"} className="productTitle">
                            {marca}
                        </Heading>
                        <Text py={"10"}>{descripcion}</Text>
                        <Badge colorScheme={"gray"} variant="subtle">
                            <Text color={"white"} fontFamily="monospace" fontSize={"3xl"}>
                                $ {formatPrice(precio)}
                            </Text>
                        </Badge>
                    </CardBody>
                    <CardFooter>
                        <ItemCount
                            stockDisponible = {stock}
                            id = {id}
                            marca = {marca}
                            priceArs ={precio}
                            image = {image}
                        />
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default ItemDetail;