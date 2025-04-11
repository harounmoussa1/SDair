import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { IconType } from "react-icons";
import { Link } from "react-router"; // <-- Make sure it's from react-router-dom

interface SubMenu {
  name: string;
  icon?: IconType;
  subMenu?: SubMenu[];
  path?: string;
}

interface MenuItem {
  name: string;
  subMenu?: SubMenu[];
  path?: string;
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const [subClicked, setSubClicked] = useState<number | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setSubClicked(null);
  };

  const subMenuDrawer = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, path }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                {hasSubMenu ? (
                  <span
                    className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    {name}
                    <ChevronDown className={`ml-auto ${isClicked ? "rotate-180" : ""}`} />
                  </span>
                ) : (
                  <Link
                    to={path || "#"}
                    className="block p-4 hover:bg-white/5 rounded-md cursor-pointer"
                    onClick={toggleDrawer}
                  >
                    {name}
                  </Link>
                )}

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, path, subMenu: nestedSubMenu }, j) => {
                      const isSubClicked = subClicked === j;
                      const hasNestedSubMenu = nestedSubMenu?.length;
                      return (
                        <li key={name}>
                          {hasNestedSubMenu ? (
                            <span
                              className="p-2 flex-center-between hover:bg-white/5 rounded-md cursor-pointer"
                              onClick={() => setSubClicked(isSubClicked ? null : j)}
                            >
                              {name}
                              <ChevronDown className={`ml-auto ${isSubClicked ? "rotate-180" : ""}`} />
                            </span>
                          ) : (
                            <Link
                              to={path || "#"}
                              className="p-2 block hover:bg-white/5 rounded-md cursor-pointer"
                              onClick={toggleDrawer}
                            >
                              {name}
                            </Link>
                          )}

                          {hasNestedSubMenu && (
                            <motion.ul
                              initial="exit"
                              animate={isSubClicked ? "enter" : "exit"}
                              variants={subMenuDrawer}
                              className="ml-5"
                            >
                              {nestedSubMenu.map(({ name, path }) => (
                                <li key={name}>
                                  <Link
                                    to={path || "#"}
                                    className="p-2 block hover:bg-white/5 rounded-md cursor-pointer"
                                    onClick={toggleDrawer}
                                  >
                                    {name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
