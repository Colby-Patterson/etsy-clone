import axios from "axios"
import { useEffect, useState } from "react"

const ProductsForSale = () => {
  const [productProperties, setProductProperties] = useState([])
  useEffect(()=> {
    getProductProperties()
  }, [])

  const getProductProperties = async () => {
    try {
      let res = await axios.get("/api/products")
      setProductProperties(res.data)
    } catch(err) {
      alert("Error occurred in getProductProperties")
    }
  }

  return (
    <div>
      <h1>Products For Sale</h1>
      <p>{JSON.stringify(productProperties)}</p>
    </div>
  )
}

export default ProductsForSale