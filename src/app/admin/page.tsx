import { Newspaper, CalendarDays, Users, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-rp-navy">Dashboard</h1>
        <p className="text-gray-500 mt-1">Resumen del sistema de gestión de la I.E. Ricardo Palma Soriano.</p>
      </div>

      {/* Tarjetas de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Noticias Publicadas" 
          value="12" 
          trend="+2 esta semana" 
          icon={<Newspaper className="w-6 h-6 text-blue-600" />} 
        />
        <MetricCard 
          title="Próximos Eventos" 
          value="4" 
          trend="Mes actual" 
          icon={<CalendarDays className="w-6 h-6 text-amber-600" />} 
        />
        <MetricCard 
          title="Visitas al Portal" 
          value="845" 
          trend="+15% vs mes anterior" 
          icon={<TrendingUp className="w-6 h-6 text-green-600" />} 
        />
        <MetricCard 
          title="Vacantes Matrícula" 
          value="120" 
          trend="Abierto" 
          icon={<Users className="w-6 h-6 text-purple-600" />} 
        />
      </div>

      {/* Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-rp-navy mb-4 border-b pb-2">Actividad Reciente</h2>
          <ul className="space-y-4">
            <ActivityItem 
              text="Director actualizó los Requisitos de Matrícula" 
              time="Hace 2 horas" 
            />
            <ActivityItem 
              text="Secretaría publicó 'Inicio del Año Escolar 2026'" 
              time="Hace 5 horas" 
            />
            <ActivityItem 
              text="Se añadió 1 evento al Calendario (Feria de Ciencias)" 
              time="Ayer" 
            />
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-rp-ivory rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-rp-gold">💡</span>
          </div>
          <h3 className="text-lg font-bold text-rp-navy">Panel en Construcción</h3>
          <p className="text-sm text-gray-500 mt-2 max-w-sm">
            Este CMS gratuito basado en Next.js se conectará a Supabase para permitir actualización en tiempo real de toda la información del colegio, a costo $0.00.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-rp-navy">{value}</h3>
        </div>
        <div className="p-3 bg-gray-50 rounded-xl">
          {icon}
        </div>
      </div>
      <p className="text-xs font-medium text-gray-500">{trend}</p>
    </div>
  );
}

function ActivityItem({ text, time }: { text: string, time: string }) {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1">
        <div className="w-2.5 h-2.5 bg-rp-gold rounded-full z-10 relative"></div>
        <div className="absolute top-2.5 left-1/2 -ml-px w-px h-full bg-gray-200"></div>
      </div>
      <div className="pb-4">
        <p className="text-sm font-medium text-rp-navy">{text}</p>
        <p className="text-xs text-gray-400 mt-0.5">{time}</p>
      </div>
    </li>
  );
}
