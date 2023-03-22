import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    const[loading, setLoading]= useState(true)
    const {id}= useParams()
  useEffect(() => {
    const db = getFirestore();
    const  pcCollection = collection(db, "pcGamers");
    const docReference =  doc(pcCollection, id)
    getDoc(docReference)
    .then((res)=>{
        setData({id:res.id, ...res.data()})
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [id]);


  

  return (
    <>
    {loading ? <Loading /> : <ItemDetail data={data}/>} 
    </>
  )
}

export default ItemDetailContainer