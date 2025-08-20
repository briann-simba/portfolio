import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory tracking, and customer management features.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A cross-platform mobile application for team collaboration and project management with real-time synchronization and offline support.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
    technologies: ["React Native", "Firebase", "Redux"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Analytics Platform",
    description: "An intelligent data analytics platform that uses machine learning to provide predictive insights and automated reporting for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
    technologies: ["Python", "Django", "TensorFlow"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Platform",
    description: "A full-featured social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=300",
    technologies: ["Vue.js", "Express", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

const techColors = {
  "React": "bg-blue-100 text-blue-800",
  "Node.js": "bg-green-100 text-green-800",
  "PostgreSQL": "bg-purple-100 text-purple-800",
  "React Native": "bg-cyan-100 text-cyan-800",
  "Firebase": "bg-orange-100 text-orange-800",
  "Redux": "bg-red-100 text-red-800",
  "Python": "bg-yellow-100 text-yellow-800",
  "Django": "bg-indigo-100 text-indigo-800",
  "TensorFlow": "bg-green-100 text-green-800",
  "Vue.js": "bg-blue-100 text-blue-800",
  "Express": "bg-green-100 text-green-800",
  "Socket.io": "bg-gray-100 text-gray-800"
};

export default function ProjectsGallery() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="projects" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A collection of projects that showcase my technical skills and creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer"
              data-testid={`project-card-${index}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-sm ${techColors[tech] || 'bg-gray-100 text-gray-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    className="text-primary hover:text-blue-700 font-semibold transition-colors"
                    data-testid={`button-view-details-${index}`}
                  >
                    View Details →
                  </button>
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      data-testid={`link-demo-${index}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      data-testid={`link-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
