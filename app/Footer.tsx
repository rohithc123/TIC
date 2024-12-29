import dots from '@/public/dotted-pattern.png'
import instagram from '@/public/instagram.png'
import logo from '@/public/logo.png'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export default function Footer() {
  return (
    <footer
      id="footer"
      // style={{ backgroundImage: "url('/dotted-pattern.png')" }}
      className="flex flex-col items-center w-full md:max-w-[768px] relative p-6 pt-12 gap-6 overflow-hidden bg-repeat-x mt-16"
    >
      {/* Logo */}
      <Image src={logo} alt="TIC logo" width={64} height={64} />

      {/* Instagram link */}
      <Link href="https://www.instagram.com/thinkindia_iitr/" className="flex">
        <Image src={instagram} alt="Instagram logo" width={24} height={24} />
        &ensp;@thinkindia_iitr
      </Link>

      {/* HR */}
      <div className="h-[1px] w-full bg-void-500" />

      <div className="flex flex-col items-center text-void-200">
        <p className="mb-1">For queries contact</p>
        <div className="flex gap-4">
          <div>
            <h4 className="text-xl" style={rubik.style}>
              Mr. Bhavesh
            </h4>
            <p className="text-sm">9876543210</p>
          </div>
          <div>
            <h4 className="text-xl" style={rubik.style}>
              Mr. Naveen
            </h4>
            <p className="text-sm">9876543210</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-void-300">
        © 2024 TIC IITR&apos;24 ·{' '}
        <Link
          href="https://github.com/rohithc123/TIC"
          className="hover:text-void-200 transition"
        >
          GitHub repo {' '}
        </Link>
        {/*<Link*/}
        {/*  href="/guidelines"*/}
        {/*  className="hover:text-void-200 transition"*/}
        {/*>*/}
        {/*Guidelines*/}
        {/*</Link>*/}
      </p>
    </footer>
  )
}
