export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            I am a passionate Frontend Developer and UI/UX Designer with experience in building interactive web
            applications using React.js and Figma. I also have a keen interest in Machine Learning & Artificial
            Intelligence, currently exploring real-world applications.
          </p>

          <h3 className="text-xl font-semibold mt-6">🎓 Education</h3>
          <ul className="space-y-2">
            <li>B.E. in Computer Engineering – Dwarkadas Jivanlal Sanghvi College of Engineering (CGPA: 8.2)</li>
            <li>Class 12 (77.67%) – Jaysingpur College</li>
            <li>Class 10 (88.60%) – Alphonsa School & Jr. College</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">💡 Interests</h3>
          <p>Automobiles, UI/UX Design, Machine Learning, Badminton, Cricket</p>
        </div>
      </div>
    </section>
  )
}

