/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */


import { Link } from "react-router-dom"

function NavBar({ list, style }){
    return(
        <>
        <nav className="nav-bar">
            <ul className={style}>
                {
                    list.map((item) =>{
                        return(
                            // eslint-disable-next-line react/jsx-key
                            <li key={item.link} className="option">
                                <Link to={item.link}>{item.name}</Link>
                            </li>
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
        name: 'Inicio',
        link: '/home',
    },
    {
        name: 'Mis tareas',
        link: '/task page',
    },
		{
			name: 'Saludito',
			link: '/hello user',
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
