import NavBar, {footerBarList} from "./NavBar.jsx"


function Footer(){
    return(
        <>
        <footer>
            <NavBar style='footer-list' list={footerBarList}></NavBar>
        </footer>
        </>
    )
}


export default Footer