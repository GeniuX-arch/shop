import Items from "../components/Items"
import { products } from "../data/products"
import Product from "../data/interface"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div className="">
        <Navbar />

        <div className="mx-auto w-full py-28">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-5 p-3 md:p-12">
            {products.map((product: Product) => (
                <Items 
                    key={product.id}
                    name={product.name}
                    cost={product.cost} 
                    img={product.img} 
                />
            ))}
        </div>
        </div>

        <footer className="bg-black text-white">
            todos los derechos reservados
        </footer>

    </div>
  )
}
