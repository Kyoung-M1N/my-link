import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b-4 border-black bg-background dark:border-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <span className="text-2xl font-black uppercase tracking-tighter">Kyoung-Min</span>
          <nav className="hidden gap-8 text-lg font-bold uppercase tracking-tight sm:flex">
            <a href="#about" className="transition-transform hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#skills" className="transition-transform hover:-translate-y-1 hover:text-pink-600 dark:hover:text-pink-400">Skills</a>
            <a href="#projects" className="transition-transform hover:-translate-y-1 hover:text-yellow-600 dark:hover:text-yellow-400">Projects</a>
            <a href="#contact" className="transition-transform hover:-translate-y-1 hover:text-green-600 dark:hover:text-green-400">Contact</a>
          </nav>
          <a
            href="mailto:park48664866@gmail.com"
            className="inline-flex h-12 flex-none items-center justify-center border-4 border-black bg-yellow-400 px-6 text-lg font-black uppercase text-black transition-all hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[8px_8px_0_0_#000] active:translate-y-0 active:translate-x-0 active:shadow-none dark:border-white dark:hover:shadow-[8px_8px_0_0_#FFF]"
          >
            Say Hello
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section id="about" className="flex flex-col items-start gap-8 border-b-4 border-black py-24 dark:border-white md:py-32">
          <div className="inline-block border-4 border-black bg-pink-400 px-4 py-2 dark:border-white">
            <h2 className="text-xl font-black uppercase tracking-widest text-black">Full Stack Developer</h2>
          </div>
          <h1 className="text-6xl font-black uppercase leading-none tracking-tighter sm:text-8xl md:text-9xl">
            Building <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px currentColor' }}>Digital</span> <br />
            Experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-bold leading-relaxed sm:text-3xl">
            I&apos;m Kyoung-Min. A developer focused on creating bold, performant, and user-centric web applications. Unapologetically raw and modern.
          </p>
          <div className="mt-12 flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-16 items-center justify-center border-4 border-black bg-blue-500 px-10 text-xl font-black uppercase text-black shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-2 hover:translate-x-[-4px] hover:shadow-[8px_8px_0_0_#000] active:translate-y-0 active:translate-x-0 active:shadow-none dark:border-white dark:shadow-[4px_4px_0_0_#FFF] dark:hover:shadow-[8px_8px_0_0_#FFF]"
            >
              View My Work
            </a>
            <a
              href="https://github.com/Kyoung-M1N"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 items-center justify-center border-4 border-black bg-white px-10 text-xl font-black uppercase text-black shadow-[4px_4px_0_0_#000] transition-all hover:-translate-y-2 hover:translate-x-[-4px] hover:shadow-[8px_8px_0_0_#000] active:translate-y-0 active:translate-x-0 active:shadow-none dark:border-white dark:shadow-[4px_4px_0_0_#FFF] dark:hover:shadow-[8px_8px_0_0_#FFF]"
            >
              GitHub Profile
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-b-4 border-black py-24 dark:border-white">
          <div className="space-y-16">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">Core Competencies</h2>
              <p className="text-2xl font-bold">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "Next.js", color: "bg-red-400" },
                { name: "React", color: "bg-blue-400" },
                { name: "TypeScript", color: "bg-blue-300" },
                { name: "Node.js", color: "bg-green-400" },
                { name: "Tailwind", color: "bg-cyan-400" },
                { name: "PostgreSQL", color: "bg-indigo-400" },
                { name: "GraphQL", color: "bg-pink-400" },
                { name: "Docker", color: "bg-blue-500" },
                { name: "AWS", color: "bg-orange-400" },
                { name: "Git", color: "bg-red-500" },
                { name: "Framer", color: "bg-purple-400" },
                { name: "Python", color: "bg-yellow-300" }
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`flex h-24 items-center justify-center border-4 border-black ${skill.color} p-4 text-center text-lg font-black uppercase text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:border-white dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] dark:hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)]`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-b-4 border-black py-24 dark:border-white">
          <div className="space-y-16">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">Selected Projects</h2>
              <p className="text-2xl font-bold">Unapologetically bold implementations.</p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              {[
                {
                  title: "E-Commerce",
                  desc: "A headless commerce platform built with Next.js and Shopify API.",
                  img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
                  tagColor: "bg-purple-400"
                },
                {
                  title: "Analytics Dash",
                  desc: "Real-time data visualization tool for monitoring server performance.",
                  img: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?q=80&w=1000&auto=format&fit=crop",
                  tagColor: "bg-green-400"
                }
              ].map((project) => (
                <div key={project.title} className="group relative border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all hover:-translate-y-2 hover:translate-x-[-4px] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] dark:border-white dark:bg-zinc-900 dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] dark:hover:shadow-[12px_12px_0_0_rgba(255,255,255,1)]">
                  <div className="relative aspect-video w-full border-b-4 border-black dark:border-white">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8">
                    <div className={`mb-6 inline-block border-4 border-black ${project.tagColor} px-4 py-2 text-sm font-black uppercase text-black dark:border-white`}>
                      Case Study
                    </div>
                    <h3 className="text-4xl font-black uppercase tracking-tight text-black dark:text-white">{project.title}</h3>
                    <p className="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300">{project.desc}</p>
                    <a href="#" className="mt-8 flex h-16 w-full items-center justify-center border-4 border-black bg-black px-6 text-xl font-black uppercase text-white transition-colors hover:bg-yellow-400 hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-yellow-400">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center border-4 border-black bg-yellow-400 px-6 py-16 text-center shadow-[16px_16px_0_0_rgba(0,0,0,1)] dark:border-white dark:shadow-[16px_16px_0_0_rgba(255,255,255,1)] sm:p-16">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-black sm:text-7xl">Let&apos;s work <br /> together.</h2>
            <p className="mt-8 max-w-2xl text-2xl font-bold text-black">
              Got a project in mind? Unsure where to start? Drop me a line. No BS, just good code.
            </p>
            <div className="mt-12 flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
              <a
                href="mailto:park48664866@gmail.com"
                className="inline-flex h-20 items-center justify-center border-4 border-black bg-pink-400 px-12 text-xl font-black uppercase text-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] active:translate-y-2 active:translate-x-2 active:shadow-none dark:border-white"
              >
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-black py-12 text-white dark:border-white dark:bg-white dark:text-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <span className="text-2xl font-black uppercase tracking-tighter">Kyoung-Min</span>
          <p className="text-lg font-bold">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
