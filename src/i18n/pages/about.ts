import type { Locale } from '../locale';

const en = {
  home: 'Home',
  title: 'About The Entity',
  lead: 'The "About the Entity" page should serve as a landing page, allowing users to click on the "About the Entity" button on the homepage instead of selecting one of the topics displayed in the dropdown menu.',
  cards: [
    'About us',
    'Organizational Structure',
    'Strategy, Policies, and Regulations',
    'Budget and Expenditures',
    'Tenders and Procurements',
    'E-Participation',
    'Our Partners / Partnerships',
    'Sustainable Development',
    'Careers',
    'News and Events',
    'Contact Us',
  ],
};

const ar: typeof en = {
  home: 'الرئيسية',
  title: 'عن الجهة',
  lead: 'صفحة "عن الجهة" يجب أن تكون صفحة وصول، حيث يمكن للمستخدم النقر على زر "عن الجهة" في الصفحة الرئيسية بدلا من اختيار أحد الموضوعات التي تظهر في القائمة المنسدلة.',
  cards: [
    'من نحن',
    'الهيكل التنظيمي',
    'الاستراتيجية والسياسات والأنظمة',
    'الميزانية والمصروفات',
    'المنافسات والمشتريات',
    'المشاركة الإلكترونية',
    'شركاؤنا / الشراكات',
    'التنمية المستدامة',
    'التوظيف',
    'الأخبار والفعاليات',
    'تواصل معنا',
  ],
};

export const aboutCopy: Record<Locale, typeof en> = { en, ar };
