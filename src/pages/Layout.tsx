import NavBar from "../components/NavBar";

export default function Layout({children} : {children:any}) {
    return ( 
        <>
        <NavBar/>
        <main>{children}</main>
        </>
    )
}