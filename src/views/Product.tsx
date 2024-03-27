import Navbar from '../components/Navbar';
import { products } from '../data/products';
import { useParams } from 'react-router-dom';


export default function Product() {

  const { id } = useParams();

  if (id === undefined) {
    return <div>No se proporcionó un ID de producto</div>;
  }
  const num:number = parseInt(id)
  
  const product= products.find((prod)=>prod.id==num)
  if (product === undefined){
    return <div>Error</div>
  }

  
  return (
    <div>
      <Navbar />
    <div className="flex flex-row justify-center pt-28">
        <div className="w-5/12 bg-black">

        </div>
        <div className="w-3/12 bg-slate-400 py-4 px-10">
          <div>
            <h1 className="text-2xl">{product.name}</h1>
            <h3>{product.cost}$</h3>
          </div>
          <div className="py-10 border-t-2">
            <p>Details:</p>
            <ol>
              <li>detalles</li>
            </ol>
          </div>
          <form action="">
          <input type="number" />
          <input type="submit" value="Añadir al carrito" /> 
          </form>
        </div>
        
    </div>
    </div>
  )
}
