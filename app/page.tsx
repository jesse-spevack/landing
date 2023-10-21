import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="pt-8 text-7xl font-bold">Do you miss the Heroku free tier?</h1>
        <div className="pt-4">
          <p className="text-zinc-400 text-xl">
            Do not let expensive hosting and confusing documentation stop you from deploying your Ruby on Rails application. 
          </p>
        </div>
        <div className="pt-4">
          <p className="text-zinc-400 font-light">
            Accepting sign ups soon. Coming Q1 2024.
          </p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="disabled:opacity-75 block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
              disabled
            />
          </div>
          <button
            type="submit"
            className="disabled:opacity-75 mt-3 inline-flex w-full items-center justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm enabled:hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 sm:ml-3 sm:mt-0 sm:w-auto"
            disabled
          >
            Sign up
          </button>
        </form>

        <div className="py-8 text-4xl font-bold">
          <h2>Features</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-zinc-400">
          <FeatureCard 
            feature="Low Cost" 
            description="Deploy Rails Guides will pay for itself after one month on most platform as a service providers." 
            iconName="dollar" 
          />
          <FeatureCard 
            feature="Multiple Options" 
            description="Follow our easy-to-use flow chart to pick the best deployment strategy for your needs." 
            iconName="adjust" 
          />
          <FeatureCard 
            feature="Deploy Fast" 
            description="Get your app into production now with our step-by-step and always-up-to-date guides." 
            iconName="bolt" 
          />
          <FeatureCard 
            feature="Learn DevOps" 
            description="Build your devops repertoire and increase your marketability." 
            iconName="wrench" 
          />
          <FeatureCard 
            feature="Code Samples" 
            description="All the code you need to get up and running." 
            iconName="code" 
          />
          <FeatureCard 
            feature="Educator Built" 
            description="Tutorials co-written by a technology educator and former educator turned developer." 
            iconName="academic" 
          />
        </div>
      </div>
    </div>
  )
}
