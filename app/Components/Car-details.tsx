import Image from "next/image";


export default function CarDetails(){
    return(


        <div className="px-96 py-20">
         
            <div className="text-3xl font-semibold text-center underline">Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</div>
            
            <div className="px-60 py-8">
            <Image src="/images/Car1.jpg" alt="Logo" width={300} height={300}/>
            </div>

            <p className="justify-center text-center text-xs">Toyota Corollas key features include fuel efficiency, comfortable ride, and affordability. Its latest generation in Pakistan offers a variety of options, including the 1.6-liter Altis, the 1.8-liter Altis Grande, and the hybrid variant. The 1.6-liter Altis comes with a manual or CVT transmission, while the 1.8-liter Altis Grande comes with a CVT transmission. The hybrid variant offers a 1.8-liter engine with an electric motor, providing a combined output of 121 horsepower. Other notable features include a touchscreen infotainment system, keyless entry, push-button start, automatic climate control, and advanced safety features such as seven airbags, vehicle stability control, and hill-start assist.            </p>
         
         <h1 className="py-12 justify-center text-center text-green-500 text-2xl">PKR 50,00,000</h1>

         <button className="bg-blue-800 text-white h-10 w-32 mx-80 text-xs rounded">Make Payment</button>
        </div>


    )
}