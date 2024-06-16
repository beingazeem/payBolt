import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa6';
import { RoutePath } from '@/routes';

export const Header = () => {
  const [isSubProductVisible, setIsSubProductVisible] = useState(false);
  return (
    <header className="border-b border-b-foreground/10 fixed top-0 w-full z-header bg-background">
      <nav className="w-11/12 md:w-[65%] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10 h-20">
          <Link to={RoutePath.HOME}>
            <h1 className="text-3xl font-bold h-full">LOGO</h1>
          </Link>
          <ul className="flex items-center gap-5 h-full">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }>
              About
            </NavLink>
            <div
              className="relative h-[70%] flex items-center"
              onMouseEnter={() => setIsSubProductVisible(true)}
              onMouseLeave={() => setIsSubProductVisible(false)}>
              <NavLink
                to={RoutePath.PRODUCTS}
                className={({ isActive }) =>
                  `flex items-center gap-1 ${
                    isActive
                      ? 'text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`
                }>
                <span>Products</span>
                <FaAngleDown
                  className={`relative top-0.5 transition-all ${
                    isSubProductVisible ? '-rotate-180' : ''
                  }`}
                />
              </NavLink>
              {isSubProductVisible && (
                <div className="fixed top-16 -translate-x-7 flex flex-col gap-1 py-2 px-5 bg-background border border-foreground/5 rounded-lg shadow-lg shadow-foreground/5">
                  {RoutePath.SUB_PRODUCTS.map(({ name, path }) => (
                    <NavLink
                      key={path}
                      to={path}
                      className="hover:text-foreground text-foreground/70"
                      onClick={() => setIsSubProductVisible(false)}>
                      {name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <NavLink
              to={RoutePath.PRICING}
              className={({ isActive }) =>
                isActive
                  ? 'text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }>
              Pricing
            </NavLink>
          </ul>
        </div>
        <ul className="flex items-center gap-5">
          <NavLink
            to={RoutePath.LOGIN}
            className={'py-1 px-5  transition-colors  font-bold '}>
            Login
          </NavLink>
          <NavLink
            to={RoutePath.SIGN_UP}
            className={({ isActive }) => {
              return `py-1 px-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background ${
                isActive ? 'bg-foreground text-background' : ''
              }`;
            }}>
            Sign up
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};
