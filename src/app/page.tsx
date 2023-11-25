import { Button } from '@/components/ui/button'
import { IoLogoDiscord } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 w-full">
      {/* <Button className='m-2 rounded-full dark:text-white' variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{
        theme === "dark" ? <CiDark /> : <CiLight />
      }</Button> */}
      <Image className="mb-4 header-logo" src="/logo.png" alt="logo" width={64} height={64} />
     <h1 className="text-5xl font-bold mb-4" >
        Next Generation
        <div className="flex items-center text-blue-600">
          Doraemon AI <Image className="ml-4 text-logo" src="/logo.png" alt="logo" width={64} height={64} />
        </div>
     </h1>
      <p className="text-xs text-center text-gray-500">
        Doraemon AI is a next generation of trustworthy real-time AI-powered personalizationand recommendation platform for eCommerce, FinTech, EdTech and data-driven SaaS.
      </p>
      <div className="flex flex-wrap mt-4 justify-center">
        <Button className='m-2' variant="outline" size="sm" style={{ width: '96px' }}>
          Discord <IoLogoDiscord className="ml-1" />
        </Button>
        <Button className='m-2' variant="outline" size="sm" style={{ width: '96px' }}>
          Twitter <IoLogoTwitter className="ml-1" />
        </Button>
        <Button className='m-2' variant="outline" size="sm" style={{ width: '96px' }}>
          Github <IoLogoGithub className="ml-1" />
        </Button>
        <Button className='m-2' variant="outline" size="sm" style={{ width: '96px' }}>
          Career <FaExternalLinkAlt className="ml-1" />
        </Button>
      </div>
    </main>
  )
}
