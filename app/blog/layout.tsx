import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation hasBlog />
      {children}
      <Footer />
    </>
  );
}
