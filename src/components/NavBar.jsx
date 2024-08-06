/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


function NavBar({ list, style }){
    return(
        <>
        <nav className="nav-bar">
            <ul className={style}>
                {
                    list.map((item) =>{
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <li className="option">{item}</li>
                        )
                    })
                }
            </ul>
        </nav>
        </>
    )
}

export const sideBarList = ['Side 1', 'Side 2', 'Side 3']
export const footerBarList = ['Footer 1', 'Footer 2', 'Footer 3']


export default NavBar