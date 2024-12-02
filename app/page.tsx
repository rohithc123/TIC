'use client'
import art_ribbon from '@/public/art_ribbon.jpg'
import expand_more from '@/public/expand_more.svg'
import hero from '@/public/hero.png'
import location from '@/public/location.svg'
import nontech_ticket from '@/public/nontech-ticket.png'
import tech_ticket from '@/public/tech-ticket.png'
import sponsor_expleo from '@/public/sponsor_expleo.png'
import sponsor_slam from '@/public/sponsor_slam.jpeg'
import sponsor_art from '@/public/sponsor_art.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // const { scrollYProgess } = useScroll(({ scrollYProgress }) => scrollYProgress, {
  //   target: ref,
  // });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])
  const backgroundX = useTransform(scrollYProgress, [0, 1], ['-150%', '200%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  useEffect(() => {
    AOS.init({ duration: 600 })
  }, [])

  return (
    <main ref={ref} className="flex flex-col items-center md:max-w-[768px]">
      <header className="pt-20 flex flex-col items-center min-h-[100svh] md:h-fit justify-around">
        <motion.div style={{ y: backgroundY }}>
          <Image
            src={hero}
            alt="Vector logo of a red-yellow lion"
            width={500}
            height={500}
            priority={true}
            loading="eager"
            placeholder="blur"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="bg-black  items-center justify-around flex flex-col">
          <div className="text-2xl text-center mt-8">
            <div style={rubik.style} className="text-3xl font-medium">
              November 3
            </div>
            <div className="text-void-300 flex">
              @ Easwari Engineering College
              <Link
                className="hidden md:block"
                prefetch={false}
                href="https://www.google.com/maps/place/SRM+Easwari+Engineering+College/@13.0314424,80.1793613,18z/data=!4m6!3m5!1s0x3a5260d62bc6942b:0x8cd23707b2ddfb87!8m2!3d13.031723!4d80.1795949!16s%2Fm%2F0h3snc4?entry=ttu"
              >
                <Image src={location} height={32} width={32} alt="" />
              </Link>

            </div>
            <div className="mt-1 text-xs text-void-300">
              Online registrations will close at 11:00 AM on November 2, 2023.
            </div>
          </div>
          <Image
            src={expand_more}
            alt=""
            width={58}
            height={58}
            className="m-12 md:mt-24 animate animate-bounce"
          />
        </div>
      </header>

      <div className="w-screen grid justify-items">
        <div className="mx-4 rounded-lg overflow-hidden md:max-w-[80%]  mt-8 justify-self-center">
          <video autoPlay muted loop>
            <source src="/promo.webm" type="video/webm" />
            <source src="/promo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Art Ribbon Divider */}
      <div className="relative overflow-hidden min-h-[140px] w-full my-16 md:mb-8">
        <Image
          className="object-cover md:object-contain"
          src={art_ribbon}
          alt=""
          fill
        />
      </div>

      {/* Events section */}
      <section className="w-full">
        <h2
          style={rubik.style}
          className="text-3xl border-b-[1px] border-void-500 pb-[4px] mx-6"
          data-aos="fade-down"
        >
          Events
        </h2>

        {/* Stats grid */}
        <div
          className="my-10 md:my-16 px-8 flex flex-col md:flex-row"
          data-aos="fade-down"
        >
          {/* Stat row */}
          <div className="flex flex-row mb-8 md:mb-0 md:w-1/2">
            <div className="w-1/2">
              <div className="text-3xl font-semibold">21</div>
              <div className="text-2xl leading-6 text-void-200">events</div>
            </div>
            <div className="w-1/2">
              <div className="text-3xl font-semibold">593</div>
              <div className="text-2xl leading-6 text-void-200">
                participants
              </div>
            </div>
          </div>

          {/* Stat row */}
          <div className="flex flex-row md:w-1/2" data-aos="fade-down">
            <div className="w-1/2">
              <div className="text-3xl font-semibold">150+</div>
              <div className="text-2xl leading-6 text-void-200">prizes</div>
            </div>
            {/* <div className="w-1/2">
              <div className="text-3xl font-semibold">32</div>
              <div className="text-2xl leading-6 text-void-200">
                placeholder
              </div>
            </div> */}
          </div>
        </div>

        {/* cards */}
        <div className="flex flex-col items-center px-2 gap-8 md:gap-16">
          <Link
            data-aos="flip-up"
            href="/events/technical"
            className="mt-2 md:mt-0 md:px-2  "
          >
            <Image
              className="transition hover:scale-105"
              src={tech_ticket}
              alt="Ticket shape that read non techincal events"
            />
          </Link>

          <Link
            data-aos="flip-up"
            href="/events/nontechnical"
            className="transition mt-8 md:mt-0 md:px-2  "
          >
            <Image
              className="transition hover:scale-105"
              src={nontech_ticket}
              alt="Ticket shape that read techincal events"
            />
          </Link>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full">
        <h2
          style={rubik.style}
          className="text-3xl border-b-[1px] border-void-500 pb-[4px] mx-6 mt-10"
        >
          Sponsors
        </h2>

        <div className="flex flex-col items-center px-2 mt-2 gap-8 md:gap-10">
          <div className="mt-2  flex flex-col items-center text-center text-void-300">
            <p>
              Title Sponsor
            </p>
            <div className="mt-2 md:-mt-3 md:px-2">
              <Link
                href=""
                className="md:mt-0 md:px-2  pointer-events-none"
              >

                <Image
                  src={sponsor_slam}
                  alt=""
                  height={70}
                />
              </Link>
            </div>
          </div>

          <div className="mt-1  flex flex-col items-center text-center text-void-300">
            <p>
              Technical Events Sponsor
            </p>

            <div className=" md:mt-0 md:px-2">
              <Link
                href="https://expleo.com/global/en/"
              >
                <Image
                  className="transition hover:scale-105"
                  src={sponsor_expleo}
                  alt=""
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center text-center text-void-300  ">
            <div>
              <p>
                Non Technical Events sponsor
              </p>
            </div>

            <div className="mt-5 md:mt-5 md:px-2">
              <Link
                href=""

              >
                <Image
                  src={sponsor_art}
                  alt=""
                  height={60}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
