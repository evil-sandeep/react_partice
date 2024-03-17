import { useEffect, useState } from 'react'
import { PRODUCT_API } from '../../constant';


const useProducts = (id) => {
    const [productId, setProductId] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${PRODUCT_API}/${id}`)
                const data = await res.json();
                console.log('Api response data' + data)
                setProductId(data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [id])
    return productId
}

export default useProducts