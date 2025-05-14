"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    id: 1,
    title: "Zetbazar-Ecommerce",
    description: "A full-featured e-commerce platform built with Next.js, React Js, and Stripe for payments. Includes user authentication, product management, and order tracking.",
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "React js", "Rest Api","Redux", "Tailwind CSS"],
    demoUrl: "https://www.zetbazar.com/",
    // githubUrl: "#",
  },
  {
    id: 2,
    title: "Finance Tracker",
    description: "The goal of this project is to provide a simple and user-friendly interface where users can track their daily spending, set budget goals, and view detailed financial reports. This tool is designed to promote better financial habits and give users a clear overview of their financial health.",
    image: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    demoUrl: "https://financeapp-two-pi.vercel.app/",
    // githubUrl: "#",
  },
  // {
  //   id: 3,
  //   title: "Recipe Finder",
  //   description: "An app that helps users discover recipes based on ingredients they have at home. Features recipe search, filtering by dietary restrictions, and saving favorites.",
  //   image: "https://images.pexels.com/photos/6294452/pexels-photo-6294452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["React Native", "Node.js", "MongoDB", "Express"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 4,
  //   title: "Weather Dashboard",
  //   description: "A real-time weather dashboard with 7-day forecasts, location-based weather data, and interactive maps showing weather patterns.",
  //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}