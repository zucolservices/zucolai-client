import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

function FeatureCard({ title, description, color, icon }: FeatureCardProps) {
  return (
    <div className={`p-6 rounded-2xl ${color} hover:scale-105 transition-transform cursor-pointer`}>
      <div className="w-12 h-12 mb-4 relative">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="font-inter font-semibold text-xl mb-2">{title}</h3>
      <p className="font-inter text-gray-600">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Intuitive Design",
      description: "Create beautiful interfaces with our carefully crafted components.",
      color: "bg-orange-100",
      icon: "/icons/design.svg"
    },
    {
      title: "Flexible System",
      description: "Adapt and customize components to match your brand identity.",
      color: "bg-blue-100",
      icon: "/icons/system.svg"
    },
    {
      title: "Rapid Development",
      description: "Speed up your workflow with ready-to-use components.",
      color: "bg-green-100",
      icon: "/icons/development.svg"
    },
    {
      title: "Modern Stack",
      description: "Built with the latest technologies for optimal performance.",
      color: "bg-purple-100",
      icon: "/icons/stack.svg"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-inter font-bold text-3xl md:text-4xl text-center mb-12">
          Everything you need to build modern UIs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
