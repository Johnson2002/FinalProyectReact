import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const Default = {
        title: "Producto no encontrado/inexistente",
        description: "El producto que desea econtrar, no se encuentra registrado o declarado",
        price: "0",
        stock: 0
    }

    const [product, setProduct] = useState(Default);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [id]);

    const getDatos = async () => {
        return new Promise((resolve, reject) => {
            try{
                const dataBase = getFirestore();
                const Item = doc(dataBase, "Computadoras", id);
                getDoc(Item).then((snapshot) => {
                    snapshot.exists() ? resolve({id: snapshot.id, ...snapshot.data() }) : reject(new Error("El producto no existe")); 
                });
            } catch(e) {
                reject(new Error("Ocurrio un error con la base de datos de FIREBASE"));
            }
        });
    }

    const fetchData = async () => {
        setLoading(true);
        try{
            const productsFetched = await getDatos();
            productsFetched !== undefined && setProduct(productsFetched);
        } catch(e) {
            console.error(e);
        }
        setLoading(false);
    }

  return (
    <>
    {Loading ? <Loading /> : <ItemDetail product={product}/>} 
    </>
  )
}

export default ItemDetailContainer