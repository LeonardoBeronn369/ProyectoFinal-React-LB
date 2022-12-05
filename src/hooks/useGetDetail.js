import { useEffect, useState } from "react"

//firebase
import { db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const useGetDetail = (id) => {

  const [estado, setEstado] = useState({
    product: '',
    loading: true
  })

  useEffect(() => {
    getDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [id])

  const getDetail = async () => {
    const documentRef = doc(db, "productos", id);
    const respuesta = await getDoc(documentRef);

    if (respuesta.exists()) {
      const product = {
        ...respuesta.data(),
        id: respuesta.id
      }

      setEstado({
        product,
        loading: false
      })

    } else {

      console.log("Documento inexistente");
    }
  }

  return estado
}
