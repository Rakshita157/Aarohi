export const categories = [
  'All',
  'Basics',
  'Hygiene',
  'Nutrition',
  'Wellness',
  'Myths',
];

export const modules = [
  {
    id: 1,
    title: 'Your First Period',
    description: 'Everything you need to know about your first period — what to expect and how to prepare with confidence.',
    category: 'Basics',
    readingTime: '5 min read',
    beginner: true,
  },
  {
    id: 2,
    title: 'Know Your Cycle',
    description: 'Understand the four phases of your menstrual cycle and how they affect your body and emotions.',
    category: 'Basics',
    readingTime: '7 min read',
    beginner: true,
  },
  {
    id: 3,
    title: 'Healthy Habits',
    description: 'Simple daily routines to support your menstrual health and boost your overall well-being.',
    category: 'Wellness',
    readingTime: '6 min read',
    beginner: false,
  },
  {
    id: 4,
    title: 'Period Care',
    description: 'Explore different period products and find the comfort that works best for your body.',
    category: 'Hygiene',
    readingTime: '8 min read',
    beginner: false,
  },
  {
    id: 5,
    title: 'Nourish Yourself',
    description: 'Discover foods that help balance hormones and ease period discomfort naturally.',
    category: 'Nutrition',
    readingTime: '6 min read',
    beginner: false,
  },
  {
    id: 6,
    title: 'Mind & Mood',
    description: 'Learn how hormones influence your emotions and practice mindfulness techniques.',
    category: 'Wellness',
    readingTime: '7 min read',
    beginner: false,
  },
  {
    id: 7,
    title: 'Myth Busters',
    description: 'Separate fact from fiction with science-backed answers to common period myths.',
    category: 'Myths',
    readingTime: '5 min read',
    beginner: false,
  },
];

export const lessonContent = {
  1: {
    sections: [
      {
        type: 'heading',
        content: 'What is a Period?',
      },
      {
        type: 'body',
        content:
          'A period (menstruation) is the monthly shedding of the uterine lining. Each month, your body prepares for a possible pregnancy by building up a soft, nutrient-rich lining in your uterus. When pregnancy doesn\'t happen, your body sheds this lining through your vagina. This is your period — and it\'s a completely normal, healthy sign that your body is maturing.',
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          'The average menstrual cycle is 28 days, but anywhere from 21 to 35 days is perfectly normal — especially in the first few years.',
      },
      {
        type: 'body',
        content:
          'Your period usually lasts between 3 and 7 days. The flow may be heavier on the first couple of days and lighter toward the end. The colour can range from bright red to dark brown — all of these are normal.',
      },
      {
        type: 'image',
        content: 'cycle-diagram',
        caption: 'The four phases of your menstrual cycle',
      },
      {
        type: 'heading',
        content: 'When Will It Start?',
      },
      {
        type: 'body',
        content:
          'Most people get their first period between ages 10 and 15. The average age is around 12. Your body will usually give you some signs before your first period arrives:',
      },
      {
        type: 'checklist',
        items: [
          'Breast buds — small, tender lumps under your nipples',
          'Vaginal discharge — clear or white fluid, often starting 6–12 months before your first period',
          'Growth spurt — a rapid increase in height',
          'Body hair — under your arms and in your pubic area',
        ],
      },
      {
        type: 'body',
        content:
          'If your first period hasn\'t arrived by age 16, it\'s a good idea to talk to a trusted adult or a doctor — but there\'s usually nothing to worry about.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Every body is different. Your friend may have started her period at 11, and you may start at 14. Both are completely normal. Don\'t compare — your timeline is the right timeline for you.',
      },
      {
        type: 'heading',
        content: 'What to Expect',
      },
      {
        type: 'body',
        content:
          'Your first few periods may be irregular — this is common. Here\'s what you might experience:',
      },
      {
        type: 'checklist',
        items: [
          'Bleeding that ranges from bright red to dark brown',
          'Mild to moderate cramps in your lower belly',
          'Bloating or feeling a bit puffy',
          'Mood swings — feeling emotional, irritable, or tearful',
          'Fatigue or low energy',
          'Breast tenderness',
          'Headaches or backaches',
        ],
      },
      {
        type: 'body',
        content:
          'These symptoms are caused by hormones — chemical messengers in your body that help regulate your cycle. They usually improve after the first couple of days. If cramps are severe enough to interfere with school or daily activities, talk to a trusted adult or healthcare provider.',
      },
      {
        type: 'quiz',
        question: 'How long does a typical period last?',
        options: ['1–2 days', '3–7 days', '10–14 days', 'It varies for everyone'],
        correct: 1,
        explanation:
          'A typical period lasts between 3 and 7 days. The first couple of days are usually the heaviest.',
      },
      {
        type: 'heading',
        content: 'How to Prepare',
      },
      {
        type: 'body',
        content:
          'Being prepared helps you feel confident when your period arrives. Consider creating a small period kit you can keep in your bag or locker:',
      },
      {
        type: 'checklist',
        icon: 'bag',
        items: [
          'Pads or pantyliners — start with thin, everyday pads',
          'A spare pair of underwear',
          'Wet wipes or tissue',
          'A small pouch or makeup bag to keep everything private',
          'Pain relief — if cramps bother you, ask a parent about safe options',
          'A period tracker app or calendar to note your start date',
        ],
      },
      {
        type: 'body',
        content:
          'When your period starts, place a fresh pad in your underwear, change it every 4–6 hours (or more often if the flow is heavy), and wash your hands afterward. It\'s that simple.',
      },
      {
        type: 'highlight',
        icon: 'tip',
        content:
          'Tip: Keep a pad or two in your school locker or a small pouch in your bag. You\'ll feel more confident knowing you\'re prepared — and you might even help a friend who needs one!',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Your period is a normal, healthy sign that your body is developing.',
          'First periods usually arrive between ages 10–15.',
          'A typical period lasts 3–7 days and the flow varies.',
          'Cramps, mood swings, and fatigue are common — and usually manageable.',
          'Being prepared with a period kit helps you feel confident.',
          'If you\'re worried about anything, talk to a trusted adult — you\'re not alone.',
        ],
      },
      {
        type: 'next',
        moduleId: 2,
        title: 'Know Your Cycle',
        description:
          'Continue your journey by learning about the four phases of your menstrual cycle and how they affect your body.',
      },
    ],
  },
};
