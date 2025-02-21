import logo from "@/assets/asset 0.png";
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


interface NavItem {
  label: string;
  href: string;
  dropdownItems?: string[];
}

const navigationItems1: Record<string, NavItem[]> = {
  services: [
    { label: "Applications", href: "/services/applications" },
    { label: "Artificial & Augmented Intelligence", href: "/services/ai" },
    { label: "Business Process", href: "/services/business-process" },
    { label: "Business Solutions", href: "/services/business-solutions" },
    { label: "Cloud", href: "/services/cloud" },
    { label: "Consulting", href: "/services/consulting" },
    { label: "Cybersecurity", href: "/services/cybersecurity" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Design & Experience", href: "/services/design-experience" },
    { label: "Digital Marketing & Interaction", href: "/services/digital-marketing" },
    { label: "Engineering", href: "/services/engineering" },
    { label: "Infrastructure", href: "/services/infrastructure" },
    { label: "Sustainability", href: "/services/sustainability" },
    { label: "Talent Cloud", href: "/services/talent-cloud" },
  ],
  industries: [
    { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Banking", href: "/industries/banking" },
    { label: "Communications", href: "/industries/communications" },
    { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
    { label: "Consumer Packaged Goods", href: "/industries/cpg" },
    { label: "Education", href: "/industries/education" },
    { label: "Engineering Construction & Operations", href: "/industries/engineering-construction" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Industrial & Process Manufacturing", href: "/industries/manufacturing" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Life Sciences & Pharma", href: "/industries/life-sciences" },
    { label: "Media & Info Services", href: "/industries/media" },
    { label: "Medical Devices", href: "/industries/medical-devices" },
    { label: "Natural Resources", href: "/industries/natural-resources" },
    { label: "Oil & Gas", href: "/industries/oil-gas" },
    { label: "Platforms & Software Products", href: "/industries/software" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Public Sector", href: "/industries/public-sector" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Semiconductors", href: "/industries/semiconductors" },
    { label: "Transportation & Services", href: "/industries/transportation" },
    { label: "Utilities", href: "/industries/utilities" },
  ],
  digitalContent: [
    { label: "Digital Content Migration", href: "/digital-content-services/migration" },
    { label: "Digital Content Capture", href: "/digital-content-services/capture" },
    { label: "Managed Services", href: "/digital-content-services/managed-services" },
  ],
};

const navigationItems2: Record<string, NavItem[]> = {
  training: [
    { label: "Show Me All Available Training", href: "/training-courses/all" },
    { label: "Become an instructor", href: "/training-courses/become-instructor" },
  ],
};
 
const navigationItems3: Record<string, NavItem[]> = {
  contactUs: [
    { label: "Our Clients", href: "/contact-us/clients" },
    { label: "FAQ", href: "/contact-us/faq" },
    { label: "Career", href: "/contact-us/career" },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/' || window.location.pathname === '');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getColumnCount = (section: string) => {
    if (section === 'services') return 3;
    if (section === 'industries') return 4;
    return 1;
  };

  const getDropdownWidth = (items: NavItem[]) => {
    const columnCount = getColumnCount(items[0]?.href.split('/')[1]);
    if (columnCount === 4) return 'w-[400px]';
    if (columnCount === 3) return 'w-[400px]';
    const maxLength = Math.max(...items.map(item => item.label.length));
    return `w-[${Math.max(200, maxLength * 8)}px]`;
  };

  const splitIntoColumns = (items: NavItem[], columnCount: number) => {
    const itemsPerColumn = Math.ceil(items.length / columnCount);
    return Array.from({ length: columnCount }, (_, index) =>
      items.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
    );
  };

  const getBackgroundColor = () => {
    if (isHomePage && !isScrolled) return 'transparent';
    return '#283338';
  };

  const DropdownSection = ({ section, items }: { section: string; items: NavItem[] }) => {
    const columnCount = getColumnCount(section);
    const columns = splitIntoColumns(items, columnCount);
    const dropdownWidth = getDropdownWidth(items);

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setActiveDropdown(section)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300">
          <span style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '10px', lineHeight: '27px', letterSpacing: 'normal' }}>
            {section === 'digitalContent' ? 'Digital Content Services' : 
             section === 'training' ? 'Training & Courses' : 
             section === 'contactUs' ? 'Contact Us' :
             section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
          <ChevronDown size={10} />
        </button>
        {activeDropdown === section && (
          <div className={`absolute left-0 mt-1 bg-opacity-95 text-white py-2 ${dropdownWidth}`}
               style={{ backgroundColor: '#1f2125' }}>
            <div className="flex">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex-1 px-2">
                  {column.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-blue-900 hover:text-blue-400 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'ABeeZee, sans-serif', 
                        fontSize: '8px', 
                        lineHeight: '13px', 
                        letterSpacing: 'normal' 
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const MobileDropdownSection = ({ section, items }: { section: string; items: NavItem[] }) => {
    const columnCount = getColumnCount(section);
    const columns = splitIntoColumns(items, columnCount);
    
    return (
      <div key={section} className="py-2">
        <button
          onClick={() => setActiveDropdown(activeDropdown === section ? null : section)}
          className="flex items-center justify-between w-full text-black py-0"
          style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '8px', lineHeight: '10px', letterSpacing: 'normal' }}
        >
          <span>
            {section === 'digitalContent' ? 'Digital Content Services' : 
             section === 'training' ? 'Training & Courses' : 
             section === 'contactUs' ? 'Contact Us' :
             section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
          {activeDropdown === section ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
        </button>
        {activeDropdown === section && (
          <div className="pl-4 pr-2" style={{ backgroundColor: '#1f2125' }}>
            <div className={`grid ${columnCount > 1 ? `grid-cols-${columnCount}` : ''} gap-2`}>
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-0">
                  {column.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block text-white hover:text-blue-400 py-2"
                      onClick={toggleMenu}
                      style={{ 
                        fontFamily: 'ABeeZee, sans-serif', 
                        fontSize: '7px', 
                        lineHeight: '10px', 
                        letterSpacing: 'normal' 
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ 
        backgroundColor: getBackgroundColor(),
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out'
      }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="TurnpikeAnalyst" className="h-12" />
            </Link>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-10">
            <a 
              href="/" 
              className="text-blue-400 hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '10px', lineHeight: '27px', letterSpacing: 'normal' }}
            >
              Home
            </a>
            
            {Object.entries({ ...navigationItems1 }).map(([section, items]) => (
              <DropdownSection key={section} section={section} items={items} />
            ))}

            <a 
              href="/software-Support" 
              className="text-white hover:text-blue-400 transition-colors duration-300"
              style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '10px', lineHeight: '27px', letterSpacing: 'normal' }}
            >
              Software Support
            </a>

            {Object.entries({  ...navigationItems2}).map(([section, items]) => (
              <DropdownSection key={section} section={section} items={items} />
            ))}

            <a 
              href="/blog" 
              className="text-white hover:text-blue-400 transition-colors duration-300"
              style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '10px', lineHeight: '27px', letterSpacing: 'normal' }}
            >
              Blog
            </a>

            {Object.entries({  ...navigationItems3}).map(([section, items]) => (
              <DropdownSection key={section} section={section} items={items} />
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden z-50 ${isOpen ? 'text-black' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-white z-40 md:hidden overflow-y-auto">
            <div className="flex flex-col px-6 pt-16 pb-8">
              <a 
                href="/" 
                className="text-blue-400 py-0" 
                onClick={toggleMenu}
                style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '8px', lineHeight: '27px', letterSpacing: 'normal' }}
              >
                Home
              </a>
              
              {Object.entries({ ...navigationItems1 }).map(([section, items]) => (
                <MobileDropdownSection key={section} section={section} items={items} />
              ))}

              <a 
                href="/software-support" 
                className="text-black py-0" 
                onClick={toggleMenu}
                style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '8px', lineHeight: '27px', letterSpacing: 'normal' }}
              >
                Software Support
              </a>

              {Object.entries({ ...navigationItems2 }).map(([section, items]) => (
                <MobileDropdownSection key={section} section={section} items={items} />
              ))}

              <a 
                href="/blog" 
                className="text-black py-0" 
                onClick={toggleMenu}
                style={{ fontFamily: 'ABeeZee, sans-serif', fontSize: '8px', lineHeight: '27px', letterSpacing: 'normal' }}
              >
                Blog
              </a>

              {Object.entries({ ...navigationItems3 }).map(([section, items]) => (
                <MobileDropdownSection key={section} section={section} items={items} />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;