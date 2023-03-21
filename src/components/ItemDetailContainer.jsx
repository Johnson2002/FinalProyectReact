import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    
    const  pcCollection = collection(db, "pcGamers");

    getDoc(pcCollection).then((snapshot) => {
      const computers = snapshot.doc.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(computers);

    });
  
  }, []);

  return (
    <>
    {Loading ? <Loading /> : <ItemDetail data={data}/>} 
    </>
  )
}

export default ItemDetailContainer