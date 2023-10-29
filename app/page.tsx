import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Leads from './leads/page'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="pt-8 text-7xl font-bold">Do you miss the Heroku free tier?</h1>
        <div className="pt-4">
          <p className="text-zinc-300 text-xl">
            Do not let expensive hosting and confusing documentation stop you from deploying your Ruby on Rails application. 
          </p>
        </div>
        <div className="pt-4">
          <p className="text-zinc-300 font-light">
            Accepting sign ups soon. Coming Q1 2024.
          </p>
        </div>

        <Leads/>

        <div className="py-8 text-4xl font-bold">
          <h2>Features</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 text-zinc-300">
          <FeatureCard 
            feature="Low Cost" 
            description="Deploy Rails Guides will pay for itself in less than one month of platform as a service use." 
            iconName="dollar" 
          />
          <FeatureCard 
            feature="Multiple Options" 
            description="Easy-to-use flow chart helps you pick a deployment strategy that fits your needs." 
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
            description="Tutorials co-written by a technology educator and educator turned developer." 
            iconName="academic" 
          />
        </div>
      </div>
    </div>
  )
}
