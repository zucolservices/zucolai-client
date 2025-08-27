interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

function PricingTier({ name, price, description, features, isPopular }: PricingTierProps) {
  return (
    <div className={`p-8 rounded-2xl border ${isPopular ? 'border-black' : 'border-gray-200'} flex flex-col h-full`}>
      {isPopular && (
        <span className="inline-block px-4 py-1 rounded-full bg-black text-white text-sm mb-6 self-start">
          Most Popular
        </span>
      )}
      <h3 className="font-inter font-semibold text-2xl mb-2">{name}</h3>
      <div className="mb-4">
        <span className="font-inter font-bold text-4xl">{price}</span>
        {price !== 'Free' && <span className="text-gray-600 ml-2">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-inter text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-lg font-inter font-medium transition-colors ${
          isPopular
            ? 'bg-black text-white hover:bg-gray-900'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default function PricingSection() {
  const pricingTiers = [
    {
      name: 'Free',
      price: 'Free',
      description: 'Perfect for trying out our design system.',
      features: [
        'Basic components',
        'Community support',
        'Monthly updates',
        'Basic documentation'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      description: 'Everything you need for a growing project.',
      features: [
        'All components',
        'Priority support',
        'Weekly updates',
        'Advanced documentation',
        'Source files',
        'Custom themes'
      ],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'Advanced features for larger teams.',
      features: [
        'All Pro features',
        'Dedicated support',
        'Daily updates',
        'Custom components',
        'Team collaboration',
        'Training sessions'
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-inter font-bold text-3xl md:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="font-inter text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
