import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer & UI/UX Designer</CardTitle>
              <CardDescription>Freelance & Academic Projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Built user-friendly interfaces using React.js, HTML, CSS, JavaScript</li>
                <li>Created wireframes, prototypes, and high-fidelity designs in Figma & Adobe XD</li>
                <li>Designed responsive websites with a focus on modern UI/UX principles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Machine Learning & AI Enthusiast</CardTitle>
              <CardDescription>Self-Learning & Kaggle Projects</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Completed Kaggle's Intro to Machine Learning</li>
                <li>Exploring Artificial Intelligence applications and implementing ML techniques</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

