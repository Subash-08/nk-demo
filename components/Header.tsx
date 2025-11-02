import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-black font-medium hover:text-gray-600 transition-colors duration-300">
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="block py-3 px-4 text-lg text-black font-medium hover:bg-white/50 rounded-lg transition-colors duration-300">
      {children}
    </a>
  );

// Placeholder Icons
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const FolderIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 17l-4 4-1.414-1.414a1 1 0 010-1.414l10-10z" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;

const solutionsItems = [
    { title: 'Data Intelligence Lab', description: 'Unlock insights from your data.', icon: <FolderIcon /> },
    { title: 'Performance Marketing', description: 'Drive growth with targeted campaigns.', icon: <SparklesIcon /> },
    { title: 'Search & Discovery', description: 'Improve visibility and user engagement.', icon: <PencilIcon /> },
    { title: 'Creative Brand System', description: 'Build a memorable and consistent brand.', icon: <CalendarIcon /> },
    { title: 'Web Development', description: 'Create stunning, high-performance websites.', icon: <CodeIcon /> },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  
  const menuItems = ["Company", "Solutions", "Works", "Blogs", "Contact"];

  return (
    <header className="sticky top-5 z-50 rounded-3xl lg:rounded-[2.5rem] shadow-sm bg-white container mx-auto max-w-7xl">
      <div className="">
        <div className="rounded-full shadow-lg p-2.5 sm:p-3 mt-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
              <a href="#" className="pl-2 sm:pl-4 font-extrabold text-3xl text-[#48B5E0] tracking-tighter">
                NK
              </a>
            </div>

            {/* Center: Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                   item === 'Solutions' ? (
                    <div key={item} className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                      <button className="text-black font-medium hover:text-gray-600 transition-colors duration-300 flex items-center gap-1">
                        {item}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                    </div>
                  ) : (
                    <NavLink key={item} href="#">{item}</NavLink>
                  )
                ))}
            </nav>
            
            {/* Right: Get Started & Mobile Toggle */}
            <div className="flex-1 flex justify-end items-center">
              <div className="hidden lg:block pr-2 sm:pr-0">
                <a 
                  href="#"
                  className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  Get Started
                </a>
              </div>
              <div className="lg:hidden pr-2">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       
            {/* Desktop Mega Menu */}
        <div 
          onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}
          className={`hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[50rem] max-w-full transition-all duration-300 ease-in-out
          ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
        >
          <div className="container mx-auto max-w-7xl mt-3">
            <div className="bg-white rounded-3xl shadow-2xl p-4">
              {/* Reduced gaps: gap-x-4 gap-y-4 */}
              <div className="grid grid-cols-12 gap-x-4 gap-y-4 rounded-2xl p-2">
                
                {/* Column 1 (2 Items) - relies on space-y-4 for gap */}
                <div className="col-span-4 space-y-4"> 
                  {solutionsItems.slice(0, 2).map(item => (
                    <a href="#" key={item.title} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <p className="font-bold text-black">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Column 2 (2 Items) - relies on space-y-4 for gap */}
                <div className="col-span-4 space-y-4">
                  {solutionsItems.slice(2, 4).map(item => (
                    <a href="#" key={item.title} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 mt-1">{item.icon}</div>
                      <div>
                        <p className="font-bold text-black">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                  {/* Column 3 (1 Item) - Centered and full height */}
                  <div className="col-span-4 flex flex-col items-stretch">
                    {solutionsItems[4] && (
                      <a 
                        href="#" 
                        key={solutionsItems[4].title} 
                        className="flex flex-col items-center text-center justify-center h-full gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-1">{solutionsItems[4].icon}</div>
                        <div>
                          <p className="font-bold text-black">{solutionsItems[4].title}</p>
                          <p className="text-sm text-gray-500">{solutionsItems[4].description}</p>
                        </div>
                      </a>
                    )}
                  </div>
              </div>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden
        `}
      >
        <div className="container mx-auto max-w-7xl mt-3">
            <div className="bg-gradient-to-b from-[#F8FBFF]/90 to-[#E0F3FF]/90 backdrop-blur-md rounded-3xl shadow-lg p-4">
                <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      item === 'Solutions' ? (
                        <div key={item}>
                          <button
                            onClick={() => setMobileSolutionsOpen(!isMobileSolutionsOpen)}
                            className="w-full flex justify-between items-center py-3 px-4 text-lg text-black font-medium hover:bg-white/50 rounded-lg transition-colors duration-300"
                          >
                            <span>{item}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileSolutionsOpen ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="pl-4 pr-1 py-0 flex flex-col gap-2">
                              {solutionsItems.map(solItem => (
                                <a href="#" key={solItem.title} className="flex items-center gap-4 p-3 rounded-lg bg-sky-100 border border-sky-100 hover:bg-sky-100 transition-colors duration-300">
                                  {solItem.icon}
                                  <div>
                                    <p className="font-semibold text-base text-black">{solItem.title}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <MobileNavLink key={item} href="#">{item}</MobileNavLink>
                      )
                    ))}
                    <div className="border-t border-sky-200 my-2"></div>
                    <a 
                        href="#"
                        className="bg-black text-white text-center font-medium px-6 py-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
                    >
                        Get Started
                    </a>
                </nav>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;