import React from 'react';
import { useState } from 'react';
import { Linkedin } from './Components/linkedin';
import { Git } from './Components/git';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h1 className="text-6xl font-bold font-serif">Portfolio</h1>
        <p className="text-xl mt-4">Harsh Pandey | Web Developer | Entrepreneur</p>
        <div className="mt-8 flex gap-6">
          <Linkedin />
          <Git />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <div className="bg-white shadow-xl rounded-lg p-8 text-lg leading-relaxed text-gray-800">
          <p>
            Hello There! My name is Harsh Pandey. I am a passionate web developer with expertise in HTML, CSS, JavaScript,
            React, and Java. My journey has been enriched by diverse experiences, including working as an Outreach Expert
            during my non-tech internship at Hypedin, where I honed my skills in building relationships and driving impactful
            campaigns.
          </p>
          <p className="mt-4">
            I am actively working on launching two ventures:
            <ul className="list-disc ml-6 mt-2">
              <li>
                <strong>TheCoderz:</strong> An e-learning platform designed to empower aspiring developers with practical
                knowledge.
              </li>
              <li>
                <strong>NEXUS:</strong> A dynamic web development agency committed to delivering innovative solutions tailored
                to client needs.
              </li>
            </ul>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 bg-gray-200">
        <h2 className="text-4xl font-bold text-center mb-6 text-black">Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Java'].map((skill) => (
            <span
              key={skill}
              className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <a
            href="https://github.com/HarshPandey-5804/Manga-Library-Management-System"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-indigo-500/50"
          >
            <h3 className="text-xl font-bold mb-2">Library Management System - JAVA</h3>
            <p className="text-gray-600">A Java-based project for managing library operations.</p>
          </a>
          <a
            href="https://github.com/HarshPandey-5804/Password-generator"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg p-6 hover:shadow-indigo-500/50"
          >
            <h3 className="text-xl font-bold mb-2">Password Generator - React</h3>
            <p className="text-gray-600">A React-based tool to generate secure passwords.</p>
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <h2 className="text-4xl font-bold text-center mb-6">Let’s Collaborate!</h2>
        <p className="text-center text-lg mb-6">
          Reach out to me for web development projects, collaborations, or any inquiries.
        </p>
        <p className="text-center text-lg font-semibold">
          Email: <a href="mailto:harshpandey0504@gmail.com" className="underline">harshpandey0504@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;
