"use client";

import { useState } from "react";
import { CheckCircle2, Clock, CalendarDays, FileText, AlertTriangle, ChevronRight, BookOpen, PenTool, Sun, Moon } from "lucide-react";
import { ClientLayout } from "@/components/layout/ClientLayout";

export default function MatriculaPage() {
  const [activeTab, setActiveTab] = useState<"primaria" | "secundaria">("primaria");

  return (
    <ClientLayout>
      <main className="flex-1 bg-rp-ivory py-16 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-rp-navy/5 to-transparent z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rp-gold/10 rounded-full blur-3xl z-0" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* Encabezado Premium */}
          <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-rp-gold font-bold text-sm tracking-wide mb-2">
              <span className="w-2 h-2 rounded-full bg-rp-gold animate-pulse" />
              Proceso 2026 Abierto
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-rp-navy">
              Información Académica <br/>
              <span className="text-gradient-gold">y Proceso de Matrícula</span>
            </h1>
            <p className="text-lg text-rp-navy/70 max-w-2xl mx-auto font-light leading-relaxed">
              Encuentra aquí todo lo que necesitas saber sobre horarios, útiles escolares y los pasos exactos para asegurar la vacante de tu hijo(a) en nuestra institución.
            </p>
          </div>

          {/* Selector de Niveles (Tabs) */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full premium-shadow flex items-center gap-2 border border-gray-100">
              <button 
                onClick={() => setActiveTab("primaria")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === "primaria" ? "bg-rp-navy text-white shadow-md" : "text-gray-500 hover:text-rp-navy hover:bg-gray-50"}`}
              >
                <BookOpen className="w-4 h-4" />
                Nivel Primaria
              </button>
              <button 
                onClick={() => setActiveTab("secundaria")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${activeTab === "secundaria" ? "bg-rp-navy text-white shadow-md" : "text-gray-500 hover:text-rp-navy hover:bg-gray-50"}`}
              >
                <PenTool className="w-4 h-4" />
                Nivel Secundaria (Técnica)
              </button>
            </div>
          </div>

          {/* Contenido Dinámico por Tab */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Columna Izquierda: Horarios y Útiles */}
              <div className="lg:col-span-1 space-y-8">
                {/* Tarjeta de Horario */}
                <div className="bg-white rounded-3xl p-8 premium-shadow border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rp-gold/20 to-transparent rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                  
                  <h3 className="text-2xl font-serif font-bold text-rp-navy mb-6 flex items-center gap-3">
                    {activeTab === "primaria" ? <Sun className="w-6 h-6 text-rp-amber" /> : <Moon className="w-6 h-6 text-rp-blue" />}
                    Horario de Clases
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Turno</p>
                        <p className="font-bold text-rp-navy">{activeTab === "primaria" ? "Mañana" : "Tarde (Extendida)"}</p>
                      </div>
                      <Clock className="w-6 h-6 text-rp-gold opacity-50" />
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <TimeRow label="Ingreso" time={activeTab === "primaria" ? "07:45 AM" : "01:00 PM"} />
                      <TimeRow label="Recreo" time={activeTab === "primaria" ? "10:15 AM - 10:45 AM" : "03:30 PM - 04:00 PM"} highlight />
                      <TimeRow label="Salida" time={activeTab === "primaria" ? "01:00 PM" : "06:30 PM"} />
                    </div>
                    
                    {activeTab === "secundaria" && (
                      <p className="text-xs text-gray-500 italic mt-4">
                        * El horario de secundaria es extendido debido a las horas prácticas de los Talleres de Formación Técnica (EPT).
                      </p>
                    )}
                  </div>
                </div>

                {/* Tarjeta de Útiles Escolares */}
                <div className="bg-rp-navy text-white rounded-3xl p-8 premium-shadow relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 p-6 opacity-10">
                    <FileText className="w-24 h-24" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-rp-gold mb-4">Lista de Útiles Base</h3>
                  <ul className="space-y-3 mb-6 relative z-10">
                    {activeTab === "primaria" ? (
                      <>
                        <ReqItem text="Cuadernos A4 Triple Reglón" light />
                        <ReqItem text="Colores, plumones y crayones" light />
                        <ReqItem text="Block de hojas bond A4" light />
                        <ReqItem text="Cartuchera básica" light />
                      </>
                    ) : (
                      <>
                        <ReqItem text="Cuadernos A4 Cuadriculados" light />
                        <ReqItem text="Calculadora Científica (3ro-5to)" light />
                        <ReqItem text="Kit Geométrico completo" light />
                        <ReqItem text="Materiales específicos según Taller EPT" light />
                      </>
                    )}
                  </ul>
                  <button className="w-full py-3 px-4 glass text-white font-bold rounded-xl hover:bg-white/20 transition-all flex justify-center items-center gap-2">
                    Descargar PDF Oficial <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Columna Derecha: Requisitos de Matrícula (Ocupa 2 espacios) */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl p-8 md:p-10 premium-shadow border border-gray-100">
                  <h2 className="text-3xl font-serif font-bold text-rp-navy mb-8 border-b border-gray-100 pb-4">
                    Requisitos de Matrícula 2026
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-lg text-rp-blue mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-rp-blue/10 flex items-center justify-center text-rp-blue">1</span>
                        Documentos del Estudiante
                      </h4>
                      <ul className="space-y-4">
                        <ReqItem text="Copia DNI del estudiante (actualizado)." />
                        <ReqItem text="Copia de la Ficha Única de Matrícula (SIAGIE)." />
                        <ReqItem text="Certificado de Estudios Oficial." />
                        {activeTab === "primaria" && (
                          <ReqItem text="Copia del Carné de Vacunación y Tamizaje." />
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-rp-blue mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-rp-blue/10 flex items-center justify-center text-rp-blue">2</span>
                        Documentos del Apoderado
                      </h4>
                      <ul className="space-y-4">
                        <ReqItem text="Copia DNI del padre, madre o apoderado legal." />
                        <ReqItem text="Recibo de luz o agua (para verificar residencia)." />
                        <ReqItem text="Firma del Compromiso de Honor 2026." />
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl flex gap-4 text-amber-800">
                    <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-lg mb-1">Educación 100% Gratuita</p>
                      <p className="text-sm opacity-90 leading-relaxed">
                        La matrícula en nuestra institución pública <strong>no está condicionada a ningún pago de APAFA</strong>, donaciones o compra de uniformes de marcas específicas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cronograma MINEDU Minimalista */}
                <div className="glass rounded-3xl p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-rp-navy flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-rp-gold" /> Cronograma Oficial
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <DateCard date="15 Dic - 29 Dic" label="Cálculo de Vacantes" />
                    <DateCard date="02 Ene - 15 Ene" label="Recepción de Solicitudes" active />
                    <DateCard date="22 Ene 2026" label="Publicación de Resultados" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </ClientLayout>
  );
}

// Subcomponentes para limpieza visual
function TimeRow({ label, time, highlight = false }: { label: string, time: string, highlight?: boolean }) {
  return (
    <div className={`flex justify-between items-center pb-3 border-b border-gray-100 last:border-0 last:pb-0 ${highlight ? 'text-rp-blue font-semibold' : 'text-gray-600'}`}>
      <span>{label}</span>
      <span>{time}</span>
    </div>
  );
}

function ReqItem({ text, light = false }: { text: string, light?: boolean }) {
  return (
    <li className={`flex items-start gap-3 text-sm ${light ? 'text-white/90' : 'text-gray-600'}`}>
      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${light ? 'text-rp-gold' : 'text-rp-gold'}`} />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}

function DateCard({ date, label, active = false }: { date: string, label: string, active?: boolean }) {
  return (
    <div className={`flex-1 p-4 rounded-2xl border ${active ? 'bg-white border-rp-gold shadow-md' : 'bg-white/50 border-gray-200'}`}>
      <p className={`text-sm font-bold mb-1 ${active ? 'text-rp-gold' : 'text-gray-500'}`}>{date}</p>
      <p className="text-sm font-medium text-rp-navy">{label}</p>
    </div>
  );
}
