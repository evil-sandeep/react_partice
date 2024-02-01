import React,{useEffect,useState} from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                if (!response) {
                    throw new Error()
                }
                const data = await response.json();
                console.log(data.products)
                setProducts(data.products)
            }
            catch (error) {
                console.log(error)

            }
        }
        fetchData()
    }, [])
  return (
    <div>{products}</div>
  )
}

export default ProductList