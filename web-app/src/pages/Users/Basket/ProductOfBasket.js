import React, { useState, useEffect,useContext } from 'react';
import UserContext from '../../../pages/Users/UserContext/UserContext';
import { getBasketByUserId } from '~/services/basket.service';
import { getProductById } from '~/services/product.service';
import './ProductOfBasket.css'
const ProductOfBasket = ({props}) => {
    const { user,accessToken } = useContext(UserContext);
    const [product,setProuduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(props);
                const result = await getProductById(props.productId);
                setProuduct(result.data);
                console.log("products",product);
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchData();
    }, [props.productId]);
    const [number,setNumber] = useState(props.ProductOfBasket);
    const handleDeleteProduct = ()=>{
        setNumber(props.ProductOfBasket-1);
    }
    const handleAddProduct = ()=>{
        setNumber(number+1);
    }
    return (
        <div className="basket-item">
            <img src={product.image} alt={product.name} />
            <div className=''>
                <b>Tên Sản Phẩm </b>
                <p>{product.name}</p>
            </div>
            <div className='flex'>
                <div>
                    <p onClick={handleDeleteProduct}>-</p>
                </div>
                <div>
                    <p>{number}</p>
                </div>
                <div>
                    <p onClick={handleAddProduct}>+</p>
                </div>
            </div>
            
        </div>
    );
};

export default ProductOfBasket;
