import { Shield, Heart, Home, Car } from 'lucide-react';

export const insuranceTips = [
  {
    title: 'Life Insurance',
    description: 'Protect your family\'s future',
    icon: Heart,
    tips: [
      'Calculate coverage based on income and debts',
      'Compare term vs whole life policies',
      'Review beneficiaries annually',
      'Consider additional riders if needed'
    ]
  },
  {
    title: 'Health Insurance',
    description: 'Maintain medical coverage',
    icon: Shield,
    tips: [
      'Understand your deductibles and copays',
      'Review coverage during open enrollment',
      'Use in-network providers',
      'Consider HSA or FSA accounts'
    ]
  },
  {
    title: 'Property Insurance',
    description: 'Protect your assets',
    icon: Home,
    tips: [
      'Update coverage as property value changes',
      'Document belongings with photos',
      'Understand policy exclusions',
      'Bundle policies for discounts'
    ]
  },
  {
    title: 'Auto Insurance',
    description: 'Vehicle protection essentials',
    icon: Car,
    tips: [
      'Compare rates annually',
      'Maintain good driving record',
      'Choose appropriate deductibles',
      'Ask about available discounts'
    ]
  }
];