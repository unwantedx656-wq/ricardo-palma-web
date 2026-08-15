"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { PlusCircle, Loader2, CheckCircle2, AlertCircle, CalendarDays } from "lucide-react";

export default function AdminEventosPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    titulo: "",
    fecha: "",
    hora: "",
    lugar: "",
    tipo: "Institucional",
    desc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Basic validation
      if (!formData.titulo || !formData.fecha || !formData.hora || !formData.lugar || !formData.desc) {
        throw new Error("Por favor completa todos los campos requeridos.");
      }

      const { error: supabaseError } = await supabase
        .from('eventos')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({ titulo: "", fecha: "", hora: "", lugar: "", tipo: "Institucional", desc: "" });
    } catch (err: any) {
      setError(err.message || "Error al guardar el evento.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-rp-navy">Gestor de Eventos</h1>
        <p className="text-gray-500 mt-1">Programa y publica las actividades en el Cronograma Institucional.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl">
        <h2 className="text-xl font-bold text-rp-navy mb-6 flex items-center gap-2 border-b pb-4">
          <CalendarDays className="w-5 h-5 text-rp-gold" />
          Programar Nuevo Evento
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5" />
            <p className="font-medium">¡Evento publicado con éxito en el cronograma!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-rp-navy mb-2">Nombre del Evento</label>
            <input 
              required
              type="text" 
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Ej: Día del Logro 2026"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Fecha</label>
              <input 
                required
                type="text" 
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                placeholder="Ej: 10 Noviembre, 2026"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Hora (Inicio - Fin)</label>
              <input 
                required
                type="text" 
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                placeholder="Ej: 08:00 AM - 01:00 PM"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Lugar</label>
              <input 
                required
                type="text" 
                name="lugar"
                value={formData.lugar}
                onChange={handleChange}
                placeholder="Ej: Patio de Honor"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Tipo de Evento</label>
              <select 
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all bg-white"
              >
                <option value="Institucional">Institucional</option>
                <option value="Académico">Académico</option>
                <option value="Cívico">Cívico</option>
                <option value="Deportivo">Deportivo</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-rp-navy mb-2">Descripción</label>
            <textarea 
              required
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              rows={3}
              placeholder="Detalla de qué tratará el evento y quiénes participan..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all resize-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-rp-navy hover:bg-rp-blue text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <PlusCircle className="w-5 h-5" />}
              {loading ? "Programando..." : "Programar Evento"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
