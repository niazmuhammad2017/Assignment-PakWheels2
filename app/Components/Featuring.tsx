import Image from "next/image";

export default function Featuring(){
    return(
    
  <div className="bg-gray-100 py-4 pb-40">

    <div className="flex">
    <div className="px-72 py-8 pb text-2xl text-nowrap font-semibold">Featured New Cars</div>
    <div className="px-72 py-8 mx-8 text-nowrap text-blue-500 text-sm justify-items-end">View All New Cars</div>
    </div>

    <ul className="px-72 flex text-xl py-0">
        <li className="hover:underline">Popular</li>
        <li className="px-4">Upcoming</li>
        <li className="px-4">New Launched</li>
    </ul>

            <div className="flex  px-0 py-0 border-t-2 mx-72 ml-72 mt-4 justify-center ">
<div className=" bg-white border-l-2 h-64 w-56 border-r-2 border-t-2 border-b-2  mt-10 mx-2 hover:scale-110">
<div className="px-6 py-10">
<Image src="/images/Car-1.jpg" alt="Logo" width={300} height={300}/>
</div>
<h1 className="px-10 mt-0 text-blue-800 text-nowrap font-semibold text-center">Toyota Corolla</h1>
<h1 className="px-10 mt-0 text-green-500 text-nowrap text-sm text-center">PKR-59.9-75.5 lacs</h1>
<h1 className="flex px-10 mt-2 text-slate-400 text-nowrap text-center text-sm justify-center"><Image src="/images/stars.png" alt="Logo" width={80} height={80}/>621 Reviews</h1>
</div>  

            

<div className=" bg-white border-l-2 h-64 w-56 border-r-2 border-t-2 border-b-2  mt-10 mx-2 hover:scale-110">
<div className="px-6 py-7">
<Image src="/images/Car-2.jpg" alt="Logo" width={300} height={300}/>
</div>
<h1 className="px-10 mt-0 text-blue-800 text-nowrap font-semibold text-center">Suzuki Alto</h1>
<h1 className="px-10 mt-0 text-green-500 text-nowrap text-sm text-center">PKR 23.3 - 30.5 lacs</h1>
<h1 className="flex px-10 mt-2 text-slate-400 text-nowrap text-sm text-center justify-center"><Image src="/images/stars.png" alt="Logo" width={100} height={100}/>200 Reviews</h1>
</div>  


<div className=" bg-white border-l-2 h-64 w-56 border-r-2 border-t-2 border-b-2  mt-10 mx-2 hover:scale-110 ">
<div className="px-6 py-8">
<Image src="/images/Car-3.jpg" alt="Logo" width={300} height={300}/>
</div>
<h1 className="px-10 mt-0 text-blue-800 text-nowrap font-semibold text-center">Honda City</h1>
<h1 className="px-10 mt-0 text-green-500 text-nowrap text-sm text-center">PKR 46.5 - 58.5 lacs</h1>
<h1 className="flex px-10 mt-2 text-slate-400 text-nowrap text-sm text-center justify-center"><Image src="/images/stars.png" alt="Logo" width={70} height={70}/>456 Reviews</h1>
</div>  

<div className=" bg-white border-l-2 h-64 w-56 border-r-2 border-t-2 border-b-2  mt-10 mx-2 hover:scale-110">
<div className="px-6 py-10">
<Image src="/images/Car-4.jpg" alt="Logo" width={300} height={300}/>
</div>
<h1 className="px-10 mt-0 text-blue-800 text-nowrap font-semibold text-center">Honda Civic</h1>
<h1 className="px-10 mt-0 text-green-500 text-nowrap text-sm text-center">PKR 86.6 - 99.0 lacs</h1>
<div className="flex px-10 mt-2 text-slate-400 text-nowrap text-sm text-center justify-center"><Image src="/images/stars.png" alt="Logo" width={70} height={70}/>361 Reviews</div>
</div>  



            </div>
        
            </div>

    
    )
}