"use client";

import { LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <button 
      onClick={handleLogout}
      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mt-2"
    >
      <LogOut className="w-5 h-5" />
      <span>Cerrar Sesión</span>
    </button>
  );
}
