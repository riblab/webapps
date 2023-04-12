import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6 p-4">
          <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-6" aria-label="Global">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="w-auto h-10" src="https://github.com/riblab/imghostingservice/blob/main/svg/logo.svg" alt="" />
                </a>
                <div className="-mr-2 flex items-center">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden">
              <a href="#" className="text-base font-medium text-white hover:text-gray-300">
                Log in
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                Start free trial
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-4 transition transform origin-top">
            <div className="rounded-3xl shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://github.com/riblab/imghostingservice/blob/main/svg/logo.svg" alt="" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a href="#" className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                    Start free trial
                  </a>
                </div>
                <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-gray-900 hover:underline">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main>
        <div className="pt-10 bg-gray-900 pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="">
              <div className="mx-auto max-w-md px-4 max-w-2xl px-6 text-center">
                <div className="">
                  <a href="#" className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 text-base hover:text-gray-200">
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      RIB·LAB
                    </span>
                    <span className="ml-4 text-sm">排骨实验室</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white mt-5 text-6xl">
                    <span className="block">RIB·LAB</span>
                    <span className="block text-indigo-400">新鲜 | 洞察</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 mt-5 text-xl">
                  一个小而精的设计工作室,目前在做医学绘图与新概念设计.为解决问题而设计.
                  </p>
                  <div className="mt-10 mt-12">
                    <form action="#" className="max-w-xl mx-auto">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-0 ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">
                            合作愉快！
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 mt-4">
                      我们将在 1-2 个工作日内与您联系,或微信:{' '}
                        <a href="#" className="font-medium text-white">
                        riblab or Mailto: hi@riblab
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-12 -mb-48">
                <div className="mx-auto max-w-md px-4 max-w-2xl px-6">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img className="w-full" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-md px-4 max-w-2xl px-6" style={{ height: 220 }} />

            <div>
              {/* Hero card */}
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                <div className="max-w-7xl mx-auto px-6">
                  <div className="relative shadow-xl rounded-2xl overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        className="h-full w-full object-cover"
                        src="https://github.com/riblab/imghostingservice/blob/main/png/img1.png"
                        alt="People working on laptops"
                      />
                      <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                    </div>
                    <div className="relative px-4 py-16 px-6 py-24">
                      <h1 className="text-center text-4xl font-extrabold tracking-tight text-5xl">
                        <span className="block text-white">Take control of your</span>
                        <span className="block text-indigo-200">customer support</span>
                      </h1>
                      <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 max-w-3xl">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
                        aliqua.
                      </p>
                      <div className="mt-10 max-w-sm mx-auto max-w-none flex justify-center">
                        <div className="space-y-0 space-y-0 mx-auto inline-grid grid-cols-2 gap-5">
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 px-8">
                            Get started
                          </a>
                          <a
                            href="#"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 px-8">
                            Live demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
