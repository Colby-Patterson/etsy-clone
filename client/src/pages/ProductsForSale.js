import axios from "axios"
import { useEffect, useState } from "react"

const ProductsForSale = () => {
  const [productProperties, setProductProperties] = useState([])
  useEffect(()=> {
    getProductProperties()
  }, [])

  const normalizeRawData = (rawData) => {
    const sellerIDs = rawData.map((rd)=> rd.seller_id)
    const uniqueIDs = [...new Set(sellerIDs)]
    console.log(uniqueIDs)
  }

  const getProductProperties = async () => {
    try {
      let res = await axios.get("/api/products")
      normalizeRawData(res.data)
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