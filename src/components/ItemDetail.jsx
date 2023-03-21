import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Badge } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { Utils } from "../context/UtilsContext";
import image from "../assets/pcGamer.png";

const ItemDetail = () => {
    const { id, title, descripton, priceArs, stock } = product;
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
                    alt={title}
                    className="ImgDetail"
                />

                <Stack>
                    <CardBody>
                        <Heading size={"2xl"} className="productTitle">
                            {title}
                        </Heading>
                        <Text py={"10"}>{descripton}</Text>
                        <Badge colorScheme={"gray"} variant="subtle">
                            <Text color={"white"} fontFamily="monospace" fontSize={"3xl"}>
                                $ {formatPrice(priceArs)}
                            </Text>
                        </Badge>
                    </CardBody>
                    <CardFooter>
                        <ItemCount
                            stock = {stock}
                            id = {id}
                            title = {title}
                            priceArs ={priceArs}
                            image = {image}
                        />
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}

export default ItemDetail;