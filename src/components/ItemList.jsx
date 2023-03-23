import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ pc }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
      {pc?.map((compus) => (
      <Item
        key={compus.id}
        id={compus.id}
        name={compus.nameProduct}
        descripcion={compus.descripcion}
        priceArs={compus.priceArs}
        stock={compus.stock}
      />
    ))}
  </Container>
    </>
  );
};

export default ItemList;