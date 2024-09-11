import React from 'react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About Us', link: '#about' },
    { name: 'Schedules', link: '#schedules' },
    { name: 'Achievements', link: '#achievements' },
    {
      name: 'Pages',
      link: '#',
      dropdown: [
        { name: 'Player Details', link: '#player-details' },
        { name: '404', link: '#404' },
        { name: 'Gallery', link: '#gallery' }
      ]
    }
  ];

  return (
    <div>
      {/* Main Nav */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-nowrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kriket
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
              (555) 412-1234
            </a>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Secondary Nav */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <a href={item.link} className="text-gray-900 dark:text-white hover:underline">
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="absolute hidden group-hover:block bg-white dark:bg-gray-700 shadow-lg py-2 z-50 mt-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
