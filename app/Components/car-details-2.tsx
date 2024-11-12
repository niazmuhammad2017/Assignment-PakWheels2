import Image from "next/image";


export default function CarDetails2(){
    return(
    

        <div className="px-96 py-20">
         
            <div className="text-3xl font-semibold text-center underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</div>
            
            <div className="px-60 py-8">
            <Image src="/images/Car1.jpeg" alt="Logo" width={300} height={300}/>
            </div>

         <div className="flex px-16">   
         <button className="bg-blue-800 text-white h-10 w-40 mx-2 text-xs rounded">Book a test drive</button>
         <button className=" border border-blue-600 text-blue-700 h-10 w-40 mx-2 text-xs rounded">Request Bank Finance</button>
         <button className="border border-blue-600 text-blue-700 h-10 w-20 mx-2 text-xs rounded">Visit Place</button>
         <button className="border border-blue-600 text-blue-700 h-10 w-36 mx-0 text-xs rounded">Car Inspection</button>
         </div>

         <h1 className="px-64 py-6 text-2xl">Vehicle Description</h1>

         <ul className="flex px-4 text-nowrap text-0.5xl">
            <li className="font-bold">Number of Doors<span className="font-normal"> 4 </span></li>
            <li className="px-4 font-bold">Engince<span className="font-normal"> 1800 cc</span ></li>
            <li className="px-4 font-bold">Condition <span className="font-normal">8.5/10</span></li>
            <li className="px-4 font-bold">Driven <span className="font-normal">9,500 KM</span></li>
            <li className="px-4 font-bold">Suspension Type:<span className="font-normal"> Soft Suspension</span></li>
         </ul>

         <ul className="flex px-4 py-4  text-nowrap text-0.5xl">
            <li className="font-bold">Avg<span className="font-normal">13 Km per ltr 4 </span></li>
            <li className="px-4 font-bold">Transmission<span className="font-normal"> Automatic</span></li>
            <li className="px-4 font-bold">Fuel Type<span className="font-normal"> High-Octance</span></li>
            </ul>

        {/* <span>Number of Doors 4 Engince 1800 cc Condition 8.5/10 Driven 9,500 KM Suspension Type: Soft Suspension</span> */}

         <h1 className="py-5 justify-center text-center text-green-500 text-2xl">PKR 50,00,000</h1>

        <div className="py-2">
         <button className="bg-blue-800 text-white h-10 w-32 mx-80 text-xs rounded">Make Payment</button>
         </div>

        </div>

 
    )
}
