import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Search } from "lucide-react";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home[lang], href: "/" },
    { label: t.nav.about[lang], href: "/about" },
    { label: t.nav.governance[lang], href: "/governance" },
    { label: t.nav.beneficiaries[lang], href: "/beneficiaries" },
    { label: t.nav.reports[lang], href: "/reports" },
    { label: t.nav.projects[lang], href: "/projects" },
    { label: t.nav.contact[lang], href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none hidden lg:block">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full pointer-events-auto transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-sm border-b border-amber-500/20 py-1.5"
      >
        <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" className="relative flex-shrink-0">
            <motion.img
              src={logo}
              alt="Logo"
              className="transition-all duration-500 object-contain h-12 md:h-14 drop-shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-4 py-2 text-[14px] font-bold uppercase tracking-wide transition-all group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(item.href) ? "text-amber-600" : "text-gray-600 group-hover:text-amber-500"
                }`}>
                  {item.label}
                </span>

                {isActive(item.href) && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-amber-50 border border-amber-100/50 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            

            <button
              onClick={toggleLang}
              className="px-4 py-1.5 rounded-md text-[13px] font-bold border border-gray-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600 transition-all text-gray-700"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-50 text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors border border-gray-100"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 w-full lg:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-xl"
            >
              <div className="px-4 py-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center px-5 py-3.5 rounded-xl text-[15px] font-black transition-all ${
                        isActive(item.href)
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "text-gray-700 hover:bg-gray-50 hover:text-amber-500"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="mt-4 p-4 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                   <p className="text-[11px] font-black uppercase text-gray-400 tracking-widest">Nama Platform</p>
                   <div className="flex gap-2.5">
                     
                      <div 
                        onClick={toggleLang} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm font-bold text-[13px] text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors cursor-pointer"
                      >
                        {lang === "ar" ? "EN" : "AR"}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;