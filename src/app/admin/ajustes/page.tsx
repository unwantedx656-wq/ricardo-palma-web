"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { Settings, Loader2, CheckCircle2, AlertCircle, Upload, Image as ImageIcon } from "lucide-react";

export default function AdminAjustesPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [uploadingHero, setUploadingHero] = useState(false);

  const [formData, setFormData] = useState({
    id: 1, // Asumimos un único registro de ajustes
    telefono: "",
    email: "",
    hero_image: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadAjustes() {
      const { data, error } = await supabase
        .from('ajustes')
        .select('*')
        .eq('id', 1)
        .single();
      
      if (data) {
        setFormData(data);
      }
      setFetching(false);
    }
    loadAjustes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploadingHero(true);
      setError(null);

      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('Debes seleccionar una imagen.');
      }

      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `hero-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('imagenes')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('imagenes')
        .getPublicUrl(filePath);

      setFormData({ ...formData, hero_image: publicUrl });

    } catch (err: any) {
      setError(err.message || 'Error al subir la imagen');
    } finally {
      setUploadingHero(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error: supabaseError } = await supabase
        .from('ajustes')
        .upsert([formData]); // Insertar o actualizar registro con ID 1

      if (supabaseError) throw supabaseError;

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Error al guardar los ajustes.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  if (fetching) {
    return <div className="flex justify-center p-20"><Loader2 className="w-10 h-10 text-rp-gold animate-spin" /></div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-rp-navy">Ajustes Generales</h1>
        <p className="text-gray-500 mt-1">Configura la información global y el diseño base del portal.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl">
        <h2 className="text-xl font-bold text-rp-navy mb-6 flex items-center gap-2 border-b pb-4">
          <Settings className="w-5 h-5 text-rp-gold" />
          Datos del Colegio
        </h2>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5" />
            <p className="font-medium">¡Ajustes guardados correctamente y en vivo!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Teléfono Institucional</label>
              <input 
                type="text" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej: +51 (064) 000-000"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-rp-navy mb-2">Correo Mesa de Partes</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ej: tramite@rpsoriano.edu.pe"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rp-gold focus:ring-2 focus:ring-rp-gold/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-rp-navy mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-rp-gold" />
              Imagen de Portada (Hero)
            </h3>
            
            <div className="flex items-center gap-4">
              <div 
                className="w-32 h-20 rounded-lg bg-gray-100 border border-gray-200 bg-cover bg-center"
                style={{ backgroundImage: formData.hero_image ? `url(${formData.hero_image})` : 'none' }}
              >
                {!formData.hero_image && <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Sin imagen</div>}
              </div>
              
              <div className="flex-1">
                <input 
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleUploadImage}
                />
                <button
                  type="button"
                  disabled={uploadingHero}
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gray-100 hover:bg-gray-200 text-rp-navy font-semibold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 border border-gray-300 disabled:opacity-50"
                >
                  {uploadingHero ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                  Subir desde PC
                </button>
                <p className="text-xs text-gray-500 mt-2">Esta imagen se mostrará en la página principal. Pesa menos de 2MB de preferencia.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button 
              type="submit" 
              disabled={loading || uploadingHero}
              className="bg-rp-navy hover:bg-rp-blue text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
              {loading ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
