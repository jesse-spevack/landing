import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="pt-8 text-7xl font-bold">Deploy Rails</h1>
        <div className="pt-4">
          <p className="text-zinc-400 text-2xl">
            Learn fast, simple, and cheap deployment techniques so you can get your Rails application to production.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-zinc-400">
            Coming Q1 2024 - Sign up to be notified when RailsDeploy tutorials become available.
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
        <div className="grid grid-cols-3 gap-4">
          <FeatureCard 
            feature="Clear writing" 
            description="Authored with the novice in mind. Tutorials follow a step by step approach." 
            iconName="book" 
          />
          <FeatureCard 
            feature="Deploy fast" 
            description="Get your app into production quickly with fast-paced, easy to follow tutorials that leave nothing to chance." 
            iconName="bolt" 
          />
          <FeatureCard 
            feature="Learn AWS" 
            description="Build your proficiency with AWS services like EC2, EKS, RDS." 
            iconName="cloud" 
          />
          <FeatureCard 
            feature="Multiple options" 
            description="Learn the right deployment strategy that fits your unique use case." 
            iconName="adjust" 
          />
          <FeatureCard 
            feature="Code samples" 
            description="All the code you need to get up and running." 
            iconName="code" 
          />
          <FeatureCard 
            feature="Educator approved" 
            description="Tutorials co-written by a technology educator and former educator turned developer." 
            iconName="academic" 
          />
        </div>
      </div>
    </div>
  )
}
