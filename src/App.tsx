import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Mail, Github, Linkedin,  } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "A web application built with React and Django",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Project 2",
    description: "Python-based data analysis tool",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Project 3",
    description: "JavaScript game development",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-orange-500">Shantal Rohbi's Portfolio</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-orange-500 hover:text-orange-600">Home</a>
              <a href="#about" className="text-orange-500 hover:text-orange-600">About</a>
              <a href="#projects" className="text-orange-500 hover:text-orange-600">Projects</a>
              <a href="#skills" className="text-orange-500 hover:text-orange-600">Skills</a>
              <a href="#contact" className="text-orange-500 hover:text-orange-600">Contact</a>
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-orange-500">Home</a>
              <a href="#about" className="block px-3 py-2 text-orange-500">About</a>
              <a href="#projects" className="block px-3 py-2 text-orange-500">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-orange-500">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-orange-500 bg-opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`text-white md:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Shantal Rohbi</h1>
              <p className="text-xl mb-8"> I'm a web developer with a passion for creating creative and innovative websites</p>
            </div>
            <div className={`md:w-1/2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <img 
                src="/images/shan.jpg" 
                alt="" 
                className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/shan.jpg" 
                alt="About me" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a passionate developer who strives to create innovative and creative websites. 
                With expertise in modern web technologies, I bring ideas to life through clean code 
                and beautiful design. My goal is to build applications that not only look great but 
                also provide exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['JavaScript', 'Python', 'Django', 'React'].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Code className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">Projects</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-r from-orange-500 to-white rounded-lg overflow-hidden shadow-lg">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full">
              ←
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-16">Contact</h2>
          <div className="flex justify-center space-x-8">
            <a href="mailto:your.email@example.com" className="flex items-center text-orange-500 hover:text-orange-600">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-600">
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-600">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;