import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <Card>
          <CardHeader>
            <CardTitle>Get In Touch</CardTitle>
            <CardDescription>Feel free to reach out for collaborations or just a friendly chat.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button variant="outline" className="flex justify-start gap-2" asChild>
                <a href="mailto:dhruv.ingale1404@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>dhruv.ingale1404@gmail.com</span>
                </a>
              </Button>

              <Button variant="outline" className="flex justify-start gap-2" asChild>
                <a href="tel:+918180842424">
                  <Phone className="h-4 w-4" />
                  <span>+91-8180842424</span>
                </a>
              </Button>

              <Button variant="outline" className="flex justify-start gap-2" asChild>
                <a href="https://linkedin.com/in/dhruv-ingale-dmw14" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span>linkedin.com/in/dhruv-ingale-dmw14</span>
                </a>
              </Button>

              <Button variant="outline" className="flex justify-start gap-2" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

