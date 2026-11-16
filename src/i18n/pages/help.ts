import type { Locale } from '../locale';

const descEn =
  'Here you can include a description in four lines. Here you can include a description in four lines. Here you can include a description.';
const descAr =
  'هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف في أربعة أسطر. هنا يمكنك تضمين وصف.';

const en = {
  title: 'Help & Support',
  intro:
    'We work continuously to make your experience through government services easier, see what support channel suits better your necessities.',
  contact: 'Contact us',
  faqs: 'FAQs',
  description: descEn,
  availabilityLabel: 'Service availability:',
  availability: 'all week.',
  responseLabel: 'Response time:',
  response: 'within 5 days.',
};

const ar: typeof en = {
  title: 'المساعدة والدعم',
  intro:
    'نحن نعمل بشكل مستمر لجعل تجربتك مع الخدمات الحكومية أسهل، تعرف على قناة الدعم التي تناسب احتياجاتك بشكل أفضل.',
  contact: 'اتصل بنا',
  faqs: 'الأسئلة الشائعة',
  description: descAr,
  availabilityLabel: 'توفر الخدمة:',
  availability: 'طوال الأسبوع.',
  responseLabel: 'زمن الاستجابة:',
  response: 'خلال 5 أيام.',
};

export const helpCopy: Record<Locale, typeof en> = { en, ar };
