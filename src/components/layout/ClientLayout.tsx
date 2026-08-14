import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
