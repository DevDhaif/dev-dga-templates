import type { Locale } from '../locale';

const en = {
  label: 'Page feedback',
  question: 'Was this page useful?',
  yes: 'Yes',
  no: 'No',
  stat: '60% of users said Yes from 2843 Feedbacks',
  close: 'Close',
  prompt: 'Please tell us why (you can select multiple options)',
  yesReasons: [
    'Content is relevant',
    'It was well written',
    'The layout made it easy to read',
    'Something else',
  ],
  noReasons: [
    'Content is not relevant',
    'content is not accurate',
    'Content is too long',
    'Something else',
  ],
  feedback: 'Feedback',
  gender: 'I’m',
  genders: ['Male', 'Female', 'I prefer not to say'],
  agreementBefore: 'For more information you may review',
  statement: 'e-participation statement',
  and: 'and',
  rules: 'rules of engagement.',
  submit: 'Submit',
  submitted: 'Your feedback is submitted!',
};

const ar: typeof en = {
  label: 'تقييم الصفحة',
  question: 'هل كانت هذه الصفحة مفيدة؟',
  yes: 'نعم',
  no: 'لا',
  stat: '60% من المستخدمين قالوا نعم من 2843 تعليقًا',
  close: 'إغلاق',
  prompt: 'من فضلك أخبرنا بالسبب (يمكنك تحديد خيارات متعددة)',
  yesReasons: [
    'المحتوى ذو صلة',
    'لقد كانت مكتوبة بشكل جيد',
    'جعل التخطيط من السهل القراءة',
    'شيء آخر',
  ],
  noReasons: ['المحتوى غير ذي صلة', 'المحتوى غير دقيق', 'المحتوى طويل جدًا', 'شيء آخر'],
  feedback: 'تعليق',
  gender: 'انا',
  genders: ['ذكر', 'أنثى', 'أفضّل ألا أقول'],
  agreementBefore: 'لمزيد من المعلومات يمكنك مراجعة',
  statement: 'بيان المشاركة الإلكترونية',
  and: 'و',
  rules: 'قواعد الاشتراك',
  submit: 'إرسال',
  submitted: 'تم إرسال ردك بنجاح',
};

export const feedbackCopy: Record<Locale, typeof en> = { en, ar };
