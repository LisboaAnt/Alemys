import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white p-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          © 2025 Alémsys. Todos os direitos reservados.
        </p>

        <div className="flex gap-5">
          <Button variant="ghost">
            Termos
          </Button>
          <Button variant="ghost">
            Privacidade
          </Button>
          <Button variant="ghost">
            Contato
          </Button>
        </div>
      </div>
    </footer>
  )
}