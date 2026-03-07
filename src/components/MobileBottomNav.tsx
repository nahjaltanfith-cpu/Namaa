import { useLocation, Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Target,
  Layers,
  FolderOpen,
  Handshake,
  BarChart3,
  Phone,
} from "lucide-react";

const navItems = [
  { key: "home", href: "/", icon: Home },
  { key: "about", href: "/about", icon: Info },
  { key: "strategy", href: "/strategy", icon: Target },
  { key: "areas", href: "/areas", icon: Layers },
  { key: "projects", href: "/projects", icon: FolderOpen },
  { key: "partnerships", href: "/partnerships", icon: Handshake },
  { key: "impact", href: "/impact", icon: BarChart3 },
  { key: "contact", href: "/contact", icon: Phone },
] as const;

const MobileBottomNav = () => {
  const { lang, t } = useLang();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[100] lg:hidden">
      {/* Glassmorphism background */}
      <div className="bg-white/90 backdrop-blur-2xl border-t border-amber-100/60 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-1 py-2 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const label = t.nav[item.key as keyof typeof t.nav][lang];

            return (
              <Link
                key={item.href}
                to={item.href}
                className="relative flex flex-col items-center gap-0.5 min-w-0 flex-1 group"
              >
                {/* Active background circle */}
                <div className="relative flex items-center justify-center">
                  {active && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute inset-0 w-10 h-10 -m-1 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <div
                    className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      active
                        ? "text-white scale-105"
                        : "text-gray-400 group-hover:text-amber-500 group-hover:bg-amber-50"
                    }`}
                  >
                    <Icon size={active ? 18 : 16} strokeWidth={active ? 2.5 : 1.8} />
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`text-[9px] leading-tight font-bold truncate max-w-[48px] text-center transition-colors duration-300 ${
                    active ? "text-amber-600" : "text-gray-400 group-hover:text-amber-500"
                  }`}
                >
                  {label}
                </span>

                {/* Active dot indicator */}
                {active && (
                  <motion.div
                    layoutId="mobileActiveDot"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-amber-500"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Safe area for iPhone notch */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </nav>
  );
};

export default MobileBottomNav;
