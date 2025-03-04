import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Dhruv Ingale</h1>
      <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
        Frontend Developer | UI/UX Designer | Machine Learning Enthusiast
      </h2>
      <p className="text-lg mb-8 max-w-2xl">📍 Jaysingpur, Kolhapur</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">View Projects</a>
        </Button>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  )
}

