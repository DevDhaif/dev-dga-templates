import type { Locale } from './locale';

const description =
  'Here you can add a brief description about the purpose of the portal followed with a call to action button and an image or an illustration on the left hand side.';
const descriptionAr =
  'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة متبوعًا بزر الحث على اتخاذ إجراء وصورة أو رسم توضيحي على الجانب الأيسر.';

const en = {
  site: {
    title: 'Home Page Template',
    description: 'The DGA Platforms Code home page template, built with @dev-dga.',
    logoLabel: 'Platform Logo',
  },
  stamp: {
    statement: 'A government website registered with the Digital Government Authority.',
    triggerLabel: 'How you know?',
    ariaLabel: 'Government website verification',
    domainPrefix: 'Official Saudi Government websites URL ends with ',
    domainDescription:
      'Website belongs to an official government organization in the Kingdom of Saudi Arabia always ends with .gov.sa .',
    securityPrefix: 'Official Reliable websites use ',
    securityDescription: 'Ensure the website is using the HTTPS protocol.',
    registrationLabel: 'Registered on Digital Government Authority:',
    registrationNumber: '20260905',
  },
  nav: {
    label: 'Main navigation',
    menuButton: 'Open menu',
    close: 'Close',
    drawerTitle: 'Menu',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'],
    drawerLink: 'Link',
    account: 'Account',
    search: 'Search',
    language: 'عربي',
    login: 'Login',
    searchPanel: 'Search',
    searchPlaceholder: 'Search',
    searchButton: 'Search',
    clear: 'Clear search',
    voice: 'Search by voice',
    suggestionsTitle: 'Suggestions for you',
    suggestions: ['Training', 'Services', 'Articles'],
  },
  utility: {
    label: 'Utility bar',
    items: [
      { icon: 'cloud', text: 'Cloudy' },
      { icon: 'calendar', text: '3-Sep-2026' },
      { icon: 'clock', text: '2:30 PM' },
      { icon: 'location', text: 'Al-Riyadh' },
    ] as { icon: 'cloud' | 'calendar' | 'clock' | 'location'; text: string }[],
    actions: [
      { icon: 'mic', label: 'Voice search' },
      { icon: 'zoomOut', label: 'Zoom out' },
      { icon: 'zoomIn', label: 'Zoom in' },
      { icon: 'view', label: 'Reading mode' },
      { icon: 'theme' },
    ] as ({ icon: 'mic' | 'zoomOut' | 'zoomIn' | 'view'; label: string } | { icon: 'theme' })[],
    theme: { dark: 'Dark mode', light: 'Light mode' },
  },
  hero: {
    label: 'Hero Section',
    slideLabel: 'Go to slide {n}',
    title: 'Hero Section',
    description,
    cta: 'Primary Button',
    count: 4,
  },
  about: {
    title: 'About us Section',
    description,
    action: 'Secondary',
    stats: [
      { icon: 'users', value: '1.5M', label: 'Person' },
      { icon: 'plus', value: '1.5M', label: 'Person' },
      { icon: 'star', value: '1.5M', label: 'Person' },
      { icon: 'plant', value: '1.5M', label: 'Person' },
    ],
  },
  services: {
    title: 'Services Section',
    description,
    viewAll: 'View all',
    label: 'Services carousel',
    pageLabel: 'Go to services page {n}',
    card: {
      title: 'Card Title',
      description: 'Card content placeholder text goes here',
      tags: ['Tag 1', 'Tag 2', 'Tag 3'],
      secondary: 'Action',
      primary: 'Action',
    },
    count: 16,
    mobileCount: 4,
    mobileAction: 'lg' as 'md' | 'lg',
  },
  news: {
    title: 'Articles and News Section',
    description: 'Here you can add a brief description about the purpose of the portal.',
    viewAll: 'View all',
    label: 'News carousel',
    pageLabel: 'Go to article {n}',
    card: {
      title: 'The Title of the News Card in two Lines',
      description:
        'Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.',
      mobileDescription:
        'Here you can include a brief description of the headline in four lines. Here you can include a brief description of the headline in four lines.',
      readMore: 'Read More',
    },
    count: 3,
    mobileCount: 4,
    mobileSlide: 350,
  },
  partners: {
    title: 'Partner Section',
    label: 'Partners carousel',
    prev: 'Previous partners',
    next: 'Next partners',
    logo: 'Platform Logo',
    perRow: 9,
    gap: 14.7,
    tileWidth: 117,
    count: 18,
  },
  lastModified: 'Last Modified Date: 04/12/2026 - 4:13 PM Saudi Arabia Time',
  footer: {
    label: 'Site footer',
    navLabel: 'Footer links',
    legalLabel: 'Legal',
    groups: [
      {
        label: 'Overview',
        links: [
          'About [name of the portal]',
          'Privacy and terms of use',
          'How to use [name of the portal]',
          'News and events',
          'Service level agreement statistics',
        ],
      },
      {
        label: 'Important links',
        links: [
          'National service portal',
          'Open government data',
          'National strategy for data & Artificial intelligence',
          'Open data portal',
          'E-Participation portal',
        ],
      },
      {
        label: 'Contact & support',
        links: [
          'Customer hub',
          'Contact us',
          'Engage with Us',
          'Submit complaint',
          'Report corruption',
        ],
      },
    ],
    social: {
      label: 'Social Media',
      mobileLabel: 'Social Media',
      items: [
        { icon: 'x', label: 'X' },
        { icon: 'linkedin', label: 'LinkedIn' },
        { icon: 'instagram', label: 'Instagram' },
      ] as { icon: 'x' | 'linkedin' | 'instagram'; label: string }[],
    },
    accessibility: {
      label: 'Accessibility Tools',
      items: [
        { icon: 'hand', label: 'Sign language' },
        { icon: 'zoom', label: 'Zoom' },
        { icon: 'eye', label: 'View' },
      ] as { icon: 'hand' | 'zoom' | 'eye'; label: string }[],
    },
    mobileColumn: ['social', 'accessibility'] as ('social' | 'accessibility')[],
    legalLinks: ['Sitemap', 'RSS', 'Mobile App'],
    caption: 'All Right Reserved For Digital Government Authority © 2026',
    developedBy: {
      prefix: 'Developed and maintained by ',
      author: 'DevDhaif',
      authorUrl: 'https://www.linkedin.com/in/devdhaif',
      infix: ' using ',
      library: '@dev-dga',
      libraryUrl: 'https://dev-dga-hub.vercel.app',
    },
    lastModified: 'Last Modified Date: 04/12/2026',
    aiLogo: 'Year of Artificial Intelligence',
    aiLogoWidth: 125,
    platformLogo: 'Platform Logo',
    logos: {
      desktop: ['ai', 'placeholder'] as ('ai' | 'placeholder')[],
      mobile: ['ai', 'placeholder'] as ('ai' | 'placeholder')[],
    },
  },
  nationalDay: {
    site: {
      title: 'Saudi National Day Template',
      description:
        'The DGA Platforms Code home page under a Saudi National Day brand layer, built with @dev-dga.',
    },
    hero: {
      label: 'National Day hero carousel',
      slideLabel: 'Go to slide {n}',
      announce: 'Slide {n} of {m}',
      prev: 'Previous slide',
      next: 'Next slide',
      logoAlt: 'Saudi National Day',
      artAlt: 'National Day artwork: {name}',
      slides: {
        vision: {
          name: 'Vision',
          lead: 'Our pride is',
          accent: 'our vision',
          description:
            'Saudi Vision 2030, launched by Crown Prince Mohammed bin Salman, sets out to build a prosperous, sustainable future. It trusts our ability to transform and to build a better country while holding on to our identity.',
        },
        giving: {
          name: 'Giving',
          lead: 'Our pride is',
          accent: 'our giving',
          description:
            'Giving is among the highest qualities in Saudi identity, passed down through generations. It is not only money: it is time, effort and presence. It shows in the coffee pot that never goes cold and the door left open.',
        },
        generosity: {
          name: 'Generosity',
          lead: 'Our pride is',
          accent: 'our generosity',
          description:
            'Generosity is a core value of our culture and one of the clearest marks of Saudi identity. It goes beyond hosting well: it is the warmth of the welcome and the readiness to help, and Saudis grow up with it.',
        },
        determination: {
          name: 'Determination',
          lead: 'Our pride is',
          accent: 'our determination',
          description:
            'Determination is among the qualities that most distinguish the Saudi character: the drive that moves ambition and leads to achievement. It is drawn from our belief in what we can do and our confidence in the future.',
        },
        courage: {
          name: 'Courage',
          lead: 'Our pride is',
          accent: 'our courage',
          description:
            'Courage is an old value in both our peace and our custom: we answer without hesitation and stand by whoever calls on us. Its people have always been a support and a help to anyone in need.',
        },
        authenticity: {
          name: 'Authenticity',
          lead: 'Our pride is',
          accent: 'our authenticity',
          description:
            'Authenticity in Saudi society reflects how people hold to their roots and their history, and how they take pride in what they inherited. It shows in customs and in values carried from one generation to the next.',
        },
      },
    },
  },
  templates: {
    eyebrow: 'dev-dga templates',
    title: 'Platforms Code templates',
    description:
      'Government page templates built entirely from @dev-dga React components. Arabic first, RTL native, English mirror, light and dark. Pick one to open the live demo.',
    cta: 'View template',
    items: {
      home: {
        name: 'Home page',
        description:
          'The DGA home page template: digital stamp, nav header, hero, about, services, news, partners, and footer.',
        tags: ['Arabic and English', 'Light and dark', '10 sections'],
      },
      nationalDay: {
        name: 'Saudi National Day',
        description:
          'The same page under the National Day brand layer, with a six-card hero deck that steps through the campaign themes.',
        tags: ['Arabic and English', 'National Day identity', 'Animated hero'],
      },
    },
  },
  notFound: {
    title: 'Page not found',
    back: 'Back to the home page',
  },
};

export type Copy = typeof en;

const ar: Copy = {
  site: {
    title: 'قالب الصفحة الرئيسية',
    description: 'قالب الصفحة الرئيسية لكود المنصات، مبني بمكوّنات @dev-dga.',
    logoLabel: 'شعار المنصة',
  },
  stamp: {
    statement: 'موقع حكومي مسجل لدى هيئة الحكومة الرقمية',
    triggerLabel: 'كيف تتحقق؟',
    ariaLabel: 'التحقق من الموقع الحكومي',
    domainPrefix: 'روابط المواقع الحكومية السعودية الرسمية تنتهي بـ ',
    domainDescription:
      'الموقع الذي يتبع جهة حكومية رسمية في المملكة العربية السعودية ينتهي دائمًا بـ .gov.sa.',
    securityPrefix: 'المواقع الرسمية الموثوقة تستخدم بروتوكول ',
    securityDescription: 'تأكد من أن الموقع يستخدم بروتوكول HTTPS.',
    registrationLabel: 'مسجل لدى هيئة الحكومة الرقمية برقم:',
    registrationNumber: '20260905',
  },
  nav: {
    label: 'التنقل الرئيسي',
    menuButton: 'فتح القائمة',
    close: 'إغلاق',
    drawerTitle: 'القائمة',
    items: ['تبويب 1', 'تبويب 2', 'تبويب 3', 'تبويب 4', 'تبويب 5', 'تبويب 6', 'تبويب 7'],
    drawerLink: 'رابط',
    account: 'الحساب',
    search: 'البحث',
    language: 'English',
    login: 'تسجيل الدخول',
    searchPanel: 'البحث',
    searchPlaceholder: 'بحث',
    searchButton: 'بحث',
    clear: 'مسح البحث',
    voice: 'البحث بالصوت',
    suggestionsTitle: 'اقتراحات',
    suggestions: ['التدريب', 'الخدمات', 'المقالات'],
  },
  utility: {
    label: 'شريط الأدوات',
    items: [
      { icon: 'cloud', text: 'غائم' },
      { icon: 'calendar', text: '3-سبتمبر-2026' },
      { icon: 'clock', text: '2:30 مساءً' },
      { icon: 'location', text: 'الرياض' },
    ],
    actions: [
      { icon: 'theme' },
      { icon: 'view', label: 'وضع القراءة' },
      { icon: 'zoomIn', label: 'تكبير' },
      { icon: 'zoomOut', label: 'تصغير' },
      { icon: 'mic', label: 'البحث الصوتي' },
    ],
    theme: { dark: 'الوضع الداكن', light: 'الوضع الفاتح' },
  },
  hero: {
    label: 'القسم الرئيسي',
    slideLabel: 'الانتقال إلى الشريحة {n}',
    title: 'القسم الرئيسي',
    description: descriptionAr,
    cta: 'إجراء رئيسي',
    count: 4,
  },
  about: {
    title: 'قسم من نحن',
    description: descriptionAr,
    action: 'إجراء ثانوي',
    stats: [
      { icon: 'users', value: '1.5M', label: 'شخص' },
      { icon: 'plus', value: '1.5M', label: 'شخص' },
      { icon: 'star', value: '1.5M', label: 'شخص' },
      { icon: 'plant', value: '1.5M', label: 'شخص' },
    ],
  },
  services: {
    title: 'قسم الخدمات',
    description: descriptionAr,
    viewAll: 'عرض الكل',
    label: 'عرض الخدمات الدوّار',
    pageLabel: 'الانتقال إلى صفحة الخدمات {n}',
    card: {
      title: 'عنوان البطاقة',
      description: 'نص إضافي لمحتوى البطاقة',
      tags: ['وسم', 'وسم', 'وسم'],
      secondary: 'اجراء ثانوي',
      primary: 'اجراء',
    },
    count: 16,
    mobileCount: 4,
    mobileAction: 'md',
  },
  news: {
    title: 'قسم الاخبار والمقالات',
    description: 'هنا يمكنك إضافة وصف مختصر حول الغرض من البوابة.',
    viewAll: 'عرض الكل',
    label: 'عرض الأخبار الدوّار',
    pageLabel: 'الانتقال إلى المقال {n}',
    card: {
      title: 'عنوان بطاقة الأخبار في سطرين',
      description:
        'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.',
      mobileDescription:
        'هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر. هنا يمكنك تضمين وصف موجز للعنوان في أربعة أسطر.',
      readMore: 'قراءة المزيد',
    },
    count: 3,
    mobileCount: 4,
    mobileSlide: 352,
  },
  partners: {
    title: 'قسم الشركاء',
    label: 'عرض الشركاء الدوّار',
    prev: 'الشركاء السابقون',
    next: 'الشركاء التالون',
    logo: 'شعار المنصة',
    perRow: 10,
    gap: 20,
    tileWidth: 98,
    count: 20,
  },
  lastModified: 'تاريخ آخر تعديل: 04/12/2026 - 4:13 م بتوقيت السعودية',
  footer: {
    label: 'تذييل الموقع',
    navLabel: 'روابط التذييل',
    legalLabel: 'قانوني',
    groups: [
      {
        label: 'ملخص',
        links: [
          'حول [اسم البوابة]',
          'الخصوصية وشروط الاستخدام',
          'كيفية استخدام [اسم البوابة]',
          'الأخبار والأحداث',
          'إحصائيات اتفاقية مستوى الخدمة',
        ],
      },
      {
        label: 'روابط مهمة',
        links: [
          'بوابة الخدمة الوطنية',
          'البيانات الحكومية المفتوحة',
          'الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي',
          'بوابة البيانات المفتوحة',
          'بوابة المشاركة الإلكترونية',
        ],
      },
      {
        label: 'الاتصال والدعم',
        links: ['مركز العملاء', 'تواصل معنا', 'شارك معنا', 'تقديم شكوى', 'الإبلاغ عن الفساد'],
      },
    ],
    social: {
      label: 'تابعنا على',
      mobileLabel: 'تواصل معنا',
      items: [
        { icon: 'instagram', label: 'Instagram' },
        { icon: 'linkedin', label: 'LinkedIn' },
        { icon: 'x', label: 'X' },
      ],
    },
    accessibility: {
      label: 'أدوات الاتاحة والوصول',
      items: [
        { icon: 'eye', label: 'عرض' },
        { icon: 'zoom', label: 'تكبير' },
        { icon: 'hand', label: 'لغة الإشارة' },
      ],
    },
    mobileColumn: ['accessibility', 'social'],
    legalLinks: ['خريطة الموقع', 'RSS', 'تطبيق الجوال'],
    caption: 'جميع الحقوق محفوظة لهيئة الحكومة الرقمية © 2026',
    developedBy: {
      prefix: 'تم تطويره وصيانته بواسطة ',
      author: 'DevDhaif',
      authorUrl: 'https://www.linkedin.com/in/devdhaif',
      infix: ' باستخدام ',
      library: '@dev-dga',
      libraryUrl: 'https://dev-dga-hub.vercel.app',
    },
    lastModified: 'تاريخ آخر تعديل: 04/12/2026',
    aiLogo: 'عام الذكاء الاصطناعي',
    aiLogoWidth: 106,
    platformLogo: 'شعار المنصة',
    logos: {
      desktop: ['ai', 'placeholder'],
      mobile: ['ai', 'placeholder'],
    },
  },
  nationalDay: {
    site: {
      title: 'قالب اليوم الوطني السعودي',
      description:
        'الصفحة الرئيسية لكود المنصات بهوية اليوم الوطني السعودي، مبنية بمكوّنات @dev-dga.',
    },
    hero: {
      label: 'شريط اليوم الوطني',
      slideLabel: 'الانتقال إلى الشريحة {n}',
      announce: 'الشريحة {n} من {m}',
      prev: 'الشريحة السابقة',
      next: 'الشريحة التالية',
      logoAlt: 'اليوم الوطني السعودي',
      artAlt: 'عمل فني لليوم الوطني: {name}',
      slides: {
        vision: {
          name: 'الرؤية',
          lead: 'عِزّنا',
          accent: 'برؤيتنا',
          description:
            'رؤية السعودية 2030، التي أطلقها ولي العهد الأمير محمد بن سلمان، تهدف لبناء مستقبل مزدهر ومستدام. تؤمن الرؤية بقدرتنا على التحول والتقدم وصناعة مستقبل أفضل لوطننا مع الحفاظ على هويتنا وقيمنا، مما يعكس وعيًا عميقًا وطموحًا لصناعة الغد.',
        },
        giving: {
          name: 'الجود',
          lead: 'عِزّنا',
          accent: 'بجودنا',
          description:
            'الجود من أسمى الصفات في الهوية السعودية، ورثها السعوديون أبًا عن جد. الجود ليس فقط في المال، بل في الوقت والجهد والمواقف. في الثقافة السعودية، الجود يعني العطاء من القلب، وفتح الدار قبل السؤال، والفرح بالعطاء. هو طبع متأصل يظهر في الدلة التي لا تبرد، والباب المفتوح، والمبخرة التي لا تنطفئ.',
        },
        generosity: {
          name: 'الكرم',
          lead: 'عِزّنا',
          accent: 'بكرمنا',
          description:
            'الكرم من القيم الأساسية في ثقافتنا، ويعد من أبرز سمات الهوية السعودية، ويتجاوز مجرد حسن الضيافة، ليشمل حفاوة الاستقبال والمبادرة بالمساعدة. يعد الكرم رمزًا للأصالة والانتماء، ويربى عليه السعوديون منذ الصغر، مما يجعله جزءًا طبيعيًا من الحياة اليومية والعلاقات الاجتماعية.',
        },
        determination: {
          name: 'الهمة',
          lead: 'عِزّنا',
          accent: 'بهمّتنا',
          description:
            'الهمة من أبرز الصفات التي تميز الشخصية السعودية، فهي الدافع الذي يحرك الطموح ويقود نحو الإنجاز. وقد أصبحت الهمة جزءًا من ثقافتنا الوطنية، نستمدها من إيماننا بقدراتنا وثقتنا بمستقبلنا.',
        },
        courage: {
          name: 'الشجاعة',
          lead: 'عِزّنا',
          accent: 'بشجاعتنا',
          description:
            'لأن الشجاعة في سلمنا وعرفنا قيمة أصيلة، نفزع بلا تردد وننجد من استنجدنا، وهي صفة متجذرة فينا منذ القدم وامتدادًا عبر تاريخ هذه البلاد العظيمة، حيث كان أبناء الوطن دائمًا سندًا وعونًا لكل محتاج.',
        },
        authenticity: {
          name: 'الأصالة',
          lead: 'عِزّنا',
          accent: 'بأصالتنا',
          description:
            'الأصالة في المجتمع السعودي تعكس ارتباط الناس بجذورهم وتاريخهم، واعتزازهم بإرثهم. فهي تظهر في التمسك بالعادات والتقاليد، واستمرار القيم التي تتوارثها الأجيال.',
        },
      },
    },
  },
  templates: {
    eyebrow: 'قوالب dev-dga',
    title: 'قوالب كود المنصات',
    description:
      'قوالب صفحات حكومية مبنية بالكامل من مكوّنات @dev-dga لـ React. عربي أولًا، واتجاه من اليمين إلى اليسار، مع نسخة إنجليزية، ووضع فاتح وداكن. اختر قالبًا لعرضه.',
    cta: 'عرض القالب',
    items: {
      home: {
        name: 'الصفحة الرئيسية',
        description:
          'قالب الصفحة الرئيسية من هيئة الحكومة الرقمية: الختم الرقمي، وشريط التنقل، والواجهة، ومن نحن، والخدمات، والأخبار، والشركاء، والتذييل.',
        tags: ['عربي وإنجليزي', 'فاتح وداكن', '10 أقسام'],
      },
      nationalDay: {
        name: 'اليوم الوطني السعودي',
        description:
          'الصفحة نفسها بهوية اليوم الوطني، مع واجهة من ست بطاقات تتنقل بين محاور الحملة.',
        tags: ['عربي وإنجليزي', 'هوية اليوم الوطني', 'واجهة متحركة'],
      },
    },
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    back: 'العودة إلى الصفحة الرئيسية',
  },
};

export const copy: Record<Locale, Copy> = { en, ar };
