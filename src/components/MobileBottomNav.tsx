import { useLocation, Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Shield,
  Users,
  FileText,
  FolderOpen,
  Phone,
} from "lucide-react";

const navItems = [
  { key: "home", href: "/", icon: Home },
  { key: "about", href: "/about", icon: Info },
  { key: "governance", href: "/governance", icon: Shield },
  { key: "beneficiaries", href: "/beneficiaries", icon: Users },
  { key: "reports", href: "/reports", icon: FileText },
  { key: "projects", href: "/projects", icon: FolderOpen },
  { key: "contact", href: "/contact", icon: Phone },
] as const;

const MobileBottomNav = () => {
  const { lang, t } = useLang();
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed bottom-3 inset-x-0 z-[100] lg:hidden flex justify-center px-3">
      <div className="w-[92%] max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100">
        <div className="flex items-center justify-between px-3 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const label = t.nav[item.key as keyof typeof t.nav][lang];

            return (
              <Link
                key={item.href}
                to={item.href}
                className="relative flex flex-col items-center gap-1.5 min-w-0 px-1 group"
              >
                {/* Icon circle */}
                <div className="relative flex items-center justify-center">
                  {active && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <div
                    className={`relative z-10 w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-gray-500 group-hover:text-amber-500 group-hover:bg-amber-50/60"
                    }`}
                  >
                    <Icon size={active ? 20 : 19} strokeWidth={active ? 2.5 : 2} />
                  </div>
                </div>

                {/* Label */}
                <span
                  className={`text-[10px] leading-none font-extrabold truncate max-w-[52px] text-center transition-colors duration-300 ${
                    active ? "text-amber-600" : "text-gray-800"
                  }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
