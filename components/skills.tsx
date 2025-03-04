import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "🛠 Languages",
      skills: ["Python", "JavaScript", "Java", "C", "C++"],
    },
    {
      title: "🌐 Web Development",
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Node.js"],
    },
    {
      title: "🎨 UI/UX Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    },
    {
      title: "📊 Machine Learning",
      skills: ["pandas", "scikit-learn"],
    },
    {
      title: "🗄 Databases",
      skills: ["MySQL", "Firebase"],
    },
    {
      title: "📌 Version Control",
      skills: ["Git", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary">
                  🏆
                </Badge>
                <span className="font-medium">Machine Learning – Kaggle</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

