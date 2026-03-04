import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Globe, Search } from "lucide-react";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t.nav.home[lang], href: "/" },
    { label: t.nav.about[lang], href: "/about" },
    { label: t.nav.strategy[lang], href: "/strategy" },
    { label: t.nav.areas[lang], href: "/areas" },
    { label: t.nav.projects[lang], href: "/projects" },
    { label: t.nav.partnerships[lang], href: "/partnerships" },
    { label: t.nav.impact[lang], href: "/impact" },
    { label: t.nav.contact[lang], href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 md:px-8 py-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
          ${scrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-1 rounded-2xl border border-white/40" 
            : "bg-white py-1.5 rounded-2xl shadow-sm border border-transparent"
          }`}
      >
        <div className="flex items-center justify-between px-5 md:px-8">
          
          {/* Logo - Large & Clear */}
          <Link to="/" className="relative flex-shrink-0">
            <motion.img
              src={logo}
              alt="Logo"
              className={`transition-all duration-500 object-contain ${
                scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          {/* Desktop Nav - Clean & Bold */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100/40 p-1 rounded-xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-4 py-2 text-[13px] font-black uppercase tracking-tight transition-all"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(item.href) ? "text-primary" : "text-gray-600 hover:text-black"
                }`}>
                  {item.label}
                </span>

                {isActive(item.href) && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white shadow-sm rounded-lg"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex p-2.5 text-gray-500 hover:text-primary transition-colors">
              <Search size={20} strokeWidth={2.5} />
            </button>

            <button
              onClick={toggleLang}
              className="px-4 py-2 rounded-lg text-[12px] font-black border-2 border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-all text-gray-800"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gray-900 text-white hover:bg-primary transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Glass Card Style */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mx-auto w-[95%] max-w-[400px] lg:hidden"
            >
              <div className="bg-white/90 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl overflow-hidden p-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        className={`flex items-center px-5 py-4 rounded-2xl text-[15px] font-black transition-all ${
                          isActive(item.href)
                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                            : "text-gray-700 hover:bg-gray-100/50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-2 p-3 bg-gray-50/50 rounded-2xl flex items-center justify-between">
                   <p className="text-[10px] font-black uppercase text-gray-400 px-2 tracking-widest">Nama Platform</p>
                   <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-primary"><Search size={16}/></div>
                      <div onClick={toggleLang} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm font-bold text-[12px]">{lang === "ar" ? "EN" : "AR"}</div>
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