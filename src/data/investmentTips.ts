import { TrendingUp, PieChart, Clock, Shield } from 'lucide-react';

export const investmentTips = [
  {
    title: 'Portfolio Diversification',
    description: 'Spread risk across different investments',
    icon: PieChart,
    tips: [
      'Mix stocks, bonds, and other assets',
      'Consider international markets',
      'Include different market sectors',
      'Rebalance portfolio annually'
    ]
  },
  {
    title: 'Long-term Strategy',
    description: 'Focus on sustainable growth',
    icon: Clock,
    tips: [
      'Start investing early',
      'Stay invested during market volatility',
      'Reinvest dividends and gains',
      'Review and adjust strategy yearly'
    ]
  },
  {
    title: 'Risk Management',
    description: 'Protect your investments',
    icon: Shield,
    tips: [
      'Understand your risk tolerance',
      'Don\'t invest money you can\'t afford to lose',
      'Use stop-loss orders when appropriate',
      'Keep emergency funds separate'
    ]
  },
  {
    title: 'Market Analysis',
    description: 'Make informed decisions',
    icon: TrendingUp,
    tips: [
      'Research before investing',
      'Follow market trends',
      'Understand company fundamentals',
      'Monitor economic indicators'
    ]
  }
];