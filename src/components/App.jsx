import Header from './Header'
import CreateProduct from './CreateProduct'
import Products from './Products'
import LocaleButton from './LocaleButton'
import { ProductsContextProvider } from '../contexts/ProductsContext'
import { LocaleContextProvider } from '../contexts/LocaleContext'

export default function App() {
    return (
        <LocaleContextProvider>
        <ProductsContextProvider>
            <Header />
            <LocaleButton />
            <CreateProduct />
            <Products />
        </ProductsContextProvider> 
        </LocaleContextProvider>
    )
}