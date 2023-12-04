import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionD1 from "@/components/section-divider";

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>

      <Intro />
      <SectionD1 />
      <About />
      <Projects />
    </main>
  )
}
