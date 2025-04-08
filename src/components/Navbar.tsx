import logo from "@/assets/asset 0.png";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
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
    {
      label: "Digital Marketing & Interaction",
      href: "/services/digital-marketing",
    },
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
    {
      label: "Engineering Construction & Operations",
      href: "/industries/engineering-construction",
    },
    { label: "Healthcare", href: "/industries/healthcare" },
    {
      label: "Industrial & Process Manufacturing",
      href: "/industries/manufacturing",
    },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Life Sciences & Pharma", href: "/industries/life-sciences" },
    { label: "Media & Info Services", href: "/industries/media" },
    { label: "Medical Devices", href: "/industries/medical-devices" },
    { label: "Natural Resources", href: "/industries/natural-resources" },
    { label: "Oil & Gas", href: "/industries/oil-gas" },
    { label: "Platforms & Software Products", href: "/industries/software" },
    {
      label: "Professional Services",
      href: "/industries/professional-services",
    },
    { label: "Public Sector", href: "/industries/public-sector" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Semiconductors", href: "/industries/semiconductors" },
    { label: "Transportation & Services", href: "/industries/transportation" },
    { label: "Utilities", href: "/industries/utilities" },
  ],
  digitalContent: [
    {
      label: "Digital Content Migration",
      href: "/digital-content-services/migration",
    },
    {
      label: "Digital Content Capture",
      href: "/digital-content-services/capture",
    },
    {
      label: "Managed Services",
      href: "/digital-content-services/managed-services",
    },
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getColumnCount = (section: string) => {
    if (section === "services") return 3;
    if (section === "industries") return 4;
    return 1;
  };

  const splitIntoColumns = (items: NavItem[], columnCount: number) => {
    const itemsPerColumn = Math.ceil(items.length / columnCount);
    return Array.from({ length: columnCount }, (_, index) =>
      items.slice(index * itemsPerColumn, (index + 1) * itemsPerColumn)
    );
  };

  const getBackgroundColor = () => {
    if (isHomePage && !isScrolled) return "transparent";
    return "black";
  };

  const toggleDropdown = (section: string) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (activeDropdown && !target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  const DropdownSection = ({
    section,
    items,
  }: {
    section: string;
    items: NavItem[];
  }) => {
    const columnCount = getColumnCount(section);
    const columns = splitIntoColumns(items, columnCount);
    const dropdownWidth =
      columnCount === 4
        ? "w-[800px]"
        : columnCount === 3
        ? "w-[600px]"
        : "w-[300px]";
    const displayName =
      section === "digitalContent"
        ? "Digital Content Services"
        : section === "training"
        ? "Training & Courses"
        : section === "contactUs"
        ? "Contact Us"
        : section.charAt(0).toUpperCase() + section.slice(1);

    return (
      <div className="relative dropdown-container">
        {/* Increase the clickable area of the button */}
        <button
          className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 font-abeezee text-[15px]"
          aria-expanded={activeDropdown === section}
          aria-haspopup="true"
          onClick={() => toggleDropdown(section)}
        >
          <span>{displayName}</span>
          {activeDropdown === section ? (
            <ChevronUp className="h-4 w-4 ml-1" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
          )}
        </button>

        {activeDropdown === section && (
          <>
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 bg-opacity-95 text-white py-2 shadow-lg ${dropdownWidth} z-50 max-h-[80vh] overflow-y-auto rounded-md`}
              style={{ maxWidth: "calc(100vw - 40px)" }}
              role="menu"
            >
              <div className="flex">
                {columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex-1 px-2">
                    {column.map((item) => (
                      <Link
                        key={item.href}
                        className="block px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition-colors duration-200 rounded font-abeezee text-[14px]"
                        onClick={() => {
                          setActiveDropdown(null);
                        }}
                        to={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const MobileDropdownSection = ({
    section,
    items,
  }: {
    section: string;
    items: NavItem[];
  }) => {
    const isActive = activeDropdown === section;
    const columnCount = Math.min(getColumnCount(section), 2);
    const columns = splitIntoColumns(items, columnCount);
    const displayName =
      section === "digitalContent"
        ? "Digital Content Services"
        : section === "training"
        ? "Training & Courses"
        : section === "contactUs"
        ? "Contact Us"
        : section.charAt(0).toUpperCase() + section.slice(1);

    return (
      <div className="py-2">
        <button
          onClick={() => setActiveDropdown(isActive ? null : section)}
          className="flex items-center justify-between w-full text-white py-3 px-2 font-abeezee text-[14px]"
          aria-expanded={isActive}
        >
          <span>{displayName}</span>
          {isActive ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {isActive && (
          <div className="pl-4 pr-2 max-h-[60vh] overflow-y-auto">
            <div
              className={`grid ${
                columnCount > 1 ? "grid-cols-2" : "grid-cols-1"
              } gap-4`}
            >
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-2">
                  {column.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-white hover:text-blue-400 py-3 px-2 rounded font-abeezee text-[13px]"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
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
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isHomePage && !isScrolled ? 'bg-transparent' : 'bg-black'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <img
              src={logo || "/placeholder.svg"}
              alt="Company Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ml-10">
            <Link
              to="/"
              className="text-blue-400 hover:text-white transition-colors duration-300 py-3 px-4 font-abeezee text-[15px]"
            >
              Home
            </Link>

            {Object.entries(navigationItems1).map(([section, items]) => (
              <DropdownSection key={section} section={section} items={items} />
            ))}

            <Link
              to="/software-support"
              className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 font-abeezee text-[15px]"
            >
              Software Support
            </Link>

            <Link
              to="/blog"
              className="text-white hover:text-blue-400 transition-colors duration-300 py-3 px-4 font-abeezee text-[15px]"
            >
              Blog
            </Link>

            {Object.entries(navigationItems3).map(([section, items]) => (
              <DropdownSection key={section} section={section} items={items} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 w-full h-full bg-black bg-opacity-95 z-40 lg:hidden overflow-y-auto pt-20">
            <div className="flex flex-col px-6 pb-8 space-y-4">
              <Link
                to="/"
                className="text-blue-400 py-3 px-2 font-abeezee text-[16px]"
                onClick={toggleMenu}
              >
                Home
              </Link>

              {Object.entries(navigationItems1).map(([section, items]) => (
                <MobileDropdownSection
                  key={section}
                  section={section}
                  items={items}
                />
              ))}

              <Link
                to="/software-support"
                className="text-white py-3 px-4 font-abeezee text-[15px]"
                onClick={toggleMenu}
              >
                Software Support
              </Link>

              <Link
                to="/blog"
                className="text-white py-3 px-4 font-abeezee text-[15px]"
                onClick={toggleMenu}
              >
                Blog
              </Link>

              {Object.entries(navigationItems3).map(([section, items]) => (
                <MobileDropdownSection
                  key={section}
                  section={section}
                  items={items}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
