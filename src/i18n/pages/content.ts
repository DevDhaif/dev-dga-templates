import type { Locale } from '../locale';

const en = {
  standardTitle: 'Standard Content Page Example',
  standardLead:
    'Here you can add a brief description of the content page. Usually this content page structure is used for standard content pages',
  standardIntro:
    'Several components are used in standard content pages include: heading 3, heading 4, ordered and unordered lists, body text content, hyperlinks, and rich multimedia including images and videos',
  heavyTitle: 'Heavy Content Page Example',
  heavyLead:
    'Here you can add a brief description of the content page. Usually this content page structure is used for heavy content pages.',
  heavyIntro:
    'Heavy content pages require a side in-page menu to allow users to easily navigate through the sections. The typlical components used in content pages alone with the in-page navigation menu are heading 3, heading 4, ordered and unordered lists, body text content, and rich multimedia including images and videos',
  section: 'Section {n}',
  subSection: 'Sub Section {n}',
  paragraph:
    'This is an example of the paragraph style followed by the design system. The same style is consistent across all body text sections.',
  formsParagraph:
    'When using forms, the standard form fields used are text fields which are typically used for short text input. Statuses of the form field are default, active, focused, error, hint, and disabled',
  orderedItem: 'Ordered list item',
  unorderedItem: 'Unordered list item',
  listItem: 'List item',
  iconItem: 'With icon',
  iconItemHeavy: 'With icon list item',
  linksBefore:
    'Links are used when there is a need to use a linking mechanism for directing the user to another page within the portal or to an external portal. There are two types of links that can be used',
  inlineLink: 'Links within a text body',
  linksAfter:
    'just like this example are underlined with a bold green color and Standalone links which can be used separately. Standalone links are underlined and contain an icon:',
  linksShort:
    'Links are used when there is a need to use a linking mechanism for directing the user to another page within the portal or to an external portal. There are two types of links that can be used:',
  standaloneLink: 'Link example',
  tocLabel: 'On this page',
  tocTitle: 'Page Title',
  imageAlt: 'Image placeholder',
};

const ar: typeof en = {
  standardTitle: 'مثال لصفحة المحتوى القياسية',
  standardLead:
    'هنا يمكنك إضافة وصف مختصر لصفحة المحتوى. عادةً ما يتم استخدام بنية صفحة المحتوى هذه لصفحات المحتوى القياسية',
  standardIntro:
    'يتم استخدام العديد من المكونات في صفحات المحتوى القياسية، بما في ذلك: العنوان 3، والعنوان 4، والقوائم المرتبة وغير المرتبة، ومحتوى النص الأساسي، والارتباطات التشعبية، والوسائط المتعددة الغنية بما في ذلك الصور ومقاطع الفيديو.',
  heavyTitle: 'مثال صفحة المحتوى الثقيل',
  heavyLead:
    'هنا يمكنك إضافة وصف موجز لصفحة المحتوى. عادة ما يستخدم هيكل صفحة المحتوى هذا لصفحات المحتوى الثقيلة.',
  heavyIntro:
    'تتطلب صفحات المحتوى الثقيل قائمة جانبية داخل الصفحة للسماح للمستخدمين بالتنقل بسهولة عبر الأقسام. المكونات النموذجية المستخدمة في صفحات المحتوى وحدها مع قائمة التنقل داخل الصفحة هي العنوان 3، والعنوان 4، والقوائم المرتبة وغير المرتبة ومع الأيقونة، ومحتوى النص الأساسي، والوسائط المتعددة الغنية بما في ذلك الصور ومقاطع الفيديو.',
  section: 'قسم {n}',
  subSection: 'القسم الفرعي {n}',
  paragraph:
    'وهذا مثال على نمط الفقرة الذي يتبعه نظام التصميم. نفس النمط متسق عبر جميع أقسام النص الأساسي.',
  formsParagraph:
    'وهذا مثال على نمط الفقرة الذي يتبعه نظام التصميم. نفس النمط متسق عبر جميع أقسام النص الأساسي.',
  orderedItem: 'عنصر القائمة مرتبة',
  unorderedItem: 'عنصر القائمة الغير مرتبة',
  listItem: 'عنصر قائمة',
  iconItem: 'مع أيقونة',
  iconItemHeavy: 'مع أيقونة',
  linksBefore:
    'يتم استخدام الروابط عندما تكون هناك حاجة لاستخدام آلية ربط لتوجيه المستخدم إلى صفحة أخرى داخل البوابة أو إلى بوابة خارجية. هناك نوعان من الروابط التي يمكن استخدامها',
  inlineLink: 'روابط داخل هيئة نصية',
  linksAfter:
    'تمامًا كما هو الحال في هذا المثال، حيث تم وضع خط تحتها بلون أخضر غامق والروابط المستقلة التي يمكن استخدامها بشكل منفصل. يتم وضع خط تحت الروابط المستقلة وتحتوي على رمز:',
  linksShort:
    'يتم استخدام الروابط عندما تكون هناك حاجة لاستخدام آلية ربط لتوجيه المستخدم إلى صفحة أخرى داخل البوابة أو إلى بوابة خارجية. هناك نوعان من الروابط التي يمكن استخدامها:',
  standaloneLink: 'مثال رابط',
  tocLabel: 'في هذه الصفحة',
  tocTitle: '[اسم الصفحة]',
  imageAlt: 'صورة توضيحية',
};

export const contentCopy: Record<Locale, typeof en> = { en, ar };
