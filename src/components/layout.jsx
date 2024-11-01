import Footer from "./footer"
import Header from "./header"
import Home from "./home"
import About from "./about"
import Contact from "./contact"


const Layout = ({children}) => {
    return (
        <>
           <Header/>
           {children}
           <Footer/>
        </>
    )
}


export default Layout