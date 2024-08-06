import NavBar, {sideBarList} from "./NavBar.jsx"


function SideBar(){
    return(
        <>
        <section className="side-bar">
            <NavBar style='nav-side-bar' list={sideBarList}></NavBar>
        </section>
        </>
    )
}


export default SideBar