import type { Locale } from '../locale';

const en = {
  label: 'Service rating',
  average: 'This service is rated with an average of',
  reviews: '1544 reviews',
  cta: 'Rate this service',
  close: 'Close',
  heading: 'Tell us what you think of this service',
  notice:
    'Please don’t include personal or financial information. Your review will be submitted and recorded to improve services.',
  question: 'How would you rate this service?',
  hint: 'Rate your experience from (1) poor to (5) excellent',
  required: 'Select a rating.',
  feedback: 'Feedback',
  agreementBefore: 'For more information you may review',
  statement: 'e-participation statement',
  and: 'and',
  rules: 'rules of engagement.',
  submit: 'Submit',
  youRated: 'You rated this service as',
  submitted: 'Your feedback is submitted!',
  valueText: '{value} out of {max} stars',
};

const ar: typeof en = {
  label: 'تقييم الخدمة',
  average: 'تم تقييم هذه الخدمة بمتوسط',
  reviews: '1544 تقييم',
  cta: 'قيم هذه الخدمة',
  close: 'اغلاق',
  heading: 'أخبرنا عن رأيك في هذه الخدمة',
  notice: 'يرجى عدم تضمين معلومات شخصية أو مالية. سيتم إرسال تعليقك وتسجيله لغرض تحسين الخدمات.',
  question: 'كيف تقيم هذه الخدمة؟',
  hint: 'قيم تجربتك من (1) ضعيف إلى (5) ممتاز',
  required: 'اختر تقييماً.',
  feedback: 'اخبرنا عن تجربتك في هذه الخدمة',
  agreementBefore: 'لمزيد من المعلومات يمكنك مراجعة',
  statement: 'بيان المشاركة الإلكترونية',
  and: 'و',
  rules: 'قواعد الاشتراك',
  submit: 'إرسال',
  youRated: 'لقد قيّمت هذه الخدمة بـ',
  submitted: 'تم إرسال ردك بنجاح!',
  valueText: '{value} من {max}',
};

export const ratingCopy: Record<Locale, typeof en> = { en, ar };
