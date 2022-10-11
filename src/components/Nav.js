import { BrowserRouter, Link, Routes, Route } from "react-router-dom"

const navigation = [
    { name: 'Dashboard', href: 'dashboard',  current: true },
    { name: 'Team', href: 'team',  current: false },
    { name: 'Ledger', href: '#',  current: false },
    { name: 'Calendar', href: '#',  current: false },
    { name: 'Reports', href: '#',  current: false },
]


  
function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const Nav = () => {
    return ( 
        <BrowserRouter>
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
                        <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                            item.current ? 'bg-lime-300 text-gray-900 hover:bg-lime-200' : 'text-gray-500 hover:bg-slate-200 hover:text-gray-900',
                            'group rounded-md py-3 px-4 flex items-center text-sm font-medium'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

        </BrowserRouter>
     );
}
 
export default Nav;

