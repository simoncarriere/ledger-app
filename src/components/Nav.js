import { NavLink } from "react-router-dom"

const navigation = [
    { name: 'Dashboard', href: 'dashboard' },
    { name: 'Team', href: 'team' },
    { name: 'Ledger', href: 'ledger' },
    // { name: 'Calendar', href: '#' },
    { name: 'Reports', href: 'reports' },
]


  
function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    return ( 
        <>
            <div className="flex items-center flex-shrink-0 px-4">
                <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=slate&shade=300"
                    alt="Ledger"
                />
            </div>
            <div className="flex flex-col flex-grow mt-8"> {/* <div className="flex-1 h-0 mt-5 overflow-y-auto"> */}
                <nav className="flex-1 px-4 pb-4 space-y-1">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={(navData) =>
                                navData.isActive ? "nav-link bg-lime-300 text-gray-900 " : "nav-link text-gray-500 hover:bg-lime-100 hover:text-gray-900"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

        </>
     );
}
 
export default Nav;

