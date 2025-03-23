import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { IconType } from "react-icons";

interface SubMenu {
  name: string;
  icon?: IconType;
  subMenu?: SubMenu[];
}

interface MenuItem {
  name: string;
  subMenu?: SubMenu[];
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown className={`ml-auto ${isClicked ? "rotate-180" : ""}`} />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, subMenu: nestedSubMenu }, j) => {
                      const isSubClicked = subClicked === j;
                      const hasNestedSubMenu = nestedSubMenu?.length;
                      return (
                        <li key={name}>
                          <span
                            className="p-2 flex-center-between hover:bg-white/5 rounded-md cursor-pointer"
                            onClick={() => setSubClicked(isSubClicked ? null : j)}
                          >
                            {name}
                            {hasNestedSubMenu && (
                              <ChevronDown className={`ml-auto ${isSubClicked ? "rotate-180" : ""}`} />
                            )}
                          </span>
                          {hasNestedSubMenu && (
                            <motion.ul
                              initial="exit"
                              animate={isSubClicked ? "enter" : "exit"}
                              variants={subMenuDrawer}
                              className="ml-5"
                            >
                              {nestedSubMenu.map(({ name }) => (
                                <li
                                  key={name}
                                  className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer"
                                >
                                  {name}
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
