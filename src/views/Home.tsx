import Items from "../components/Items"
import { products } from "../data/products"
import Product from "../data/interface"
export default function Home() {
  return (
    <div className="bg-slate-100 ">
        

        <div>
            {products.map((product: Product) => (
                <Items 
                    key={product.id}
                    name={product.name}
                    cost={product.cost} 
                    img={product.img} 
                />
            ))}
        </div>

        <footer className="bg-black">
            todos los derechos reservados
        </footer>

    </div>
  )
}
