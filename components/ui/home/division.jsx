import {
  AppWindow,
  Cloud,
  Speech,
  CircuitBoard,
  MonitorSmartphone,
  Cpu,
  Figma,
  UserSearch,
  Apple,
  Brain,
  SquareFunction,
  ScanEye,
} from "lucide-react";
import { CompanyData } from "@/lib/config";

export default function Division() {
  return (
    <>
      <div className="container mt-20 lg:mt-40 px-10 lg:px-16">
        <div className="grid grid-rows gap-12">
          <div className="text-3xl md:text-4xl lg:text-5xl text-center font-regular mx-auto max-w-md md:max-w-xl lg:max-w-3xl">
            We got a complete solutions, ready to help you.
          </div>
          <div className="grid grid-cols lg:grid-cols-2 gap-8 h-auto">
            <Byte />
            <Things />
            <Studio />
            <AI />
          </div>
        </div>
        <div className="text-md font-light text-gray-400 mt-12 text-center max-w-lg lg:max-w-xl mx-auto">
          <div className="mb-2">
            You don&apos;t have to choose anything though.
          </div>
          <div>
            Let us give you the best solution for your business, through our
            free consultation, with no commitment needed.
          </div>
        </div>
      </div>
    </>
  );
}

export function Byte() {
  return (
    <div className="flex gap-8 flex-col border border-[#0D92F4]/60 p-8">
      <div className="flex gap-2 flex-col">
        <div className="text-xl lg:text-2xl text-left font-light mb-2">
          {CompanyData.tradeName} Byte
        </div>
        <div className="text-md font-light text-gray-400 text-justify max-w-xl">
          We simplify tech with custom software, reliable cloud solutions, and
          expert support to help your business grow smoothly.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <AppWindow className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Software Engineering
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Custom software, SaaS, ERP, PoS, Company Website, etc.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Cloud className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Cloud Infrastructure
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Scalable, secure cloud for modern needs.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Speech className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Technology Consultation
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Expert guidance to drive tech innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Things() {
  return (
    <div className="flex gap-8 flex-col border border-[#F95454]/60 p-8">
      <div className="flex gap-2 flex-col">
        <div className="text-xl lg:text-2xl text-left font-light mb-2">
          {CompanyData.tradeName} Things
        </div>
        <div className="text-md font-light text-gray-400 text-justify">
          We brings smart tech to your world, with innovative hardware, IoT, and
          robotics solutions that make life easier and more connected.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <CircuitBoard className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Hardware Engineering
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Designing reliable, high-tech devices.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <MonitorSmartphone className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Internet of Things
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Connecting devices for smarter living.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Cpu className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">Robotics</p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Crafting automation for efficiency and ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Studio() {
  return (
    <div className="flex gap-8 flex-col border border-[#FFFFFF]/40 p-8">
      <div className="flex gap-2 flex-col">
        <div className="text-xl lg:text-2xl text-left font-light mb-2">
          {CompanyData.tradeName} Studio
        </div>
        <div className="text-md font-light text-gray-400 text-justify">
          We brings your brand to life with creative design, seamless UI/UX, and
          a friendly touch that makes every interaction memorable.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Figma className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              UI/UX Designing
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Creating intuitive, user-friendly app interfaces.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <UserSearch className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">UX Research</p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Insight-driven design for better experiences.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Apple className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">Brand Identity</p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Building memorable and unique brand images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AI() {
  return (
    <div className="flex gap-8 flex-col border border-[#219B9D]/60 p-8">
      <div className="flex gap-2 flex-col">
        <div className="text-xl lg:text-2xl text-left font-light mb-2">
          {CompanyData.tradeName} AI
        </div>
        <div className="text-md font-light text-gray-400 text-justify">
          We&apos;re here to make technology smarter for you, with advanced AI
          solutions like chatbots and deep learning tailored to your needs.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-8">
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <Brain className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">AI Integration</p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Embedding AI to enhance business solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <SquareFunction className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">AI Research</p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Innovating with cutting-edge AI advancements.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <div className="pt-0.5">
            <ScanEye className="w-5 h-5 text-primary" />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-gray-200 font-regular text-md">
              Computer Vision
            </p>
            <p className="text-gray-400 font-light text-xs text-justify">
              Enabling machines to interpret visuals accurately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
