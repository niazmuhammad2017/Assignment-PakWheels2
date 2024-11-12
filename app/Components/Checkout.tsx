
export default function Checkout(){
    return(
        <body className="bg-blue-50 py-64">

            <div className="mt-20 justify-items-center border-b-2">
            <h1 className=" text-3xl font-bold">Enter your Details</h1>
            </div>

            <div>
                <form className="mt-20 justify-self-center flex gap-4 w-1/5 flex-col">
                    <input type="text" className="px-4 h-8" placeholder="Enter your Name"/>
                    <input type="email" className="px-4 h-8" placeholder="Enter your Email"/>
                    <input type="number" className="px-4 h-8" placeholder="Card Number"/>
                    <input type="text" className="px-4 h-8" placeholder="Address"/>
                    <button className="mx-20 mt-10 bg-blue-800 text-white rounded h-10 w-32 text-xs">Place your order</button>

                </form>

            </div>


        </body>
    )
}