
export default function Navbar() {
  return (
    <div>
        <nav className='fixed bg-black h-20 w-full text-white z-10'>
            <div className="h-full flex items-center justify-start">
                <img src="" alt="" />
                <ol className="text-center grid grid-cols-5 gap-0 w-1/2 h-full">
                    <li className="col-span-1 flex items-center justify-center"><a href="#">hola</a></li>
                    <li className="col-span-1 flex items-center justify-center"><a href="#">hola</a></li>
                    <li className="col-span-1 flex items-center justify-center"><a href="#">hola</a></li>
                    <li className="col-span-1 flex items-center justify-center"><a href="#">hola</a></li>
                    <li className="col-span-1 flex items-center justify-center"><a href="#">hola</a></li>
                </ol>
            </div>
        </nav>
    </div>
  )
}
