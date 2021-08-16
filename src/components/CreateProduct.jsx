import { useState } from 'react';
import { useProductsContext } from '../contexts/ProductsContext';
import { v4 as uuidv4 } from 'uuid';


export default function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useProductsContext();

    function createProduct(e) {
        const id = uuidv4();

        setProducts([ ...products, { id, name, price } ]);
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            <button style={{ padding: 5 }} onClick={createProduct}>Add product!</button>
        </div>
    )
}