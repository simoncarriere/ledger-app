const navigation = [
    { name: 'Dashboard', href: '#',  current: true },
    { name: 'Team', href: '#',  current: false },
    { name: 'Ledger', href: '#',  current: false },
    { name: 'Calendar', href: '#',  current: false },
    { name: 'Reports', href: '#',  current: false },
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
                    src="https://tailwindui.com/img/logos/mark.svg?color=emerald&shade=600"
                    alt="Ledger"
                />
            </div>
            <div className="flex flex-col flex-grow mt-8"> {/* <div className="flex-1 h-0 mt-5 overflow-y-auto"> */}
                <nav className="flex-1 px-4 pb-4 space-y-1">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        item.current ? 'bg-slate-200 text-gray-800' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group rounded-md py-3 px-2 flex items-center text-sm font-medium'
                        )}
                    >
                        {item.name}
                    </a>
                    ))}
                </nav>
            </div>
        </>
     );
}
 
export default Nav;