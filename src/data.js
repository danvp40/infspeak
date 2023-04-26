import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Contact us',
      href: '#',
    },
  ],
  actions: [{ type: 'primary', text: 'Request a demo', extra: { '@click': "modal = 'request-demo'" } }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Zalo', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
  `,
};

export const serviceData = [
  {
    key: 'management',
    icon: getAsset('/assets/home-services/icon1.png'),
    image: getAsset('/assets/home-services/service1.png'),
    label: 'Management Reporting Service',
    header: 'Discover comprehensive financial and non-financial Measures driving business profitability',
    salepoints: [
      'Find the best key indicators for every functional enterprise resource',
      'Build up Server, Backend Pipeline, Integrate BI Reports',
      'Customized full package of Management Reports',
    ],
    action: {
      label: 'Learn more',
      href: '#',
    },
  },

  {
    key: 'sales',
    icon: getAsset('/assets/home-services/icon2.png'),
    image: getAsset('/assets/home-services/service2.png'),
    label: 'Sales Analytics Dashboard',
    header: 'Discover how Sales Drivers leading to Growth in the Strategic perspective',
    salepoints: [
      'Find the best key indicators for Sales analytics',
      'Build up Data capture, ETL pipeline, Data model',
      'Provide Financial Ratios, Measures, Indicators give managerial information',
      'Optimize sales by detecting economics of scale',
    ],
    demo: {
      data: [
        {
          label: 'flash',
          data: {
            value: 100.7,
            suffix: '$',
            suffixClass: 'align-super -ml-0.5 text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/sales/nav/flash.png'),
        },
        {
          label: 'growth rate',
          data: {
            value: 12.3,
            suffix: '%',
            icon: 'mdi:caret-up',
            iconClass: 'w-5 md:w-7 -ml-0.5 inline-block text-green-500',
          },
          image: getAsset('/assets/services/sales/nav/growth.png'),
        },
        {
          label: 'distribution',
          data: [
            { value: 80, suffix: '%' },
            { value: 20, suffix: '%' },
          ],
          image: getAsset('/assets/services/sales/nav/distribution.png'),
        },
        {
          label: 'optimal point',
          data: {
            value: 2.3,
            suffix: `<span class="inline-flex items-center"> Slope = <div><div class="h-3 md:h-auto">△y</div> <div>△x</div></div></span>`,
            suffixClass: 'text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/sales/nav/optimal-points.png'),
        },
        {
          label: 'insights',
          data: {
            value: 135,
            suffix: '$',
            suffixClass: '-ml-0.5 align-super text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/sales/nav/insights.png'),
        },
        {
          label: 'trend',
          data: {
            value: 12.3,
            suffix: '%',
            icon: 'tabler:arrow-narrow-down',
            iconClass: 'w-2.5 md:w-4 ml-0.5 inline-block text-red-500',
          },
          image: getAsset('/assets/services/sales/nav/trend.png'),
        },
      ],
    },
  },
  {
    key: 'cost',
    icon: getAsset('/assets/home-services/icon3.png'),
    image: getAsset('/assets/home-services/service3.png'),
    label: 'Cost Analytics Dashboard',
    header: 'Discover how Most efﬁcient Cost Factors indicating in Value Chain for competitive advantage ﬁndings',
    salepoints: [
      'Find the best key indicators for Cost analytics',
      'Build up Data capture, ETL pipeline, Data model',
      'Provide Financial Ratios, Measures, Indicators give managerial information',
      'Optimize Costs by detecting Experience Curve',
    ],
    demo: {
      data: [
        {
          label: 'resource cost',
          data: {
            value: 82.4,
            classes: 'text-red-700',
            suffix: '$',
            suffixClass: 'align-super -ml-0.5 text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/cost-analytics/nav/flash.png'),
        },
        {
          label: 'change rate',
          data: {
            value: 12.4,
            suffix: '%',
            classes: 'text-red-700',
            icon: 'mdi:caret-up',
            iconClass: 'w-5 md:w-7 -ml-0.5 inline-block text-red-500',
          },
          image: getAsset('/assets/services/cost-analytics/nav/change.png'),
        },
        {
          label: 'value chain',
          classes: 'border border-zinc-300',
          data: {
            value: 5.2,
            classes: 'text-red-700',
            head: '<div class="text-gray-700 leading-3 text-[10px] text-left font-normal">Unit Cost</div>',
            suffix:
              '<div class="inline-block text-left"><div class="text-[9px] leading-3">$</div><div class="text-[7px] leading-3">PerHour</div></div>',
            suffixClass: 'text-gray-700 font-normal text-xs',
          },
          image: getAsset('/assets/services/cost-analytics/nav/allocation.png'),
        },
        {
          label: 'experience curve',
          data: {
            value: 16,
            suffix: '%',
            classes: 'text-red-700',
          },
          image: getAsset('/assets/services/cost-analytics/nav/experience-curve.png'),
        },
        {
          label: 'breakevent point',
          animation: false,
          data: {
            value: 'Y = a + bX',
            classes: 'text-red-700',
          },
          image: getAsset('/assets/services/cost-analytics/nav/breakevent-point.png'),
        },
        {
          label: 'insight',
          data: {
            value: 12.4,
            suffix: '%',
            classes: 'text-red-700',
            icon: 'mdi:caret-up',
            iconClass: 'w-5 md:w-7 -ml-0.5 inline-block text-red-500',
          },
          image: getAsset('/assets/services/cost-analytics/nav/value-chain.png'),
        },
      ],
    },
  },
  {
    key: 'pnl',
    icon: getAsset('/assets/home-services/icon4.png'),
    image: getAsset('/assets/home-services/service4.png'),
    label: 'P&L Analytics Dashboard',
    header: 'Discover how Value-based Drivers leading Growth in Experience Curve learning',
    salepoints: [
      'Find the best key indicators for P&L analytics',
      'Build up Data capture, ETL pipeline, Data model',
      'Provide Financial Ratios, Measures, Indicators give managerial information',
      'Maximize Proﬁtability by detecting Optimal Points',
    ],
    demo: {
      data: [
        {
          label: 'margin',
          data: {
            value: 18.1,
            classes: 'text-lime-500',
            suffix: '$',
            suffixClass: 'align-super -ml-0.5 text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/pnl/nav/flash.png'),
        },
        {
          label: 'growth',
          data: {
            value: 12.3,
            classes: 'text-lime-500',
            suffix: '%',
            icon: 'mdi:caret-up',
            iconClass: 'w-5 md:w-7 -ml-0.5 inline-block text-green-500',
          },
          image: getAsset('/assets/services/pnl/nav/growth.png'),
        },
        {
          label: 'distribution',
          classes: 'text-lime-500',
          data: [
            { value: 80, suffix: '%' },
            { value: 20, suffix: '%' },
          ],
          image: getAsset('/assets/services/pnl/nav/distribution.png'),
        },
        {
          label: 'optimal point',
          data: {
            value: 1.5,
            classes: 'text-lime-500',
            suffix: `<span class="inline-flex items-center"> Slope = <div><div class="h-3 md:h-auto">△y</div> <div>△x</div></div></span>`,
            suffixClass: 'text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/pnl/nav/optimal-points.png'),
        },
        {
          label: 'insights',
          data: {
            value: 47,
            suffix: '$',
            classes: 'text-lime-500',
            suffixClass: '-ml-0.5 align-super text-gray-700 font-normal text-[8px] md:text-xs',
          },
          image: getAsset('/assets/services/pnl/nav/insights.png'),
        },
        {
          label: 'trend',
          data: {
            value: 22.7,
            suffix: '%',
            classes: 'text-lime-500',
            icon: 'tabler:arrow-narrow-up',
            iconClass: 'w-2.5 md:w-4 ml-0.5 inline-block text-green-500',
          },
          image: getAsset('/assets/services/pnl/nav/trend.png'),
        },
      ],
    },
  },
  {
    key: 'performance',
    icon: getAsset('/assets/home-services/icon5.png'),
    image: getAsset('/assets/home-services/service5.png'),
    label: 'Performance Dashboard',
    header: 'Discover how Valued-Based Findings on possibly Correlated Drivers',
    salepoints: [
      'Find the best key indicators for Performance analytics',
      'Build up Data capture, ETL pipeline, Data model',
      'Provide Financial Ratios, Measures, Indicators give managerial information',
      'Optimize Enterprise value by Earned Value Analysis',
    ],
  },
  {
    key: 'budget',
    icon: getAsset('/assets/home-services/icon6.png'),
    image: getAsset('/assets/home-services/service6.png'),
    label: 'Budget & Planning Service',
    header: 'Develop value drivers on possibly leverage proﬁtability through modeling and what-if analysis',
    salepoints: [
      'Deﬁning budget objectives, accessing historical and actual data to develop, prepare, review and reﬁne a budget reporting',
      'Build up Data capture, ETL pipeline, Data model',
      'Provide Financial Ratios, Measures, Indicators give managerial information',
      'Monitor budget by Intergrate BI Reports',
    ],
  },
];
