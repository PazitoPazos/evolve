'use client'
import TextRotator from '@/components/TextRotator'
import { useAuth } from '@/hooks/useAuth'
import AdjustmentsHorizontalIcon from '@/icons/AdjustmentsHorizontalIcon'
import ConsoleIcon from '@/icons/ConsoleIcon'
import DashboardIcon from '@/icons/DashboardIcon'
import FileReportIcon from '@/icons/FileReportIcon'
import UserShieldIcon from '@/icons/UserShieldIcon'
import UsersIcon from '@/icons/UsersIcon'
import { Plan } from '@/types/types.d'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const { session } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.refresh()
    }
  }, [])

  return (
    <div className="h-full w-full px-4 text-[#ddd] lg:px-12">
      <Welcome />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

function Welcome() {
  return (
    <section className="h-full py-8 md:px-12 lg:px-24">
      <div className="container flex h-full w-full items-center justify-center">
        <div className="flex w-full flex-col justify-between gap-32 md:flex-row md:items-center md:gap-0">
          <div>
            <p className="text-center text-2xl font-bold md:text-3xl lg:text-left lg:text-4xl xl:text-5xl 2xl:text-6xl">
              <span className="text-accent">Evolve</span>{' '}
              <span className="text-secondary-light">your server</span>
            </p>
            <TextRotator />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-xl font-bold uppercase text-secondary-light lg:items-center lg:text-lg xl:text-2xl 2xl:text-3xl">
            <Image
              src={'/logo.png'}
              alt={'Evolve Logo'}
              className={'md:w-48 lg:w-64 xl:w-80 2xl:w-96'}
              height={140}
              width={140}
            />
            <Link
              className="w-fit rounded-full bg-accent px-2 hover:bg-accent-light md:p-3 lg:p-3 xl:p-4"
              href="/login"
            >
              Evolve Now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const features = [
    {
      description:
        "Stay informed and in control with live statistics at your fingertips. Evolve keeps you up to date on key metrics such as CPU usage and RAM usage. It's an intuitive way to monitor your game world's performance and manage resources effectively.",
      image: { src: '/dashboard.png', alt: 'Dashboard page' },
      icon: <DashboardIcon height={'36'} width={'36'} />,
      text: 'Dashboard',
    },
    {
      description:
        "Enjoy absolute simplicity when customizing your game. Change game settings effortlessly, no files, no fuss - all thanks to Evolve's easy-to-use interface",
      image: { src: '/options.png', alt: 'Options page' },
      icon: <AdjustmentsHorizontalIcon height={'36'} width={'36'} />,
      text: 'Options',
    },
    {
      description:
        'Get real-time information and control of your server with our live console',
      image: { src: '/console.png', alt: 'Console page' },
      icon: <ConsoleIcon height={'36'} width={'36'} />,
      text: 'Console',
    },
    {
      description:
        'Your server log provides a detailed record of activities and events on your hosting environment. It tracks requests, errors, and other important information to help you monitor the performance and security of your website. With this log, you can quickly troubleshoot issues, identify trends, and optimize your hosting setup for better reliability and performance.',
      image: { src: '/log.png', alt: 'Log page' },
      icon: <FileReportIcon height={'36'} width={'36'} />,
      text: 'Log',
    },
    {
      description:
        "Here, you can whitelist specific players, grant operator privileges to trusted users, maintain a list of banned players, and block problematic IP addresses. Whether you're safeguarding against unwanted intrusions, enforcing server rules, or fostering a positive community atmosphere, our tools empower you to create and maintain the ideal gaming environment for your server",
      image: { src: '/players.png', alt: 'Players page' },
      icon: <UsersIcon height={'36'} width={'36'} />,
      text: 'Players',
    },
    {
      description:
        "Enhance your gaming experience by sharing power. With Evolve, you can delegate server administration access to your loyal players. It's a perfect way to collaborate, ensuring your thriving game world, even when you're offline.",
      image: { src: '/access.png', alt: 'Access page' },
      icon: <UserShieldIcon height={'36'} width={'36'} />,
      text: 'Access',
    },
  ]

  const interval = 7000

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const featureIndex = parseInt(
      e.currentTarget.getAttribute('data-id-feature')!
    )
    setCurrentFeatureIndex(featureIndex)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length)
    }, interval)
    return () => {
      clearInterval(timer)
    }
  }, [features, interval])

  return (
    <section className=" py-8">
      <div className="">
        <h2 className="mb-4 text-4xl font-bold text-accent lg:text-6xl">
          Features
        </h2>
        <div className="grid w-full grid-cols-2 place-items-center justify-center font-bold md:grid-cols-3 lg:flex lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-16">
              <div
                onClick={handleClick}
                data-id-feature={index}
                className={`flex items-center justify-center rounded-lg p-4 text-center text-xl text-accent transition-all duration-700 hover:cursor-pointer lg:text-2xl ${
                  currentFeatureIndex === index ? 'bg-primary-light' : ''
                }`}
              >
                {feature.icon}
                <span
                  className={`transition-all duration-700 sm:w-40 md:w-0 ${
                    currentFeatureIndex === index ? 'md:w-40' : 'w-0 opacity-0'
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className={`flex transition-all duration-700 ${currentFeatureIndex === index ? '' : 'opacity-0'}`}
              >
                <div
                  className={`flex flex-col justify-between gap-12 transition-all duration-700 xl:flex-row ${currentFeatureIndex === index ? '' : 'hidden opacity-0'}`}
                >
                  <div className="xl:w-2/3 2xl:w-1/3">
                    <p className="font-bold text-[#b3b3b3] lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                  <div className="">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className={
                        'w-full rounded-lg border-4 border-secondary-light'
                      }
                      height={720}
                      width={1280}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans: Plan[] = [
    {
      name: 'Dirt',
      ram: '2GB',
      players: '1-4',
      vCPUs: '2',
      storage: '1GB',
      numBackups: '1',
      ads: 'Yes',
      price: 'Free',
    },
    {
      name: 'Wood',
      ram: '4GB',
      players: '4-16',
      vCPUs: '4',
      storage: '2GB',
      numBackups: '2',
      ads: 'No',
      price: '20€/month',
    },
    {
      name: 'Stone',
      ram: '6GB',
      players: '16-48',
      vCPUs: '6',
      storage: '4GB',
      numBackups: '2',
      ads: 'No',
      price: '30€/month',
    },
    {
      name: 'Copper',
      ram: '8GB',
      players: '48-80',
      vCPUs: '8',
      storage: '8GB',
      numBackups: '4',
      ads: 'No',
      price: '40€/month',
    },
    {
      name: 'Iron',
      ram: '10GB',
      players: '80-124',
      vCPUs: '10',
      storage: '12GB',
      numBackups: '4',
      ads: 'No',
      price: '50€/month',
    },
    {
      name: 'Gold',
      ram: '12GB',
      players: '124-192',
      vCPUs: '12',
      storage: '16GB',
      numBackups: '8',
      ads: 'No',
      price: '60€/month',
    },
    {
      name: 'Diamond',
      ram: '14GB',
      players: '192-256',
      vCPUs: '14',
      storage: '24GB',
      numBackups: '12',
      ads: 'No',
      price: '70€/month',
    },
    {
      name: 'Netherite',
      ram: '16GB',
      players: '256-512',
      vCPUs: '16',
      storage: 'Unlimited',
      numBackups: 'Unlimited',
      ads: 'No',
      price: '80€/month',
    },
  ]

  return (
    <section className="py-8">
      <h2 className="mb-8 text-4xl font-bold text-accent lg:text-6xl">
        Pricing
      </h2>
      <div className="flex justify-center">
        <div className="flex snap-x snap-mandatory gap-4 overflow-auto pt-4 sm:grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t-4 border-solid border-current py-4 text-accent">
      <p className="text-center text-lg font-bold lg:text-2xl">
        ⚡Made by Pazos - 2024⚡
      </p>
    </footer>
  )
}

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <>
      <div className="relative mb-4 flex min-w-80 snap-center flex-col rounded-lg border-4 border-secondary-light bg-primary p-6 font-bold shadow-lg sm:min-w-64 md:min-w-80 lg:text-lg">
        <h2 className="absolute -top-5 left-1/2 mb-2 min-w-36 -translate-x-1/2 transform bg-gradient-to-b from-primary-dark to-primary px-3 text-center text-2xl">
          {plan.name}
        </h2>
        <span className="mb-4 text-[#b3b3b3]">Players: {plan.players}</span>
        <span className="mb-4 text-[#b3b3b3]">vCPUs: {plan.vCPUs}</span>
        <span className="mb-4 text-[#b3b3b3]">RAM: {plan.ram}</span>
        <span className="mb-4 text-[#b3b3b3]">Storage: {plan.storage}</span>
        <span className="mb-4 text-[#b3b3b3]">Backups: {plan.numBackups}</span>
        <span className="mb-4 text-[#b3b3b3]">Ads: {plan.ads}</span>
        <span className="text-center text-2xl font-bold lg:text-3xl">
          {plan.price}
        </span>
      </div>
    </>
  )
}
