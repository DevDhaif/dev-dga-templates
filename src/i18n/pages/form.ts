import type { Locale } from '../locale';

const en = {
  title: 'Text Fields',
  lead: 'When using forms, the standard form fields used are text fields which are typically used for short text input. Statuses of the form field are default, active, focused, error, hint, and disabled',
  required: '*Required information',
  mandatory: 'Mandatory Text Input',
  optional: 'Optional Text Input',
  placeholder: 'Entered text',
  prefix: 'Prefix',
  suffix: 'Suffix',
  help: 'Help Text',
  back: 'Back',
  next: 'Next',
  progress: 'Form progress',
  steps: ['Step One', 'Step Two', 'Step Three'],
  stepDescription: 'this is step description',
  radial: '1 of 4',
  radialNext: 'Next: Next Step Name',
};

const ar: typeof en = {
  title: 'حقول النص',
  lead: 'عند استخدام النماذج، فإن حقول النموذج القياسية المستخدمة هي حقول نصية تُستخدم عادةً لإدخال نص قصير. حالات حقل النموذج هي الافتراضي، النشط، المركز، الخطأ، التلميح، والمعطل.',
  required: '* المعلومات المطلوبة',
  mandatory: 'إدخال النص الإلزامي',
  optional: 'إدخال النص الاختياري',
  placeholder: 'نص تلميحي',
  prefix: 'نص',
  suffix: 'نص',
  help: 'نص مساعد',
  back: 'رجوع',
  next: 'التالي',
  progress: 'تقدم النموذج',
  steps: ['الخطوة الأولى', 'الخطوة الثانية', 'الخطوة الثالثة'],
  stepDescription: 'وصف الخطوة',
  radial: '1 من 4',
  radialNext: 'التالي: اسم الخطوة التالية',
};

export const formCopy: Record<Locale, typeof en> = { en, ar };
