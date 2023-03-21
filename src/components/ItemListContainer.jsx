import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
export const ItemListContainer = () => {
  const [Loading, setLoading] = useState(true);

  const [pc, setPc] = useState([]);
  const {categoria} = useParams();
  useEffect(() => {
    const dataBase = getFirestore();
    const computerCollection = collection(dataBase, "pc");
    getDocs(computerCollection).then((querySnapshot) => {
      const computers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }) )
      setPc(computers);
    })
  }, []);

  const filter = pc.filter((pc) => pc.categoria === categoria);

  return (
    <>
    <div className="itemListContainer">
      {categoria ? <ItemList pc={filter}/> : <ItemList pc={pc}/>}
    </div>
    </>
  )
}

export default ItemListContainer;