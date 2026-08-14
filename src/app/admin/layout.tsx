import Link from "next/link";
import { LayoutDashboard, Newspaper, CalendarDays, FileText, Settings, LogOut, Image as ImageIcon } from "lucide-react";

export const metadata = {
  title: "Panel de Administración | I.E. Ricardo Palma",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar Desktop */}
      <aside className="w-full md:w-64 bg-rp-navy text-white flex flex-col hidden md:flex shrink-0 border-r border-gray-800">
        <div className="p-6 border-b border-gray-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-rp-gold rounded flex items-center justify-center text-rp-navy font-bold">RP</div>
          <span className="font-bold text-lg tracking-wide">CMS Admin</span>
        </div>
        
        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          <NavItem href="/admin" icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" />
          <NavItem href="/admin/noticias" icon={<Newspaper className="w-5 h-5" />} label="Noticias" />
          <NavItem href="/admin/eventos" icon={<CalendarDays className="w-5 h-5" />} label="Eventos" />
          <NavItem href="/admin/matricula" icon={<FileText className="w-5 h-5" />} label="Matrícula" />
          <NavItem href="/admin/galeria" icon={<ImageIcon className="w-5 h-5" />} label="Galería" />
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <NavItem href="/admin/ajustes" icon={<Settings className="w-5 h-5" />} label="Ajustes" />
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mt-2">
            <LogOut className="w-5 h-5" />
            <span>Volver a la Web</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar Mobile (Minimalista) */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6 md:justify-end justify-between shrink-0">
          <div className="md:hidden flex items-center gap-2 font-bold text-rp-navy">
            <div className="w-6 h-6 bg-rp-navy rounded text-white flex items-center justify-center text-xs">RP</div>
            Admin
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-rp-navy">Director</p>
              <p className="text-xs text-gray-500">admin@rpsoriano.edu.pe</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-rp-blue flex items-center justify-center text-white font-bold border-2 border-rp-ivory shadow-sm">
              DR
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  // Nota: En un proyecto real, se usa `usePathname` de next/navigation para aplicar estado activo.
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
      {icon}
      <span>{label}</span>
    </Link>
  );
}
