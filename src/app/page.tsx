'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Github,
  Code,
  Terminal,
  Database,
  Cloud,
  RefreshCw,
  Copy,
  Users,
  Zap,
  Check,
  Lock,
  Heart,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/components/ui/use-toast';

type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function AppPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: 'Copied to clipboard',
      description: 'The command has been copied to your clipboard.',
    });
  };

  const installCommands: Record<PackageManager, string> = {
    npm: 'npx create-filecoin-app',
    yarn: 'yarn create filecoin-app',
    pnpm: 'pnpm create filecoin-app',
    bun: 'bunx create-filecoin-app',
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0D0E12] text-gray-100">
      <header className="fixed top-0 z-50 w-full border-b border-[#2E3039] bg-[#1A1B26]/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative h-8 w-48">
              <Image
                src="/fil-b-logo.png"
                alt="FIL Builders Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link
              href="#features"
              onClick={(e) => smoothScroll(e, 'features')}
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              onClick={(e) => smoothScroll(e, 'integrations')}
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Integrations
            </Link>
            <Link
              href="https://github.com/FIL-Builders/fil-frame#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/FIL-Builders/fil-frame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 text-gray-300 hover:text-white" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1A1B26] to-[#0D0E12] py-32">
          {/* Brand geometric shapes */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Red Arrow.png"
              alt=""
              width={120}
              height={120}
              className="absolute right-[10%] top-[35%] -rotate-[45deg] transform opacity-15"
            />
            <Image
              src="/Blue Square.png"
              alt=""
              width={100}
              height={100}
              className="absolute left-[8%] top-[20%] rotate-[13.6deg] transform opacity-10"
            />
            <Image
              src="/Yellow Circle.png"
              alt=""
              width={90}
              height={90}
              className="absolute bottom-[35%] right-[15%] rotate-[10.38deg] transform opacity-10"
            />
            <Image
              src="/Red Star.png"
              alt=""
              width={80}
              height={80}
              className="absolute bottom-[25%] left-[12%] rotate-[7.07deg] transform opacity-10"
            />
          </div>
          <motion.div
            className="container mx-auto px-6 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-balgin tracking-none mb-6 text-6xl uppercase text-white"
            >
              FIL-Frame
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-2xl text-xl text-gray-300"
            >
              Zero-configuration CLI tool for building Filecoin applications with ready-to-use React
              components and storage integrations.
            </motion.p>
            <motion.div variants={itemVariants} className="mx-auto mb-12 max-w-xl">
              <Card className="overflow-hidden border-[#2E3039] bg-[#1E2029] shadow-lg shadow-black/10 transition-all duration-300 hover:border-[#0090FF]">
                <CardContent className="p-0">
                  <div className="flex border-b border-[#2E3039]">
                    {Object.keys(installCommands).map((cmd, index) => (
                      <button
                        key={cmd}
                        className={`flex flex-1 items-center justify-center p-2 text-sm font-medium transition-colors ${
                          activeTab === cmd
                            ? 'bg-[#2E3039] text-white'
                            : 'text-gray-400 hover:text-white'
                        } ${index === 0 ? 'rounded-tl-[calc(0.5rem-1px)]' : ''} ${index === Object.keys(installCommands).length - 1 ? 'rounded-tr-[calc(0.5rem-1px)]' : ''} `}
                        onClick={() => setActiveTab(cmd as PackageManager)}
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                  <div className="relative p-4">
                    <pre className="overflow-x-auto whitespace-pre-wrap break-words text-left">
                      <code className="font-mono text-sm text-gray-200">
                        {installCommands[activeTab]}
                      </code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 text-gray-400 hover:text-white"
                      onClick={() => copyToClipboard(installCommands[activeTab])}
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center space-x-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#0090FF] px-8 py-3 font-bold text-white hover:bg-[#0090FF]/90"
              >
                <Link href="#installation" onClick={(e) => smoothScroll(e, 'installation')}>
                  Quick Start
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-gray-600 bg-transparent px-8 py-3 text-white hover:border-gray-500 hover:bg-gray-800"
              >
                <Link
                  href="https://github.com/FIL-Builders/fil-frame"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section id="installation" className="relative overflow-hidden bg-[#0D0E12] py-24 pt-32">
          {/* Geometric shapes */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Blue Square.png"
              alt=""
              width={80}
              height={80}
              className="absolute right-[5%] top-[8%] rotate-[7.07deg] transform opacity-5"
            />
            <Image
              src="/Red Arrow.png"
              alt=""
              width={70}
              height={70}
              className="absolute left-[8%] top-[15%] rotate-[13.6deg] transform opacity-5"
            />
            <Image
              src="/Yellow Circle.png"
              alt=""
              width={60}
              height={60}
              className="absolute bottom-[10%] right-[12%] rotate-[10.38deg] transform opacity-5"
            />
          </div>

          <div className="container relative mx-auto px-6">
            {/* Line decoration */}
            <div className="absolute left-0 top-24 h-0.5 w-16 -rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />
            <div className="absolute right-0 top-24 h-0.5 w-16 rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />

            <h2 className="relative mb-16 text-center text-4xl font-bold text-white">
              Get Started with FIL-Frame
              <div className="absolute -right-4 -top-4 h-8 w-8 opacity-10">
                <Image
                  src="/Red Star.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rotate-[7.07deg] transform"
                />
              </div>
            </h2>

            <div className="mx-auto max-w-3xl">
              <Card className="border-[#2E3039] bg-[#1E2029]">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {[
                      {
                        number: 1,
                        title: 'Create a new FIL-Frame project',
                        command: 'npx create-filecoin-app my-app',
                        copy: true,
                      },
                      {
                        number: 2,
                        title: 'Navigate to your project directory',
                        command: 'cd my-app',
                        copy: true,
                      },
                      {
                        number: 3,
                        title: 'Start the development server',
                        command: 'yarn dev',
                        copy: true,
                      },
                      {
                        number: 4,
                        title: 'Optional: Using with specific integrations',
                        command: `# For Lighthouse integration:
npx create-filecoin-app my-app --lighthouse

# For Storacha NFT integration:
npx create-filecoin-app my-app --storacha`,
                        copy: false,
                      },
                    ].map((step, index) => (
                      <Step key={index} {...step} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="relative overflow-hidden bg-[#0D0E12] py-24 pt-32">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/Blue Square.png"
              alt=""
              width={80}
              height={80}
              className="absolute left-[5%] top-[5%] rotate-[7.07deg] transform opacity-5"
            />
            <Image
              src="/Yellow Circle.png"
              alt=""
              width={70}
              height={70}
              className="absolute right-[8%] top-[10%] rotate-[10.38deg] transform opacity-5"
            />
            <Image
              src="/Red Star.png"
              alt=""
              width={60}
              height={60}
              className="absolute bottom-[8%] left-[10%] rotate-[13.6deg] transform opacity-5"
            />
            <Image
              src="/Red Arrow.png"
              alt=""
              width={70}
              height={70}
              className="absolute bottom-[10%] right-[5%] rotate-[7.07deg] transform opacity-5"
            />
          </div>

          <div className="container relative mx-auto px-6">
            {/* Line decoration */}
            <div className="absolute left-0 top-24 h-0.5 w-16 -rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />
            <div className="absolute right-0 top-24 h-0.5 w-16 rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />

            <div className="relative">
              <div className="absolute -left-8 top-1/2 h-0.5 w-4 -rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />
              <div className="absolute -right-8 top-1/2 h-0.5 w-4 rotate-[13.6deg] transform bg-[#0090FF] opacity-20" />
              <h2 className="font-balgin tracking-none mb-16 text-center text-4xl uppercase text-white">
                Ready-to-use Filecoin Components
                {/* Geometric accent */}
                <div className="absolute -right-4 -top-4 h-8 w-8 opacity-10">
                  <Image
                    src="/Blue Square.png"
                    alt=""
                    width={32}
                    height={32}
                    className="rotate-[7.07deg] transform"
                  />
                </div>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Code className="h-10 w-10 text-[#0090FF]" />}
                title="Storage Deals"
                link="https://docs.filecoin.io/builder-cookbook/data-storage/store-data"
                description="Create storage deals via a storage provider like Lighthouse, or use your own deal client smart contract for custom implementations."
              />
              <FeatureCard
                icon={<Terminal className="h-10 w-10 text-[#0090FF]" />}
                title="Retrieval"
                link="https://docs.filecoin.io/builder-cookbook/data-storage/retrieve-data"
                description="Retrieve data from Filecoin storage deals using a retrieval provider like Lit Protocol, or use your own retrieval client smart contract for custom implementations."
              />
              <FeatureCard
                icon={<Database className="h-10 w-10 text-[#0090FF]" />}
                title="Data DAOs"
                link="https://docs.filecoin.io/builder-cookbook/dapps/decentralized-database"
                description="Build decentralized data applications using Filecoin storage deals and data DAOs like Lit Protocol, or use your own data DAO smart contract for custom implementations."
              />
              <FeatureCard
                icon={<Cloud className="h-10 w-10 text-[#0090FF]" />}
                title="FVM"
                link="https://docs.filecoin.io/smart-contracts/fundamentals/the-fvm"
                description="Build smart contracts on the Filecoin Virtual Machine (FVM) using TypeScript, or use your own smart contract for custom implementations."
              />
              <FeatureCard
                icon={<RefreshCw className="h-10 w-10 text-[#0090FF]" />}
                title="Proofs"
                link="https://docs.filecoin.io/basics/the-blockchain/proofs"
                description="Generate proofs of storage using Filecoin Plus, or use your own proof generation smart contract for custom implementations."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-[#0090FF]" />}
                title="Smart Contracts"
                link="https://docs.filecoin.io/smart-contracts/fundamentals"
                description="Build smart contracts on the Filecoin network using TypeScript, or use your own smart contract for custom implementations."
              />
            </div>
          </div>
        </section>

        <section id="integrations" className="bg-[#1A1B26] py-24 pt-32">
          <div className="container mx-auto px-6">
            {/* Storage Onramps */}
            <div className="mb-24">
              <h2 className="mb-6 text-center text-4xl font-bold text-white">
                Pre-configured Storage Quickstarts
              </h2>
              <p className="mx-auto mb-16 max-w-3xl text-center text-gray-300">
                Get started quickly with our pre-configured templates for popular Filecoin storage
                providers and onramps. Each integration comes with complete examples and
                documentation.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <IntegrationCard
                  icon={
                    <Image
                      src="/Lighthouse Logo.jpg"
                      alt="Lighthouse"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  }
                  title="Lighthouse Template"
                  description="Quickstart with Lighthouse storage integration, including NFT examples and encryption features"
                  link="https://github.com/FIL-Builders/fil-frame/tree/lighthouse-nfts"
                />
                <IntegrationCard
                  icon={
                    <Image
                      src="/Storacha.png"
                      alt="Storacha"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  }
                  title="Storacha Template"
                  description="Ready-to-use template with Storacha NFT integration and storage management features"
                  link="https://github.com/FIL-Builders/fil-frame/tree/storacha-nfts"
                />
                <IntegrationCard
                  icon={
                    <Image
                      src="/Akave.png"
                      alt="Akave"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  }
                  title="Akave Template"
                  description="Enterprise-grade storage solutions with advanced data management features"
                  link="https://github.com/FIL-Builders/fil-frame/tree/akave-integration"
                />
              </div>
            </div>

            {/* Tooling */}
            <div>
              <h2 className="mb-6 text-center text-4xl font-bold text-white">
                Supercharge Your dApp
              </h2>
              <p className="mx-auto mb-16 max-w-3xl text-center text-gray-300">
                Enhance your decentralized applications with powerful cross-chain and access control
                capabilities.
              </p>
              <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                <IntegrationCard
                  icon={<Image src="/Axelar Logo.svg" alt="Axelar" width={64} height={64} />}
                  title="Axelar Template"
                  description="Secure cross-chain communication for Web3 applications and assets"
                  link="https://github.com/FIL-Builders/fil-frame/tree/axelar-integration"
                />
                <IntegrationCard
                  icon={
                    <Image
                      src="/Lit Logomark White.svg"
                      alt="Lit Protocol"
                      width={64}
                      height={64}
                    />
                  }
                  title="Lit Protocol Template"
                  description="Decentralized key management network for blockchain-based access control"
                  link="https://github.com/FIL-Builders/fil-frame/tree/storacha-nfts"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2E3039] bg-[#1E2029] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-start justify-between">
            <div className="mb-6 w-full md:mb-0 md:w-1/3">
              <Link href="/" className="mb-2 flex items-center space-x-4">
                <div className="relative h-8 w-48">
                  <Image
                    src="/fil-b-logo.png"
                    alt="Filecoin x FIL-Builders Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <p className="mb-2 text-sm text-gray-400">
                Your quickstart for building decentralized apps on Filecoin with ready-to-use React
                components and TypeScript utilities.
              </p>
              <p className="text-xs text-gray-500">
                Built with <Heart size={12} className="mx-1 inline-block text-red-500" /> by FIL-B
              </p>
            </div>
            <div className="flex w-full flex-wrap justify-end md:w-1/2 lg:w-2/3">
              <div className="mb-4 w-1/2 sm:mb-0 sm:w-1/3">
                <h3 className="mb-2 text-sm font-semibold text-white">Resources</h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="https://github.com/FIL-Builders/fil-frame"
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      GitHub Repository
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/FIL-Builders/fil-frame/issues"
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Report an Issue
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/3">
                <h3 className="mb-2 text-sm font-semibold text-white">Community</h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="https://discord.gg/filecoin"
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/FILBuilders"
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://filecoin.io/slack"
                      className="text-xs text-gray-400 hover:text-white"
                    >
                      Slack
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between border-t border-gray-800 pt-6 sm:flex-row">
            <p className="mb-2 text-xs text-gray-500 sm:mb-0">
              © 2024 FIL-Frame. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/FIL-Builders/fil-frame"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
              <Link href="https://discord.gg/filecoin" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Discord Icon.png"
                  alt="Discord"
                  width={20}
                  height={20}
                  className="text-gray-400 hover:text-white"
                />
              </Link>
              <Link href="https://x.com/FILBuilders" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/X Social Media Icon.png"
                  alt="X (formerly Twitter)"
                  width={20}
                  height={20}
                  className="opacity-60 transition-opacity hover:opacity-100"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  link,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="cursor-pointer border-gray-700 bg-[#1E2029] transition-colors hover:border-blue-500"
      onClick={() => setIsOpen(!isOpen)}
    >
      <CardHeader>
        <CardTitle className="flex flex-col items-center text-center">
          {icon}
          <span className="mt-4 text-lg text-gray-200">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="mt-4 text-center text-sm text-gray-300"
            >
              <p>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mt-4 text-gray-400 hover:text-blue-300"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Learn More →
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function DevSurvey({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <Card className="w-full max-w-md border-gray-700 bg-[#1E2029]">
        <CardHeader>
          <CardTitle className="text-white">Developer Survey</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-4 text-gray-200">We&apos;d love to hear your feedback on FIL-Frame!</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="experience" className="mb-1 block text-sm font-medium text-gray-200">
                How was your experience with FIL-Frame?
              </label>
              <select
                id="experience"
                className="w-full rounded-md border border-gray-600 bg-[#2E3039] p-2 text-gray-200"
              >
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>
            </div>
            <div>
              <label htmlFor="feedback" className="mb-1 block text-sm font-medium text-gray-200">
                Any additional feedback?
              </label>
              <textarea
                id="feedback"
                rows={3}
                className="w-full rounded-md border border-gray-600 bg-[#2E3039] p-2 text-gray-200"
              ></textarea>
            </div>
          </div>
        </CardContent>
        <div className="flex justify-end space-x-4 bg-[#2E3348] p-6">
          <Button onClick={onClose} className="bg-black text-white hover:bg-gray-800">
            Close
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Submit</Button>
        </div>
      </Card>
    </div>
  );
}

function IntegrationCard({
  icon,
  title,
  description,
  link,
  comingSoon = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  comingSoon?: boolean;
}) {
  return (
    <Card
      className={`border-gray-700 bg-[#1E2029] ${!comingSoon ? 'hover:border-blue-500' : ''} transform transition-all duration-300 ${!comingSoon ? 'hover:-translate-y-2' : ''}`}
    >
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="title mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="paragraph mb-6 text-gray-300">{description}</p>
        {!comingSoon ? (
          <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-blue-300">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Learn More →
            </Link>
          </Button>
        ) : (
          <span className="text-sm text-gray-400">Coming Soon</span>
        )}
      </CardContent>
    </Card>
  );
}

const LighthouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1,10.5h2.75l1.25,1.25L7.25,10.5H11l1.25,1.25L14.5,10.5H22c0.55,0,1,0.45,1,1v8c0,0.55-0.45,1-1,1H2c-0.55,0-1-0.45-1-1 V10.5z M6,18.5h12v-1.5H6V18.5z M5.58,2.19L4.16,3.61l2.55,2.55L4.16,8.72l1.42,1.42L8.14,7.58l2.55,2.55l1.42-1.42L9.55,6.16 l2.55-2.55L10.69,2.19L8.14,4.74L5.58,2.19z" />
  </svg>
);

function Step({
  number,
  title,
  command,
  copy,
}: {
  number: number;
  title: string;
  command: string;
  copy: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
        {number}
      </div>
      <div className="flex-grow">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>

        <div className="flex items-center justify-between rounded-lg bg-[#2E3039] p-3">
          <code className="whitespace-pre font-mono text-sm text-gray-200">{command}</code>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white"
          >
            <>
              {copy ? (
                <>{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</>
              ) : (
                <></>
              )}
            </>
          </Button>
        </div>
      </div>
    </div>
  );
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
