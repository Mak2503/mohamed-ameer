import classNames from "classnames";
import { useCallback, useState } from "react";
import { useAnimationLoop } from "../utils";
// import Menu from "./Menu";
import "./Menu.css";

const items = [
  {
    link: "home",
    text: "Home",
  },
  {
    link: "projects",
    text: "Projects",
  },
  {
    link: "personal",
    text: "Personal",
  },
  {
    link: "contact",
    text: "Contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  useAnimationLoop({
    selector: ".menu-item",
    active: isOpen,
    styles: {
      on: "slide-in",
      off: "slide-out",
    },
  });
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      <div className="sticky w-full bg-transparent h-20 p-10">
        <div className="flex justify-between w-full items-center">
          <div className="flex">
            <a href="/">
              <div
                className="border-2 border-black flex justify-center items-center rounded-full w-11 h-11"
                style={{ border: "3px solid black" }}
              >
                <div className="text-center font-extrabold text-2xl">A</div>
              </div>
            </a>
            <div className="ml-3">
              <div className="font-bold text-xl">Mohamed Ameer</div>
              <div className="" style={{ letterSpacing: "5px", fontSize: 10 }}>
                WEB & UI DESIGNER
              </div>
            </div>
          </div>
          <div className="flex cursor-pointer" onClick={toggleOpen}>
            <div style={{ letterSpacing: 3, fontSize: 13, fontWeight: 700 }}>
              MENU
            </div>
            <div className="flex flex-col ml-2">
              <div className="w-6 bg-black" style={{ height: 3 }}></div>
              <div className="w-6 bg-black my-1" style={{ height: 3 }}></div>
              <div className="w-6 bg-black" style={{ height: 3 }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames("menu", { open: isOpen })}>
        <div className="sticky top-10 h-20 p-10 text-white w-full bg-transparent">
          <div className="flex justify-between items-center">
            <div className="flex">
              <a href="/">
                <div
                  className="flex justify-center items-center rounded-full w-11 h-11"
                  style={{ border: "3px solid white" }}
                >
                  <div className="text-center font-extrabold text-2xl">A</div>
                </div>
              </a>
              <div className="ml-3">
                <div className="font-bold text-left text-xl">Mohamed Ameer</div>
                <div
                  className=""
                  style={{ letterSpacing: "5px", fontSize: 10 }}
                >
                  WEB & UI DESIGNER
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex cursor-pointer" onClick={toggleOpen}>
          <div
            style={{
              letterSpacing: 3,
              fontSize: 13,
              fontWeight: 700,
              color: "white",
            }}
          >
            CLOSE
          </div>
          <div className="flex flex-col ml-2">
            <div
              className="w-6 bg-white"
              style={{ height: 3, transform: "rotate(45deg)" }}
            ></div>
            <div
              className="w-6 bg-white"
              style={{
                height: 3,
                transform: "rotate(135deg)",
                marginBottom: 10,
              }}
            ></div>
          </div>
        </div>
        <ul>
          {items.map((item, idx) => (
            <li className="menu-item">
              <a
                className="menu-link"
                href={`#${item.link}`}
                onClick={toggleOpen}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
