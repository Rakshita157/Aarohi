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
    description: 'Everything you need to know about your first period, what to expect and how to prepare with confidence.',
    category: 'Basics',
    readingTime: '5 min read',
    beginner: true,
  },
  {
    id: 2,
    title: 'Know Your Cycle',
    description: 'Learn how your cycle affects your energy, mood, sleep, and emotions, and discover what your body is communicating each month.',
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
    description: 'Period care is all about managing your period comfortably and hygienically. With the right habits, you can feel confident and prepared every month.',
    category: 'Hygiene',
    readingTime: '8 min read',
    beginner: false,
  },
  {
    id: 5,
    title: 'Nourish Yourself',
    description: 'Discover how balanced meals and healthy habits give your body the nutrients it needs to grow, stay active, and feel its best.',
    category: 'Nutrition',
    readingTime: '6 min read',
    beginner: false,
  },
  {
    id: 6,
    title: 'Mind & Mood',
    description: 'Learn to understand and care for your mental wellbeing so you can feel more confident, resilient, and balanced.',
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
          'A period (menstruation) is the monthly shedding of the uterine lining. Each month, your body prepares for a possible pregnancy by building up a soft, nutrient-rich lining in your uterus. When pregnancy doesn\'t happen, your body sheds this lining through your vagina. This is your period, and it\'s a completely normal, healthy sign that your body is maturing.',
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          'The average menstrual cycle is 28 days, but anywhere from 21 to 35 days is perfectly normal, especially in the first few years.',
      },
      {
        type: 'body',
        content:
          'Your period usually lasts between 3 and 7 days. The flow may be heavier on the first couple of days and lighter toward the end. The colour can range from bright red to dark brown, all of these are normal.',
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
          'Breast buds - small, tender lumps under your nipples',
          'Vaginal discharge - clear or white fluid, often starting 6-12 months before your first period',
          'Growth spurt - a rapid increase in height',
          'Body hair - under your arms and in your private area',
        ],
      },
      {
        type: 'body',
        content:
          'If your first period hasn\'t arrived by age 16, it\'s a good idea to talk to a trusted adult or a doctor, but there\'s usually nothing to worry about.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Every body is different. Your friend may have started her period at 11, and you may start at 14. Both are completely normal. Don\'t compare, your timeline is the right timeline for you.',
      },
      {
        type: 'heading',
        content: 'What to Expect',
      },
      {
        type: 'body',
        content:
          'Your first few periods may be irregular, this is common. Here\'s what you might experience:',
      },
      {
        type: 'checklist',
        items: [
          'Bleeding that ranges from bright red to dark brown',
          'Mild to moderate cramps in your lower belly',
          'Bloating or feeling a bit puffy',
          'Mood swings, feeling emotional, irritable, or tearful',
          'Fatigue or low energy',
          'Breast tenderness',
          'Headaches or backaches',
        ],
      },
      {
        type: 'body',
        content:
          'These symptoms are caused by hormones, chemical messengers in your body that help regulate your cycle. They usually improve after the first couple of days. If cramps are severe enough to interfere with school or daily activities, talk to a trusted adult or healthcare provider.',
      },
      {
        type: 'quiz',
        question: 'What exactly is a period?',
        options: [
          'An illness that needs treatment',
          'The monthly shedding of the uterine lining',
          'A sign that something is wrong',
          'A build-up of blood from an injury',
        ],
        correct: 1,
        explanation:
          'A period is the monthly shedding of the uterine lining. Your body prepares for a possible pregnancy each month, and when pregnancy doesn\'t happen, it sheds the built-up lining through your vagina.',
      },
      {
        type: 'quiz',
        question: 'At what age do most people get their first period?',
        options: ['Between 6–9', 'Between 10–15', 'Between 16–20', 'Only after age 18'],
        correct: 1,
        explanation:
          'Most people get their first period between ages 10 and 15, with the average being around 12. Every body is different, and your timeline is the right one for you.',
      },
      {
        type: 'quiz',
        question: 'Which of the following is a common sign that your first period is approaching?',
        options: [
          'Sudden loss of appetite',
          'Permanent height increase',
          'Vaginal discharge starting 6–12 months before',
          'Your voice getting deeper',
        ],
        correct: 2,
        explanation:
          'Vaginal discharge (clear or white fluid) often starts 6–12 months before your first period. Other signs include breast buds, a growth spurt, and body hair growth.',
      },
      {
        type: 'quiz',
        question: 'How long does a typical period last?',
        options: ['1–2 days', '3–7 days', '10–14 days', 'It varies for everyone'],
        correct: 1,
        explanation:
          'A typical period lasts between 3 and 7 days. The first couple of days are usually the heaviest, and the colour can range from bright red to dark brown.',
      },
      {
        type: 'quiz',
        question: 'What should you include in a period kit to feel prepared?',
        options: [
          'A first aid bandage and pain relief',
          'Pads or pantyliners, a spare change of underwear, and wet wipes',
          'A blanket and a hot water bottle only',
          'Medicine for cold and cough',
        ],
        correct: 1,
        explanation:
          'A good period kit includes pads or pantyliners, a spare pair of underwear, wet wipes or tissue, and pain relief if cramps bother you. Keeping one in your bag or locker helps you feel confident and prepared.',
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
          'Pads or pantyliners, start with thin, everyday pads',
          'A spare pair of underwear',
          'Wet wipes or tissue',
          'A small pouch or makeup bag to keep everything private',
          'Pain relief, if cramps bother you, ask a parent about safe options',
          'A period tracker app or calendar to note your start date',
        ],
      },
      {
        type: 'body',
        content:
          'When your period starts, place a fresh pad in your underwear, change it every 4-6 hours (or more often if the flow is heavy), and wash your hands afterward. It\'s that simple.',
      },
      {
        type: 'highlight',
        icon: 'tip',
        content:
          'Tip: Keep a pad or two in your school locker or a small pouch in your bag. You\'ll feel more confident knowing you\'re prepared, and you might even help a friend who needs one!',
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
          'Cramps, mood swings, and fatigue are common and usually manageable.',
          'Being prepared with a period kit helps you feel confident.',
          'If you\'re worried about anything, talk to a trusted adult, you\'re not alone.',
        ],
      },
      {
        type: 'next',
        moduleId: 2,
        title: 'Know Your Cycle',
        description:
          'Learn how your cycle affects your energy, mood, sleep, and emotions and discover what your body is communicating each month.',
      },
    ],
  },
  2: {
    sections: [
      {
        type: 'heading',
        content: 'Your Body Has a Monthly Rhythm',
      },
      {
        type: 'body',
        content:
          'Many people think a menstrual cycle is just a period, but your period is actually only one part of a much bigger process. Throughout the month, your body follows a natural rhythm guided by hormones. These hormones help your body prepare for a possible pregnancy, even if you\'re not planning to have a baby.',
      },
      {
        type: 'pullquote',
        content: 'Your period is only one part of a much bigger process happening in your body every month.',
        attribution: ' Know Your Cycle',
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          'As hormone levels rise and fall, you may notice changes in your energy, mood, hunger, sleep patterns, skin health, and physical comfort. These changes are normal and happen to almost everyone who menstruates.',
      },
      {
        type: 'body',
        content:
          'These changes are normal and happen to almost everyone who menstruates, although the experience is different for each person. Think of your cycle as your body\'s monthly calendar. Understanding it can help you know what to expect and feel more in control.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Think of your cycle as your body\'s monthly calendar. Understanding it can help you know what to expect and feel more in control.',
      },
      {
        type: 'heading',
        content: 'Why Do I Feel Different During the Month?',
      },
      {
        type: 'body',
        content:
          'Have you ever noticed that some days you feel energetic and motivated, while other days you feel tired, emotional, or easily annoyed? Hormones are often the reason. During different parts of your cycle, your body produces varying amounts of hormones such as estrogen and progesterone. These hormones don\'t just affect your reproductive system, they can influence your brain and body too.',
      },
      {
        type: 'body',
        content:
          'You might notice: Some days you feel confident and focused. Some days you have more energy for sports or activities. Some days you feel tired and need extra rest. Some days you crave certain foods. Some days your emotions feel stronger than usual.',
      },
      {
        type: 'body',
        content:
          'None of these experiences mean something is wrong. They are common signs that your body is moving through different stages of its cycle.',
      },
      {
        type: 'heading',
        content: 'Every Cycle Is Unique',
      },
      {
        type: 'body',
        content:
          'One of the most important things to remember is that there is no "perfect" cycle. Some people have a 24-day cycle, others have a 28-day cycle, and some have a 32-day cycle. All of these can be completely normal.',
      },
      {
        type: 'body',
        content:
          'It\'s also common for cycles to be irregular during the first few years after your first period. Your body is still learning how to regulate its hormones.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Don\'t compare your cycle to a friend\'s. Just because someone else\'s period arrives on the same date every month doesn\'t mean yours should. Your cycle is personal to you.',
      },
      {
        type: 'heading',
        content: 'Becoming a Cycle Detective',
      },
      {
        type: 'body',
        content:
          'A great way to learn about your body is to start paying attention to patterns. You don\'t need to track every detail. Simply noticing changes can be helpful.',
      },
      {
        type: 'checklist',
        items: [
          'When your period starts and ends',
          'Your mood throughout the month',
          'Your energy levels on different days',
          'Sleep quality and how rested you feel',
          'Symptoms like cramps, headaches, or bloating',
          'Food cravings or changes in appetite',
        ],
      },
      {
        type: 'body',
        content:
          'After a few months, you may begin to notice patterns. For example, you might feel more energetic during certain weeks, crave snacks before your period, or feel more tired during the first days of bleeding. Recognizing these patterns can help you plan, prepare, and take better care of yourself.',
      },
      {
        type: 'highlight',
        icon: 'tip',
        content:
          'Tip: Tracking is not about being perfect. It\'s about getting to know your body better.',
      },
      {
        type: 'quiz',
        question: 'What is a menstrual cycle?',
        options: [
          'Just the days you are bleeding',
          'The entire month-long process your body goes through each month',
          'Only the time between one period and the next',
          'The week after your period ends',
        ],
        correct: 1,
        explanation:
          'A menstrual cycle is the entire month-long process your body goes through, not just the days you bleed. Your period is only one part of this cycle.',
      },
      {
        type: 'quiz',
        question: 'What guides the changes in your body throughout your cycle?',
        options: [
          'The food you eat',
          'Hormones like estrogen and progesterone',
          'How much exercise you do',
          'The weather outside',
        ],
        correct: 1,
        explanation:
          'Hormones such as estrogen and progesterone rise and fall throughout your cycle, influencing your energy, mood, sleep, and physical symptoms.',
      },
      {
        type: 'quiz',
        question: 'Which of the following can change during your menstrual cycle?',
        options: [
          'Your height',
          'Your energy levels and mood',
          'Your eye colour',
          'The shape of your face',
        ],
        correct: 1,
        explanation:
          'Your energy levels, mood, appetite, sleep quality, and skin health can all change during different phases of your cycle due to hormone fluctuations.',
      },
      {
        type: 'quiz',
        question: 'What is considered a normal cycle length?',
        options: [
          'Exactly 28 days for everyone',
          'Anywhere from 21 to 35 days',
          'Always 30 days',
          'Less than 20 days',
        ],
        correct: 1,
        explanation:
          'A normal cycle can range from 21 to 35 days. There is no single "perfect" cycle length, every person is different.',
      },
      {
        type: 'quiz',
        question: 'What is the best way to learn about your personal cycle patterns?',
        options: [
          'Ignore how you feel each day',
          'Track things like your period, mood, and energy over time',
          'Compare yourself to your friends',
          'Only pay attention when you feel unwell',
        ],
        correct: 1,
        explanation:
          'Tracking your period, mood, energy, and symptoms over a few months helps you recognize your unique patterns and feel more prepared.',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Your menstrual cycle is more than just your period, it\'s a month-long process.',
          'Hormones can influence your mood, energy, sleep, appetite, and physical symptoms.',
          'Every person\'s cycle is different, and there is no "perfect" cycle length.',
          'Irregular cycles are common during the first few years after your first period.',
          'Paying attention to your body\'s patterns can help you feel more prepared and confident.',
          'Understanding your cycle is a powerful way to learn about your health and wellbeing.',
        ],
      },
      {
        type: 'next',
        moduleId: 3,
        title: 'Healthy Habits',
        description:
          'Simple daily routines to support your menstrual health and boost your overall well-being.',
      },
    ],
  },
  3: {
    sections: [
      {
        type: 'heading',
        content: 'Small Habits, Big Impact',
      },
      {
        type: 'body',
        content:
          'When people hear the words "healthy lifestyle," they often imagine strict diets or intense workouts. In reality, healthy habits are usually simple things you do consistently.',
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          'These habits help support: Physical growth and development, strong bones and muscles, better concentration and learning, emotional wellbeing, healthy sleep patterns, and overall energy levels.',
      },
      {
        type: 'body',
        content:
          'The good news? You don\'t need to change everything at once. Even small daily choices can make a difference over time.',
      },
      {
        type: 'heading',
        content: 'The Building Blocks of Good Health',
      },
      {
        type: 'body',
        content:
          'Your body relies on a few basic things to stay healthy and function well. Food is your body\'s fuel. Try to include fruits and vegetables, whole grains, protein-rich foods such as beans, eggs, dairy, fish, or nuts, and plenty of water throughout the day. Remember: No single food makes you "healthy" or "unhealthy." Balance matters more than perfection.',
      },
      {
        type: 'body',
        content:
          'Teenagers generally need about 8–10 hours of sleep each night. Good sleep can help with memory and learning, mood, energy levels, and physical growth.',
      },
      {
        type: 'body',
        content:
          'Physical activity doesn\'t have to mean going to a gym. You can walk, dance, play sports, ride a bicycle, practice yoga, or play active games with friends. Moving your body regularly supports both physical and mental health.',
      },
      {
        type: 'heading',
        content: 'Taking Care of Your Mental Wellbeing',
      },
      {
        type: 'body',
        content:
          'Health isn\'t only about your body. Your thoughts and feelings matter too. Everyone experiences stress, worries, or difficult emotions from time to time. That\'s a normal part of life.',
      },
      {
        type: 'checklist',
        items: [
          'Talking to someone you trust about how you feel',
          'Enjoying hobbies and creative activities',
          'Taking breaks when you feel overwhelmed',
          'Spending time outdoors in nature',
          'Staying connected with supportive friends and family',
        ],
      },
      {
        type: 'body',
        content:
          'Asking for help when you need it is a sign of strength, not weakness.',
      },
      {
        type: 'quiz',
        question: 'What are healthy habits mostly about?',
        options: [
          'Following a strict diet every day',
          'Simple things you do consistently',
          'Intense daily workouts at the gym',
          'Taking vitamin supplements regularly',
        ],
        correct: 1,
        explanation:
          'Healthy habits are simple things you do consistently. You don\'t need to change everything at once, even small daily choices can make a difference over time.',
      },
      {
        type: 'quiz',
        question: 'How much sleep do teenagers generally need each night?',
        options: ['5–6 hours', '8–10 hours', '12–14 hours', 'As little as possible'],
        correct: 1,
        explanation:
          'Teenagers generally need about 8–10 hours of sleep each night. Good sleep supports memory, mood, energy levels, and physical growth.',
      },
      {
        type: 'quiz',
        question: 'Which of the following is a good way to care for your mental wellbeing?',
        options: [
          'Keeping all your feelings to yourself',
          'Talking to someone you trust',
          'Avoiding every kind of stress',
          'Staying busy all the time without breaks',
        ],
        correct: 1,
        explanation:
          'Talking to someone you trust, enjoying hobbies, taking breaks, and spending time outdoors are all healthy ways to care for your mental wellbeing.',
      },
      {
        type: 'quiz',
        question: 'What matters more than perfection when it comes to healthy eating?',
        options: [
          'Eating only organic foods',
          'Balance',
          'Counting every single calorie',
          'Following a strict meal plan',
        ],
        correct: 1,
        explanation:
          'No single food makes you "healthy" or "unhealthy." Balance matters more than perfection when it comes to nourishing your body.',
      },
      {
        type: 'quiz',
        question: 'What can help you feel more comfortable during your period?',
        options: [
          'Skipping meals to rest more',
          'Light exercise, staying hydrated, and getting extra rest',
          'Avoiding all physical activity',
          'Drinking less water',
        ],
        correct: 1,
        explanation:
          'Light exercise, staying hydrated, eating balanced meals, getting extra rest, and practicing good hygiene can all help you feel more comfortable during your period.',
      },
      {
        type: 'heading',
        content: 'Healthy Habits During Your Period',
      },
      {
        type: 'body',
        content:
          'Your body may need a little extra care during your period. Helpful habits include drinking enough water, eating regular balanced meals, getting extra rest when needed, gentle movement such as walking or stretching, changing pads or menstrual products regularly, and practicing good hygiene.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Many people find that light exercise, hydration, and rest can help them feel more comfortable during their period. Listen to your body, it\'s okay to slow down when you need to.',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Healthy habits are small daily actions that support your physical and mental wellbeing.',
          'Eating balanced meals, staying hydrated, sleeping well, and being active help your body grow and stay strong.',
          'Mental health is an important part of overall health.',
          'Healthy habits don\'t need to be perfect, consistency matters more.',
          'Taking care of yourself during your period can help you feel more comfortable.',
          'Building healthy habits now can support your wellbeing for years to come.',
        ],
      },
      {
        type: 'highlight',
        icon: 'tip',
        content:
          'Healthy Habit Challenge: This week, try choosing one habit to focus on, drink an extra glass of water each day, go to bed 30 minutes earlier, take a short walk or stretch break, eat a fruit or vegetable with a meal, or spend 10 minutes doing something you enjoy. Small steps lead to lasting habits!',
      },
      {
        type: 'next',
        moduleId: 4,
        title: 'Period Care',
        description:
          'Explore different period products and find the comfort that works best for your body.',
      },
    ],
  },
  4: {
    sections: [
      {
        type: 'heading',
        content: 'Why Period Care Matters',
      },
      {
        type: 'body',
        content:
          'Period care is all about managing your period comfortably and hygienically. With the right habits, you can feel confident and prepared every month.',
      },
      {
        type: 'body',
        content:
          "When you're on your period, your body is shedding the lining of the uterus. During this time, it's important to maintain good hygiene and use menstrual products correctly.",
      },
      {
        type: 'pullquote',
        content: 'Period blood is not dirty. Menstruation is a healthy and natural body process.',
      },
      {
        type: 'checklist',
        items: [
          'Stay comfortable throughout the day',
          'Prevent leaks and accidents',
          'Reduce odors',
          'Lower the risk of irritation and infections',
          'Feel more confident at school, sports, and social activities',
        ],
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Remember: Period blood is not dirty. Menstruation is a healthy and natural body process.',
      },
      {
        type: 'heading',
        content: 'Choosing the Right Period Products',
      },
      {
        type: 'body',
        content:
          'There are different products available to manage menstrual flow. The best choice is the one that feels comfortable and works for your lifestyle.',
      },
      {
        type: 'body',
        content:
          '🩸 Pads\n\nPads stick to your underwear and absorb menstrual blood. They are easy to use, a popular choice for beginners, and available in different sizes and absorbencies.',
      },
      {
        type: 'body',
        content:
          '🩸 Pantyliners\n\nPantyliners are thinner than pads and are useful for very light flow days or spotting before or after periods.',
      },
      {
        type: 'body',
        content:
          "🩸 Tampons\n\nTampons are inserted into the vagina to absorb blood internally. They can be convenient for sports and swimming, but they should be changed regularly according to product instructions.",
      },
      {
        type: 'body',
        content:
          '🩸 Menstrual Cups\n\nMenstrual cups are reusable cups that collect menstrual blood. They are environmentally friendly and can be used for several years with proper care.',
      },
      {
        type: 'body',
        content:
          "It's okay to try different products over time to find what works best for you.",
      },
      {
        type: 'quiz',
        question: 'Why is good period care important?',
        options: [
          'It is not really important, just a personal choice',
          'It helps you stay comfortable, prevent leaks, reduce odors, and feel confident',
          'It is only needed for hygiene during heavy flow days',
          'It only matters if you have cramps',
        ],
        correct: 1,
        explanation:
          'Good period care helps you stay comfortable, prevent leaks and accidents, reduce odors, lower the risk of irritation and infections, and feel more confident at school, sports, and social activities.',
      },
      {
        type: 'quiz',
        question: 'Which period product is reusable and environmentally friendly?',
        options: ['Pads', 'Pantyliners', 'Tampons', 'Menstrual cups'],
        correct: 3,
        explanation:
          'Menstrual cups are reusable cups that collect menstrual blood. They are environmentally friendly and can be used for several years with proper care.',
      },
      {
        type: 'quiz',
        question: 'Which product is inserted into the vagina to absorb blood internally?',
        options: ['Pads', 'Pantyliners', 'Tampons', 'Menstrual cups'],
        correct: 2,
        explanation:
          'Tampons are inserted into the vagina to absorb blood internally. They can be convenient for sports and swimming but should be changed regularly.',
      },
      {
        type: 'heading',
        content: 'Period Hygiene Tips',
      },
      {
        type: 'body',
        content:
          'Good hygiene helps you stay healthy and comfortable during your period.',
      },
      {
        type: 'body',
        content:
          '✅ Change products regularly\n\nPads should generally be changed every 4–6 hours, or sooner if needed. Follow product instructions for tampons and menstrual cups.',
      },
      {
        type: 'body',
        content:
          '✅ Wash your hands\n\nWash your hands before and after changing any menstrual product.',
      },
      {
        type: 'body',
        content:
          '✅ Wear clean underwear\n\nChoose comfortable, breathable underwear and change it daily.',
      },
      {
        type: 'body',
        content:
          '✅ Clean your vulva gently\n\nThe vulva (the outside area of the genitals) only needs warm water and mild, unscented soap if desired.',
      },
      {
        type: 'highlight',
        icon: 'tip',
        content:
          "❌ Avoid douching\n\nDouching is not necessary and can disrupt the vagina's natural balance. Your vagina is self-cleaning and does not need special cleansing products.",
      },
      {
        type: 'quiz',
        question: 'How often should pads generally be changed?',
        options: [
          'Every 4–6 hours, or sooner if needed',
          'Once a day',
          'Every 10–12 hours',
          'Only when they feel completely full',
        ],
        correct: 0,
        explanation:
          'Pads should generally be changed every 4–6 hours, or sooner if needed. Regular changing helps prevent leaks, odors, and irritation.',
      },
      {
        type: 'quiz',
        question: 'Which of the following is NOT recommended for menstrual hygiene?',
        options: [
          'Washing hands before and after changing products',
          'Wearing clean, breathable underwear daily',
          'Douching to feel cleaner',
          'Changing pads every 4–6 hours',
        ],
        correct: 2,
        explanation:
          "Douching is not recommended, it is not necessary and can disrupt the vagina's natural balance. Your vagina is self-cleaning and does not need special cleansing products.",
      },
      {
        type: 'heading',
        content: 'Caring for Yourself During Your Period',
      },
      {
        type: 'body',
        content:
          'Period care is about more than menstrual products. You may feel more comfortable if you:',
      },
      {
        type: 'checklist',
        items: [
          '💧 Drink enough water throughout the day',
          '🥗 Eat regular, balanced meals',
          '😴 Get enough sleep and rest',
          '🏃 Stay gently active with walking, stretching, or light exercise',
          '🔥 Use a heating pad or warm water bottle for cramps if needed',
          '🧠 Be kind to yourself when you feel tired or emotional',
        ],
      },
      {
        type: 'body',
        content:
          'Many people find that light movement, hydration, and rest can help reduce common period discomforts.',
      },
      {
        type: 'heading',
        content: 'When Should You Ask for Help?',
      },
      {
        type: 'body',
        content:
          'Talk to a trusted adult, parent, school nurse, or healthcare professional if:',
      },
      {
        type: 'checklist',
        items: [
          'Your cramps are severe and regularly stop you from doing normal activities',
          'Your periods last longer than 7 days most months',
          'You soak through pads very quickly for several hours in a row',
          'You have questions or concerns about your menstrual health',
        ],
      },
      {
        type: 'body',
        content:
          'Seeking information and support is an important part of taking care of yourself.',
      },
      {
        type: 'quiz',
        question: 'What should you do if your period cramps are severe and stop you from normal activities?',
        options: [
          'Ignore them and push through',
          'Talk to a trusted adult or healthcare professional',
          'Only rest at home without telling anyone',
          'Take any pain medicine without asking an adult',
        ],
        correct: 1,
        explanation:
          'If your cramps are severe and regularly stop you from normal activities, or if you have any concerns about your menstrual health, talk to a trusted adult or healthcare professional.',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Good period care helps you stay comfortable, healthy, and confident.',
          'Period blood is a normal and healthy part of the menstrual cycle.',
          'Different menstrual products work for different people, choose what feels right for you.',
          'Change menstrual products regularly and wash your hands before and after changing them.',
          'Drinking water, resting, and staying active can help you feel better during your period.',
          "If something doesn't feel right or you're worried about your symptoms, talk to a trusted adult or healthcare professional.",
        ],
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          "Period Care Challenge 🌸\n\nThis week, try one of these healthy period-care habits:\n□ Pack a small period kit for school\n□ Track your next period start date\n□ Drink more water during your period\n□ Learn about a menstrual product you've never used before\n□ Share a helpful period fact with a friend\n\nBeing prepared is one of the best ways to feel confident and comfortable during your period.",
      },
      {
        type: 'next',
        moduleId: 5,
        title: 'Nourish Yourself',
        description:
          'Discover how balanced meals and healthy habits give your body the nutrients it needs to grow, stay active, and feel its best.',
      },
    ],
  },
  5: {
    sections: [
      {
        type: 'heading',
        content: 'Food Fuels Your Body',
      },
      {
        type: 'body',
        content:
          'Every day, your body works hard to support growth, learning, movement, and overall health.',
      },
      {
        type: 'body',
        content:
          'The foods you eat help provide:',
      },
      {
        type: 'checklist',
        items: [
          'Energy for school, sports, and daily activities',
          'Nutrients for growing bones and muscles',
          'Support for your immune system',
          'Healthy brain function and concentration',
        ],
      },
      {
        type: 'body',
        content:
          "Rather than focusing on \"good\" or \"bad\" foods, aim for balance and variety.",
      },
      {
        type: 'heading',
        content: 'What Makes a Balanced Plate?',
      },
      {
        type: 'body',
        content:
          'A balanced meal usually includes different food groups working together.',
      },
      {
        type: 'body',
        content:
          '🥦 Fruits and Vegetables\n\nProvide vitamins, minerals, and fiber that help keep your body healthy.',
      },
      {
        type: 'body',
        content:
          '🍞 Whole Grains\n\nFoods like whole wheat bread, oats, brown rice, and millet provide long-lasting energy.',
      },
      {
        type: 'body',
        content:
          '🥚 Protein Foods\n\nProtein helps build and repair muscles and tissues.',
      },
      {
        type: 'checklist',
        items: [
          'Eggs',
          'Beans and lentils',
          'Dairy products',
          'Fish or chicken',
          'Nuts and seeds',
        ],
      },
      {
        type: 'body',
        content:
          '💧 Water\n\nStaying hydrated helps your body function properly and can improve focus and energy.',
      },
      {
        type: 'heading',
        content: 'Listening to Your Body',
      },
      {
        type: 'body',
        content:
          "Your body's needs can change from day to day.",
      },
      {
        type: 'body',
        content:
          'Some days you may feel hungrier, especially during growth spurts, sports seasons, or different parts of your menstrual cycle.',
      },
      {
        type: 'checklist',
        items: [
          '✅ Eating regular meals',
          '✅ Having nutritious snacks when needed',
          '✅ Drinking water throughout the day',
          '✅ Paying attention to hunger and fullness cues',
        ],
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Remember: Skipping meals often leaves you feeling tired, distracted, and low on energy.',
      },
      {
        type: 'quiz',
        question: 'What do the foods you eat help provide?',
        options: [
          'Only energy for physical activities',
          'Energy, nutrients for bones and muscles, immune support, and brain function',
          'Only vitamins and minerals',
          'Just taste and satisfaction',
        ],
        correct: 1,
        explanation:
          'The foods you eat help provide energy for daily activities, nutrients for growing bones and muscles, support for your immune system, and healthy brain function and concentration.',
      },
      {
        type: 'quiz',
        question: 'Which food group provides long-lasting energy?',
        options: [
          'Fruits and vegetables',
          'Whole grains',
          'Protein foods',
          'Water',
        ],
        correct: 1,
        explanation:
          'Whole grains like whole wheat bread, oats, brown rice, and millet provide long-lasting energy to keep you going throughout the day.',
      },
      {
        type: 'quiz',
        question: 'What helps your body absorb iron from food?',
        options: [
          'Calcium',
          'Vitamin C',
          'Protein',
          'Fiber',
        ],
        correct: 1,
        explanation:
          'Vitamin C helps your body absorb iron. Including foods rich in vitamin C alongside iron-rich foods can help you get the most benefit.',
      },
      {
        type: 'heading',
        content: 'Nourishment During Your Period',
      },
      {
        type: 'body',
        content:
          'Your body may need a little extra care during your period.',
      },
      {
        type: 'checklist',
        items: [
          '💧 Drinking plenty of water',
          '🥗 Eating regular, balanced meals',
          '🥜 Choosing iron-rich foods such as beans, lentils, spinach, eggs, or fortified cereals',
          '🍊 Including foods rich in vitamin C, which helps your body absorb iron',
          '😴 Getting enough rest',
        ],
      },
      {
        type: 'body',
        content:
          'Some people notice changes in appetite or cravings before or during their period. This is common and usually related to hormonal changes.',
      },
      {
        type: 'quiz',
        question: 'Which foods are especially important to include during your period?',
        options: [
          'Sugary snacks and sweets',
          'Iron-rich foods like beans, lentils, and spinach',
          'Only fruits and vegetables',
          'Processed foods for quick energy',
        ],
        correct: 1,
        explanation:
          'Iron-rich foods such as beans, lentils, spinach, eggs, and fortified cereals are especially important during menstruation to help replace the iron your body loses.',
      },
      {
        type: 'quiz',
        question: 'What is a healthy habit when listening to your body?',
        options: [
          'Skipping meals to save time',
          'Eating regular meals and paying attention to hunger cues',
          'Eating only when you feel extremely hungry',
          'Avoiding snacks completely',
        ],
        correct: 1,
        explanation:
          'Healthy habits include eating regular meals, having nutritious snacks when needed, drinking water throughout the day, and paying attention to hunger and fullness cues.',
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Food gives your body energy, nutrients, and support for growth.',
          'Balanced meals include fruits, vegetables, grains, protein foods, and water.',
          'Eating regularly can help you stay focused and energized.',
          'Your nutritional needs may change during growth spurts and different parts of your cycle.',
          'Iron-rich foods are especially important during menstruation.',
          "Nourishing yourself isn't about being perfect, it's about caring for your body consistently.",
        ],
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          "Nourish Yourself Challenge 🌱\n\nThis week, try one of these:\n□ Add a fruit or vegetable to one meal each day\n□ Carry a water bottle and stay hydrated\n□ Try a new healthy snack\n□ Eat breakfast before school\n□ Include an iron-rich food in a meal\n\nSmall choices can help build healthy habits that support your body now and in the future.",
      },
      {
        type: 'next',
        moduleId: 6,
        title: 'Mind & Mood',
        description:
          'Learn to understand and care for your mental wellbeing so you can feel more confident, resilient, and balanced.',
      },
    ],
  },
  6: {
    sections: [
      {
        type: 'heading',
        content: "It's Okay to Feel Different Sometimes",
      },
      {
        type: 'body',
        content:
          'Everyone experiences a range of emotions, from happiness and excitement to stress, frustration, or sadness.',
      },
      {
        type: 'body',
        content:
          'Your mood can be influenced by many things, including:',
      },
      {
        type: 'checklist',
        items: [
          'School and exams',
          'Friendships and family relationships',
          'Sleep and physical health',
          'Hormonal changes during your menstrual cycle',
          'Life events and daily experiences',
        ],
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          "Having different emotions doesn't mean something is wrong. Emotions are a natural part of being human.",
      },
      {
        type: 'pullquote',
        content: 'All feelings are valid, but not all feelings need immediate action.',
      },
      {
        type: 'heading',
        content: 'Understanding Your Feelings',
      },
      {
        type: 'body',
        content:
          'Sometimes emotions can feel confusing or overwhelming, especially during the teenage years.',
      },
      {
        type: 'body',
        content:
          "A helpful first step is simply noticing how you're feeling.",
      },
      {
        type: 'body',
        content:
          'Ask yourself:',
      },
      {
        type: 'checklist',
        items: [
          '💭 What am I feeling right now?',
          '💭 What might be causing this feeling?',
          '💭 What do I need at this moment?',
        ],
      },
      {
        type: 'body',
        content:
          'Naming your emotions can help you understand them better and respond in healthy ways.',
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          'Remember: All feelings are valid, but not all feelings need immediate action.',
      },
      {
        type: 'heading',
        content: "Healthy Ways to Care for Your Mind",
      },
      {
        type: 'body',
        content:
          'Just like your body needs care, your mind does too.',
      },
      {
        type: 'body',
        content:
          'Some healthy ways to support your wellbeing include:',
      },
      {
        type: 'checklist',
        items: [
          '🌿 Spending time outdoors',
          '🏃 Moving your body regularly',
          '🎨 Enjoying hobbies and creative activities',
          '😴 Getting enough sleep',
          '📖 Taking breaks when you feel stressed',
          '💬 Talking to someone you trust',
          '🤝 Spending time with supportive friends and family',
        ],
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          'Small habits can have a big impact on how you feel.',
      },
      {
        type: 'quiz',
        question: 'What can influence your mood?',
        options: [
          'Only school grades',
          'Many things including school, relationships, sleep, and hormones',
          'Only what you eat',
          'Only the weather',
        ],
        correct: 1,
        explanation:
          'Your mood can be influenced by many things including school, exams, friendships, family relationships, sleep, physical health, and hormonal changes during your menstrual cycle.',
      },
      {
        type: 'quiz',
        question: 'What is a helpful first step when emotions feel overwhelming?',
        options: [
          'Ignore your feelings completely',
          'Notice and name what you are feeling',
          'Wait for it to go away on its own',
          'Distract yourself with your phone',
        ],
        correct: 1,
        explanation:
          'A helpful first step is noticing how you are feeling and naming your emotions. This can help you understand them better and respond in healthy ways.',
      },
      {
        type: 'quiz',
        question: 'Which of the following is a healthy way to support your mental wellbeing?',
        options: [
          'Keeping everything to yourself',
          'Spending time outdoors and moving your body regularly',
          'Staying up late every night',
          'Avoiding all social activities',
        ],
        correct: 1,
        explanation:
          'Spending time outdoors, moving your body regularly, enjoying hobbies, getting enough sleep, taking breaks, and talking to someone you trust are all healthy ways to support your wellbeing.',
      },
      {
        type: 'heading',
        content: 'When to Reach Out for Help',
      },
      {
        type: 'body',
        content:
          'Everyone needs support sometimes.',
      },
      {
        type: 'body',
        content:
          'Consider talking to a trusted adult, parent, teacher, school counselor, or healthcare professional if:',
      },
      {
        type: 'checklist',
        items: [
          'You feel sad, worried, or overwhelmed most days',
          'Your emotions make it hard to enjoy daily activities',
          "You're struggling to cope with stress",
          'You feel alone and need support',
        ],
      },
      {
        type: 'highlight',
        icon: 'heart',
        content:
          "Asking for help is a sign of self-care and strength.\n\nYou don't have to handle everything by yourself.",
      },
      {
        type: 'quiz',
        question: 'What should you do if you feel sad, worried, or overwhelmed most days?',
        options: [
          'Handle it completely alone',
          'Talk to a trusted adult or healthcare professional',
          'Pretend everything is fine',
          'Stop doing all your daily activities',
        ],
        correct: 1,
        explanation:
          "If you feel sad, worried, or overwhelmed most days, or if your emotions make it hard to enjoy daily activities, consider talking to a trusted adult, parent, teacher, school counselor, or healthcare professional. Asking for help is a sign of strength.",
      },
      {
        type: 'heading',
        content: 'Key Takeaways',
      },
      {
        type: 'takeaways',
        items: [
          'Mental wellbeing is an important part of overall health.',
          "It's normal to experience different emotions throughout life.",
          'Hormones, sleep, stress, and daily experiences can all affect your mood.',
          'Healthy habits like sleep, movement, hobbies, and social support can help you feel your best.',
          'Talking about your feelings can be helpful and healthy.',
          'Reaching out for support when needed is a positive and important step.',
        ],
      },
      {
        type: 'highlight',
        icon: 'sparkles',
        content:
          "Mind & Mood Challenge 🌈\n\nThis week, try one of these:\n□ Write down one thing you're grateful for each day\n□ Spend 10 minutes doing an activity you enjoy\n□ Take a short walk outdoors\n□ Talk to a trusted friend or family member\n□ Practice taking a break when you're feeling stressed\n\nTaking care of your mind is just as important as taking care of your body.",
      },
      {
        type: 'next',
        moduleId: 7,
        title: 'Myth Busters',
        description:
          'Separate fact from fiction with science-backed answers to common period myths.',
      },
    ],
  },
};
