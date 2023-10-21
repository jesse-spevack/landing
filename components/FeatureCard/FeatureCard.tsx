import { AcademicCapIcon, BookOpenIcon, AdjustmentsHorizontalIcon, BoltIcon, CloudArrowUpIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

type Icons = 'academic' | 'book' | 'adjust' | 'bolt' | 'cloud' | 'code'

interface Props {
  feature: string;
  description: string;
  iconName: Icons;
}

const getIconFromName = (iconName: Icons) => {
  switch (iconName) {
    case 'academic':
      return <AcademicCapIcon className="h-8 w-8 text-white inline mr-2" />;
    case 'book':
      return <BookOpenIcon className="h-8 w-8 text-white inline mr-2" />;
    case 'adjust':
      return <AdjustmentsHorizontalIcon className="h-8 w-8 text-white inline mr-2" />;
    case 'bolt':
      return <BoltIcon className="h-8 w-8 text-white inline mr-2" />;
    case 'cloud':
      return <CloudArrowUpIcon className="h-8 w-8 text-white inline mr-2" />;
    case 'code':
      return <CodeBracketIcon className="h-8 w-8 text-white inline mr-2" />;
    // all other supported icons
  }
}

export default function FeatureCard({ feature, description, iconName }: Props) {
  const icon = getIconFromName(iconName);

  return (
    <div>
      <div className="border-2 rounded-md p-2 min-h-full">
        {icon}
        <h1 className="text-xl inline font-bold">{feature}</h1>
        <p className="ml-1 pt-4 font-light">{description}</p>
      </div>
    </div>
  );
}