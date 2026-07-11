import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
            Alfanro
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
            Modern Developer
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Building beautiful, performant web applications with modern technologies
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                I'm a passionate developer who loves creating elegant solutions to complex problems. 
                With expertise in modern web technologies, I build applications that are both beautiful and functional.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <Card className="border-zinc-200 dark:border-zinc-800">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">5+</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">50+</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">20+</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                    <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">100%</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration and inventory management",
                tags: ["Next.js", "TypeScript", "Stripe"],
                color: "bg-blue-500"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management with real-time updates and team features",
                tags: ["React", "Node.js", "WebSocket"],
                color: "bg-green-500"
              },
              {
                title: "AI Chat Assistant",
                description: "Intelligent chatbot powered by machine learning for customer support",
                tags: ["Python", "TensorFlow", "NLP"],
                color: "bg-purple-500"
              },
              {
                title: "Portfolio Generator",
                description: "Automated portfolio creation tool for developers and designers",
                tags: ["Next.js", "Tailwind", "shadcn"],
                color: "bg-orange-500"
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time data visualization and analytics platform",
                tags: ["D3.js", "PostgreSQL", "API"],
                color: "bg-pink-500"
              },
              {
                title: "Mobile Banking App",
                description: "Secure mobile banking application with biometric authentication",
                tags: ["React Native", "Firebase", "Security"],
                color: "bg-cyan-500"
              }
            ].map((project, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${project.color} rounded-lg mb-4`} />
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-zinc-100 dark:bg-zinc-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"] },
              { category: "Backend", skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
              { category: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] },
              { category: "Tools", skills: ["Git", "VS Code", "Figma", "Postman", "Jest"] }
            ].map((skillGroup, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
          <Card className="border-zinc-200 dark:border-zinc-800">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                />
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100"
                />
                <Button size="lg" className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Portfolio. Built with Next.js and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}
