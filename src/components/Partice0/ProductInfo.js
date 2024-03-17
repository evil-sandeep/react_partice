import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCT_API } from '../../constant';

const ProductInfo = () => {
  const [pInfo, setPInfo] = useState({});
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${PRODUCT_API}/${id}`);
      const data = await res.json()
      console.log(data)
      setPInfo(data)
    }
    fetchData();
  }, [id]);


  return (
    <div className=''>
      <h1>{pInfo.id}</h1>
      <img className='h-40 w-40' src={pInfo?.thumbnail} alt="pImg" />
      <h2 className='flex flex-col'>{pInfo?.brand}</h2>
      <h2>{pInfo?.title}</h2>
      <h2>{pInfo?.description}</h2>
      <h2>{pInfo?.price}</h2>
    </div>
  )
}

export default ProductInfo;