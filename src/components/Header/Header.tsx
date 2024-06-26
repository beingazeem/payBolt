import { useState } from 'react';
import { IoFingerPrint } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown, FaBars } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { RoutePath } from '@/routes';
import { FaTimes } from 'react-icons/fa';
import PayBoltLogo from "/assets/images/PayBolt.png"

export const Header = () => {
  const [isSubProductVisible, setIsSubProductVisible] = useState(false);
  const [isSubProductVisibleForMobile, setIsSubProductVisibleForMobile] =
    useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const handleMobileNav = (val: boolean) => {
    setIsMobileNavVisible(val);
  };

  const closeAll = () => {
    setIsSubProductVisible(false);
    setIsMobileNavVisible(false);
  };

  return (
    <header className="border-b border-b-foreground/10 fixed top-0 w-full z-50 bg-background flex justify-between items-center">
      <div className="flex items-center gap-10 h-20 ml-20">
        <Link to={RoutePath.HOME}>
          <div className='flex !items-center !justify-center h-20 w-20'>
              <img
                src={PayBoltLogo}
                loading="lazy"
                // className='h-full'
                content='cover'
              />
          </div>
          {/* <h1 className="text-3xl font-black h-full uppercase">PayBolt</h1> */}
        </Link>
        <nav className="hidden lg:flex items-center gap-5 h-full">
          <ul className="flex items-center gap-5 h-full">
            <div
              className="relative h-[70%] flex items-center"
              onMouseEnter={() => setIsSubProductVisible(true)}
              onMouseLeave={() => setIsSubProductVisible(false)}
            >
              <NavLink
                to={RoutePath.SUB_PRODUCTS[0].path}
                className={({ isActive }) =>
                  `flex items-center gap-1 ${
                    isActive
                      ? 'text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`
                }
              >
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
                      onClick={() => setIsSubProductVisible(false)}
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            {/* <NavLink
          to={RoutePath.ABOUT}
          className={({ isActive }) =>
            isActive
              ? 'text-foreground'
              : 'text-foreground/70 hover:text-foreground'
          }
        >
          About
        </NavLink> */}
            <NavLink
              to={RoutePath.PRICING}
              className={({ isActive }) =>
                isActive
                  ? 'text-foreground'
                  : 'text-foreground/70 hover:text-foreground'
              }
            >
              Pricing
            </NavLink>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:flex items-center gap-5 mr-20">
        <NavLink
          to={RoutePath.LOGIN}
          className={'py-1 px-5 transition-colors font-bold rounded-full'}
        >
          <div className="flex gap-x-2 items-center justify-center">
            <IoFingerPrint />
            Login
          </div>
        </NavLink>

        <NavLink
          to={RoutePath.SIGN_UP}
          className={({ isActive }) => {
            return `py-1 px-5 rounded-full border-foreground/30 transition-colors border font-bold hover:bg-foreground hover:text-background ${
              isActive ? 'bg-foreground text-background' : ''
            }`;
          }}
        >
          Sign up
        </NavLink>
      </div>
      {isMobileNavVisible ? (
        <FaTimes
          className="mr-20 text-2xl block lg:hidden cursor-pointer"
          onClick={() => setIsMobileNavVisible(false)}
        />
      ) : (
        <FaBars
          className="mr-20 text-2xl block lg:hidden cursor-pointer"
          onClick={() => handleMobileNav(true)}
        />
      )}
      <AnimatePresence mode="wait">
        {isMobileNavVisible && (
          <motion.div
            initial={{ opacity: 0, left: '100%' }}
            animate={{ opacity: 1, left: '0%' }}
            exit={{ opacity: 0, left: '100%' }}
            className="fixed top-20 left-0 w-full min-h-2/5 bg-background border-t"
          >
            <ul className="flex items-center flex-col justify-center h-full">
              <div
                className="w-full text-center py-2 px-5 border-foreground/30 transition-colors border-b font-bold hover:bg-foreground hover:!text-background"
                onClick={() => setIsSubProductVisibleForMobile(prev => !prev)}
              >
                <NavLink
                  to={RoutePath.SUB_PRODUCTS[0].path}
                  className="flex items-center gap-1 justify-center"
                >
                  <span>Products</span>
                  <FaAngleDown
                    className={`relative top-0.5 transition-all ${
                      isSubProductVisibleForMobile ? '-rotate-180' : ''
                    }`}
                  />
                </NavLink>
                {isSubProductVisibleForMobile && (
                  <div className="fixed top-32 -translate-x-1/2 left-1/2 flex flex-col gap-1 py-2 px-5 bg-background border border-foreground/5 rounded-lg shadow-lg shadow-foreground/5">
                    {RoutePath.SUB_PRODUCTS.map(({ name, path }) => (
                      <NavLink
                        key={path}
                        to={path}
                        className="hover:text-foreground text-foreground/70"
                        onClick={closeAll}
                      >
                        {name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              {/* <NavLink
        to={RoutePath.ABOUT}
        className={({ isActive }) =>
          isActive
            ? 'text-foreground'
            : 'text-foreground/70 hover:text-foreground'
        }
      >
        About
      </NavLink> */}
              <NavLink
                to={RoutePath.PRICING}
                className={({ isActive }) => {
                  return `w-full text-center py-2 px-5 border-foreground/30 transition-colors border-y font-bold hover:bg-foreground hover:text-background ${
                    isActive ? 'bg-foreground text-background' : ''
                  }`;
                }}
                onClick={closeAll}
              >
                Pricing
              </NavLink>
              <NavLink
                to={RoutePath.LOGIN}
                className={({ isActive }) => {
                  return `w-full text-center py-2 px-5 border-foreground/30 transition-colors border-y font-bold hover:bg-foreground hover:text-background ${
                    isActive ? 'bg-foreground text-background' : ''
                  }`;
                }}
                onClick={closeAll}
              >
                <div
                  className="flex gap-x-2 items-center justify-center"
                  onClick={closeAll}
                >
                  <IoFingerPrint />
                  Login
                </div>
              </NavLink>

              <NavLink
                to={RoutePath.SIGN_UP}
                className={({ isActive }) => {
                  return `w-full text-center py-2 px-5 border-foreground/30 transition-colors border-y font-bold hover:bg-foreground hover:text-background ${
                    isActive ? 'bg-foreground text-background' : ''
                  }`;
                }}
                onClick={closeAll}
              >
                Sign up
              </NavLink>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
