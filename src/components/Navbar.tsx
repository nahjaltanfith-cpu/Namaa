import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
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
  const showTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        showTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-xl shadow-card border-b border-border/50"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg"
          >
            <span className="text-primary-foreground font-cairo font-bold text-lg">ن</span>
          </motion.div>
          <span className={`font-cairo font-bold text-lg transition-colors duration-300 ${
            showTransparent ? "text-primary-foreground" : "text-foreground"
          }`}>
            {lang === "ar" ? "نماء" : "Nama"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive(item.href)
                  ? showTransparent ? "text-primary-foreground" : "text-accent"
                  : showTransparent ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                {item.label}
              </span>
              {/* Active indicator */}
              {isActive(item.href) && (
                <motion.div
                  layoutId="nav-active"
                  className={`absolute inset-0 rounded-lg ${showTransparent ? "bg-primary-foreground/10" : "bg-accent/10"}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {/* Hover indicator */}
              {!isActive(item.href) && (
                <span className={`absolute bottom-0.5 inset-x-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  showTransparent ? "bg-primary-foreground/40" : "bg-accent/40"
                }`} />
              )}
            </Link>
          ))}
        </div>

        {/* Language toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              showTransparent
                ? "bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                : "bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20"
            }`}
          >
            <Globe size={14} />
            {lang === "ar" ? "EN" : "عربي"}
          </motion.button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showTransparent ? "text-primary-foreground hover:bg-primary-foreground/10" : "text-foreground hover:bg-muted"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: lang === "ar" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
