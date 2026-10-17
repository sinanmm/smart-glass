import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-28 lg:py-36 bg-[#F5F9FB] flex items-center justify-center">
      <Container size="narrow">
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-slate-200 text-center shadow-xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#eaf2f8] text-[#286497] flex items-center justify-center mx-auto text-2xl font-black font-mono">
            404
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              The architectural page you are looking for has been relocated or is currently
              unavailable.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              icon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
            <Button
              href="/products"
              variant="secondary"
              size="md"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
