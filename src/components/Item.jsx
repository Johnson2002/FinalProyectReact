import { Card, CardBody, CardFooter, Stack, Heading, Divider, Image, Text, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Utils } from "../context/UtilsContext";
import img from "../assets/pcGamer.png";

const Item = ({id, title, priceArs}) => {
    const { formatPrice } = useContext(Utils);
  return (
    <>
        <Card bg={"black.400"}>
            <CardBody p={4} marginTop="10px">
                <Image src={img} alt={title}/>
                <Stack>
                    <Heading size={"md"}>{title}</Heading>
                    <Text color={"white"} fontFamily="monospace">
                        ${formatPrice(priceArs)}
                    </Text>
                </Stack>
            </CardBody>
            <Divider color={"gray.300"}/>
            <CardFooter p={3}>
                <Link to={`/item/${id}`}>
                    <Button colorScheme={"red"}>Detalles</Button>
                </Link>
            </CardFooter>
        </Card>
    </>
  )
}

export default Item