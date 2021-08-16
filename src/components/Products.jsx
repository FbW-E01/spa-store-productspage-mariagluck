import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';


export default function Products() {
    const [ products, setProducts ] = useProductsContext();
    const [ locale ] = useLocaleContext();

    let currency = '€';
    if (locale === 'en-gb')
    currency = '£';
    if (locale === 'de-de')
    currency = '€';
    if (locale === 'en-us')
    currency = '$';

    
    const deleteHandler = (id) => {
        setProducts(products.filter(prod => prod.id !== id));
     }

    return (
        <div className="Products">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                {products.map(prod => 
                <tr>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price} {currency}</td> 
                <td>
                    <button onClick={() => deleteHandler(prod.id)}>DELETE</button>
                </td>
                </tr>)}    
            </table>
            
        </div>
    )
}