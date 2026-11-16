import type { Locale } from '../locale';

const answerEn =
  'The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion.';
const answerAr =
  'المرجع الوطني الاول للمعلومات والخدمات الحكومية الرقمية كافة في المملكة العربية السعودية والمصدر المتخصص في التسهيل على المواطنين والمقيمين ورجال الأعمال والزوّار للبحث والوصول بكل سهولة ويسر.';

const en = {
  title: 'FAQs',
  description: 'Find answers to common questions about our products, services, and policies.',
  questions: [
    'What is this FAQ section for?',
    'How do I get started?',
    'Where can I find more information?',
    'Can I customize this platform?',
    'How do I contact support?',
  ],
  answer: answerEn,
  searchLabel: 'Search',
  searchPlaceholder: 'Search',
  clearSearch: 'Clear search',
  voiceSearch: 'Search by voice',
  filter: 'Filter',
  filters: 'Filters',
  variant: 'Variant',
  selections: '({n} selections)',
  option: 'Option {n}',
  showMore: 'Show {n} more',
  showLess: 'Show less',
  apply: 'Apply Filters',
  clearFilter: 'Clear Filter',
  applied: 'Applied filters',
  categoriesLabel: 'Question categories',
  all: 'All',
  category: 'Category',
  more: 'More categories',
  results: '{n} Result(s) found',
  rateAnswer: 'Was this answer useful?',
  emptyTitle: 'No results found',
  emptyDescription: 'Try a different search term or clear your filters.',
  contactTitle: 'Comments & suggestions',
  contactDescription:
    'For any inquiry or feedback on Government Services, please fill the required information.',
  contactAction: 'Contact us',
};

const ar: typeof en = {
  title: 'الأسئلة الشائعة',
  description: 'اعثر على إجابات للأسئلة الشائعة حول منتجاتنا، خدماتنا، وسياساتنا.',
  questions: [
    'ما الهدف من قسم الأسئلة الشائعة؟',
    'كيف أبدأ باستخدام هذا النظام؟',
    'أين أجد المزيد من المعلومات؟',
    'هل يمكنني تخصيص إعدادات النظام؟',
    'كيف يمكنني التواصل مع فريق الدعم الفني؟',
  ],
  answer: answerAr,
  searchLabel: 'البحث',
  searchPlaceholder: 'بحث',
  clearSearch: 'مسح البحث',
  voiceSearch: 'البحث الصوتي',
  filter: 'تصفية',
  filters: 'عوامل التصفية',
  variant: 'النوع',
  selections: '({n} من الاختيارات)',
  option: 'خيار {n}',
  showMore: 'عرض المزيد {n}',
  showLess: 'عرض أقل',
  apply: 'تطبيق الاختيارات',
  clearFilter: 'إزالة التصفية',
  applied: 'عوامل التصفية المطبقة',
  categoriesLabel: 'تصنيفات الأسئلة',
  all: 'الكل',
  category: 'تصنيف',
  more: 'المزيد من التصنيفات',
  results: 'تم العثور على {n} نتيجة',
  rateAnswer: 'هل كانت هذه الإجابة مناسبة؟',
  emptyTitle: 'لا توجد نتائج',
  emptyDescription: 'جرّب كلمة بحث أخرى أو امسح عوامل التصفية.',
  contactTitle: 'التعليقات والاقتراحات',
  contactDescription: 'لأي استفسار أو ملاحظات حول الخدمات الحكومية، يرجى ملء المعلومات المطلوبة.',
  contactAction: 'تواصل معنا',
};

export const faqCopy: Record<Locale, typeof en> = { en, ar };
