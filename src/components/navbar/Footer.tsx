import { Box, Center, Divider, IconButton } from "@chakra-ui/react";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { useState, } from "react";
import { Menus } from "../../constants/Menus";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";
const Footer = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openSubMenuKey, setOpenSubMenuKey] = useState<string | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
    setOpenSubMenuKey(null); // Reset nested submenu when switching top-level
  };

  const toggleSubMenu = (parentIndex: number, subIndex: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent bubbling to parent menu
    const key = `${parentIndex}-${subIndex}`;
    if (openSubMenuKey === key) {
      setOpenSubMenuKey(null);
    } else {
      setOpenSubMenuKey(key);
    }
  };

  return (
    <Box bg="#95A2B2" w="100%" className="min-h-[250px] mt-10 md:h-[250px] lg:h-[250px] grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 py-6 sm:py-8 gap-6 md:gap-0">
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start gap-3 md:gap-5">
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 sm:w-16 sm:h-16" src="/src/assets/sdaire_logo_rm.png" alt="Logo" />
          <div className="text-start">
            <p className="font-bold">S.D-AIR</p>
            <p className="text-xs sm:text-sm">LA DIFFUSION DE L'AIR</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-center md:text-left">
          Copyright @2025 all rights reserved
        </p>
      </div>

     {/* Middle Section (Menu) */}
     <div className="flex flex-col-2 items-center justify-center md:items-start md:justify-start order-3 md:order-none ">
     <Divider orientation="vertical" height="200px" />
        <div className="w-full text-center md:text-left md:ml-5 space-y-3">
          {Menus.map((menu, i) => (
            <div 
              key={menu.name} 
              className="relative w-full" 
            >
              {menu.subMenu ? (
                <button
                  className="flex items-center w-full py-1 hover:text-white justify-center md:justify-start"
                  onClick={() => toggleMenu(i)}
                >
                  <span>{menu.name}</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ml-1 ${openMenu === i ? "rotate-270" : ""}`}
                    size={14}
                  />
                </button>
              ) : (
                <Link to={menu.path || "#"} className="block py-1 hover:text-white">
                  {menu.name}
                </Link>
              )}

              {/* Top-level SubMenu */}
              {menu.subMenu && openMenu === i && (
                <div className="ml-4 pl-4 border-l border-white/20 
                            md:absolute md:top-[-8px] md:left-[180px] md:ml-0 md:pl-0 md:border-l-0
                            bg-[#95A2B2] md:min-w-[200px] md:rounded-lg md:p-2  z-10">
                  {menu.subMenu.map((sub, j) => (
                    <div key={sub.name} className="relative">
                      {sub.subMenu ? (
                        <>
                          <button
                            className="flex items-center w-full py-0 hover:text-white justify-center md:justify-start"
                            onClick={(e) => toggleSubMenu(i, j, e)}
                          >
                            <span>{sub.name}</span>
                            <ChevronDown
                              className={`transition-transform duration-200 ml-1 ${
                                openSubMenuKey === `${i}-${j}` ? "rotate-270" : ""
                              }`}
                              size={12}
                            />
                          </button>
                          
                          {/* Nested Submenu */}
                          {sub.subMenu && openSubMenuKey === `${i}-${j}` && (
                            <div className="ml-4 pl-4 border-l border-white/20
                                      md:absolute md:top-[-8px] md:left-[200px] md:ml-0 md:pl-0 md:border-l-0
                                      bg-[#95A2B2] md:min-w-[200px] md:max-w-[250px] md:rounded-lg md:p-2  z-20
                                      max-h-[200px] md:max-h-[300px] overflow-y-auto">
                              {sub.subMenu.map((deep) => (
                                <Link
                                  key={deep.name}
                                  to={deep.path || "#"}
                                  className="block py-0 px-2 text-sm hover:text-white hover:bg-white/10 rounded-md"
                                >
                                  {deep.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link to={sub.path || "#"} className="block py-0 hover:text-white">
                          {sub.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Contact) */}
      <div className="flex flex-col items-center md:items-end justify-center md:justify-start gap-3 md:gap-5 order-2 md:order-none md:mr-45">
        <div className="text-center ">
          <p className="font-bold text-[#004F87] text-2xl">Contactez Nous</p>
          <p className="text-xs sm:text-sm">
            Par téléphone : <br />
            +216 73 590 888 <br />
            +216 54 554 754
          </p>
          <p className="text-xs sm:text-sm">Par émail : sdairtn@gmail.com</p>
        </div>
        <Center  gap={8} mr={8}>
        <ChakraLink href="https://www.facebook.com/sdairtn/?locale=fr_FR" isExternal >
          <IconButton
            icon={<FaFacebook />}
            aria-label="Facebook Profile"
            fontSize="30px"
            colorScheme="facebook"
            color="#004F87"
          />
        </ChakraLink>
        <ChakraLink href="https://www.linkedin.com/company/sdair-heating-and-air-conditioning/?originalSubdomain=fr" isExternal >
          <IconButton
            icon={<FaLinkedin />}
            aria-label="LinkedIn Profile"
            fontSize="30px"
            colorScheme="linkedin"
            color="#004F87"
          />
        </ChakraLink>
      </Center>
      </div>
    </Box>
  );
};

export default Footer;