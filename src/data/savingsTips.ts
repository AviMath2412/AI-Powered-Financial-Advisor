import { PiggyBank, Wallet, TrendingUp, ShieldCheck, Calculator } from 'lucide-react';

export const savingsTips = [
  {
    title: '50/30/20 Rule',
    description: 'Allocate 50% for needs, 30% for wants, and 20% for savings',
    icon: Calculator,
    tips: [
      'Track all monthly expenses',
      'Categorize spending into needs and wants',
      'Automate savings transfers',
      'Review and adjust percentages quarterly'
    ]
  },
  {
    title: 'Emergency Fund',
    description: 'Build a safety net for unexpected expenses',
    icon: ShieldCheck,
    tips: [
      'Start with a goal of 3-6 months of expenses',
      'Keep funds in a separate high-yield savings account',
      'Only use for true emergencies',
      'Replenish immediately after use'
    ]
  },
  {
    title: 'Smart Spending',
    description: 'Practical ways to reduce daily expenses',
    icon: Wallet,
    tips: [
      'Use cashback credit cards wisely',
      'Compare prices before major purchases',
      'Cancel unused subscriptions',
      'Cook meals at home more often'
    ]
  },
  {
    title: 'Investment Basics',
    description: 'Start your investment journey',
    icon: TrendingUp,
    tips: [
      'Begin with low-cost index funds',
      'Diversify your portfolio',
      'Reinvest dividends automatically',
      'Consider tax-advantaged accounts'
    ]
  }
];