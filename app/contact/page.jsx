"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone :",
    description: "(+998) 88 146 46 48"
  },
  {
    icon: <FaEnvelope />,
    title: "Email :",
    description: "info@jasurdev.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address :",
    description: "Tashkent 10000, Uzbeksitan"
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* form */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let`s Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur reprehenderit voluptatum iste, quaerat recusandae ab sunt? Ea dolores, iste optio saepe amet sint, harum deserunt mollitia quam error impedit perferendis perspiciatis dolorem temporibus. Voluptatem dolorum molestias aspernatur, itaque maiores consectetur nemo libero perferendis incidunt nisi. Deserunt voluptatum excepturi debitis labore, sit nostrum neque dignissimos, quis natus temporibus numquam nemo repellat!</p>
              {/* input */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <input type="First Name" placeholder="First Name" />
                <input type="Last Name" placeholder="First Name" />
                <input type="Email" placeholder="Email Address" />
                <input type="Phone" placeholder="Phone Number" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Your Message Here."
              />
              <Button size="md" className="max-w-40 text-center">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div>
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="bg-[#27272c] rounded-md flex items-center justify-center w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>



    </motion.section>
  )
}

export default Contact
