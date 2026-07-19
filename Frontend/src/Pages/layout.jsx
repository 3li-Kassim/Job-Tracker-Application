import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";
import { Footer } from "../Components/footer";

export function Layout(){
    return(
        <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}