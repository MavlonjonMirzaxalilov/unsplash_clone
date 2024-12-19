//react-router-dom
import { Link } from "react-router-dom";
// react-icons

import { FaDownload, FaMoon, FaSun, FaUnsplash } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

//links
import { useEffect, useState } from "preact/hooks";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { NavLinks } from "./";

//firebase
import { signOut } from "firebase/auth";
import { auth } from "./../firebase/firebaseconfig";
import { toast } from "react-toastify";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "winter";
};

function Navbar() {
  const { likedImages, downloadImages, user } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("You are logged out.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-200">
      <div className="align-elements navbar">
        <div className="navbar-start">
          <Link to={"/"} className="hidden md:flex">
            <FaUnsplash className="h-8 w-8" />
          </Link>
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button">
              <FaUnsplash className="h-8 w-8" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal rounded-box">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-6">
          <Link to={"/download-images"}>
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {downloadImages}
              </span>
              <FaDownload className="h-6 w-6" />
            </div>
          </Link>
          <Link to={"/liked-images"}>
            <div className="indicator">
              <span className="badge indicator-item badge-secondary badge-sm">
                {likedImages.length}
              </span>
              <FaHeart className="h-6 w-6" />
            </div>
          </Link>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-7 w-7 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>
          <div className="flex items-center gap-3 font-display">
            {user.displayName && user.displayName.split(" ")[0]}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt={user.displayName + "avatar"}
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to={'/profile'} className="justify-between">Profile</Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={signOutUser}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
