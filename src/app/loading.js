import { DotLoader } from "react-spinners";

export default function PageLoading(){
    return(

        <div className="h-screen flex items-center justify-center">
            <h1 className="text-5xl text-center text-brand-light mt-5">Carregando</h1>
            
            <DotLoader color="#00b4eb" size={60}/>
        </div>
    )
}