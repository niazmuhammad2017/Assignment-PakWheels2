
import Image from "next/image"

export default function Navbar(){
    return( 
        <div >
          <nav className="bg-black text-white font-white h-10 py-2 px-3 flex justify-between items-center border-b border-gray-400">
      
          <div></div>
            <div className="flex justify-around space-x-8">
            <Image src="/images/mobile.jpg" alt="M" width={25} height={30}/>
                Download App via SMS
                </div>
       
            <div className="text-black space-x-10">.......................................................................................................................................................................................................................</div>  
           
            <div>
                <ul className="flex space-x-4">

                <Image src="/images/Urdu.jpg" alt="U" width={40} height={50}/>

                <li className="text-gray-500 space-x-1">|</li>
                    <li >Sign In</li>
                    <li className="text-gray-500 space-x-1">|</li>
                    <li>Sign Up</li>

                    <li className="text-black space-x-5">.......</li>
                </ul>
            
      
            </div>  
     
          </nav>           

           <nav className="bg-black text-white font-white h-12 py-2 px-3 flex justify-around items-center">
           <div></div> 
            <div className="flex">
            <Image src="/images/pw-logo.jpg" alt="Logo" width={160} height={50}/>
            </div>
            <div></div> 
           <div>Used Cars</div>  
           <div>New Cars</div>        
           <div>Bikes</div>  
           <div>Auto Stores</div>        
           <div>Videos</div>  
           <div>Forums</div> 
           <div>Blog</div> 
           <div>More</div> 
           <button className="bg-red-700 text-white h-10 w-32 font-bold rounded-lg">Post an Ad</button>
           
         
          </nav>        
        </div>
    )   
}   