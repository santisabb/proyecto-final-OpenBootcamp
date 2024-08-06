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
                            <li className="option">
                                <a href={item.link}>{item.name}</a>
                            </li>
                            //TODO averiguar como usar componente de Link de react-router en vez de anchor para aplicar SPA 
                        )
                    })
                }
            </ul>
        </nav>
        </>
    )
}

export const sideBarList = [
    {
        name: 'Side 1',
        link: '/side1',
    },
    {
        name: 'Side 2',
        link: '/side2',
    },
    {
        name: 'Side 3',
        link: '/side3',
    }
]
export const footerBarList = [
    {
        name: 'Footer 1',
        link: '/footer1',
    },
    {
        name: 'Footer 2',
        link: '/footer2',
    },
    {
        name: 'Footer 3',
        link: '/footer3',
    },
]


export default NavBar