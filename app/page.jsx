import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaReadme } from "react-icons/fa";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              <span className="text-accent">Jasur Khamzayev</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">"In the digital age and we code the future where imagination meets innovation!"
            </p>
            {/* CV and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <a href="/assets/resume.pdf"><span>Download CV</span></a>
                <FiDownload className="text-xl" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <a href="https://blog.jasurdev.com"><span>Read Blog</span></a>
                <FaReadme className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-accent rounded-full
                flex justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-600"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Footer/>
    </section>
  )
}

export default Home
