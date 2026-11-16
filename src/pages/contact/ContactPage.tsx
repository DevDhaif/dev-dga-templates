import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  Button,
  Card,
  CardTitle,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  FileUpload,
  Link,
  TextInput,
  TextInputDropdown,
  Textarea,
  toast,
} from '@dev-dga/react';
import {
  CallIcon,
  CheckmarkCircle04Icon,
  Copy01Icon,
  InstagramIcon,
  Link04Icon,
  Linkedin02Icon,
  Location01Icon,
  Mail01Icon,
  Message02Icon,
  NewTwitterIcon,
} from '@/assets/dga-icons';
import { fill } from '@/i18n/format';
import { useLocale } from '@/i18n/locale-context';
import { contactCopy } from '@/i18n/pages/contact';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const MAX_UPLOAD_BYTES = 2 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\d{7,12}$/;

const CHANNEL_ICON: Record<string, ReactNode> = {
  phone: <CallIcon className="size-6" />,
  sms: <Message02Icon className="size-6" />,
  email: <Mail01Icon className="size-6" />,
  fax: <Mail01Icon className="size-6" />,
  location: <Location01Icon className="size-6" />,
};

const HREF: Record<string, (v: string) => string> = {
  phone: (v) => `tel:${v}`,
  sms: (v) => `sms:${v}`,
  email: (v) => `mailto:${v}`,
  fax: (v) => `tel:${v}`,
};

const SOCIAL = [
  { name: 'X', icon: <NewTwitterIcon className="size-5" /> },
  { name: 'LinkedIn', icon: <Linkedin02Icon className="size-5" /> },
  { name: 'Instagram', icon: <InstagramIcon className="size-5" /> },
];

const REQUIRED = ['firstName', 'lastName', 'email', 'phone'] as const;
type FieldName = (typeof REQUIRED)[number];
type Errors = Partial<Record<FieldName, string>>;
type Copy = (typeof contactCopy)['en'];

function validate(data: FormData, e: Copy['errors']): Errors {
  const value = (name: FieldName) => String(data.get(name) ?? '').trim();
  const errors: Errors = {};
  if (!value('firstName')) errors.firstName = e.firstName;
  if (!value('lastName')) errors.lastName = e.lastName;
  const email = value('email');
  if (!email) errors.email = e.email;
  else if (!EMAIL_RE.test(email)) errors.email = e.emailFormat;
  const phone = value('phone').replace(/[\s-]/g, '');
  if (!phone) errors.phone = e.phone;
  else if (!PHONE_RE.test(phone)) errors.phone = e.phoneFormat;
  return errors;
}

function CopyLink({ value, label, done }: { value: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <Link asChild>
        <button
          type="button"
          aria-label={label}
          onClick={copy}
          className="cursor-pointer border-0 bg-transparent p-0"
        >
          {copied ? (
            <CheckmarkCircle04Icon className="size-5" />
          ) : (
            <Copy01Icon className="size-5" />
          )}
        </button>
      </Link>
      <span role="status" className="ddga-sr-only">
        {copied ? done : ''}
      </span>
    </>
  );
}

function ContactValue({
  href,
  value,
  label,
  c,
}: {
  href: string;
  value: string;
  label: string;
  c: Copy;
}) {
  return (
    <span className="flex items-center gap-2">
      <Link href={href} dir="ltr">
        {value}
      </Link>
      <CopyLink value={value} label={fill(c.copy, { label })} done={fill(c.copied, { label })} />
    </span>
  );
}

export function ContactPage() {
  const { locale } = useLocale();
  const c = contactCopy[locale];
  const [country, setCountry] = useState(c.countries[0]);
  const [formKey, setFormKey] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const submitted = useRef(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    submitted.current = true;
    const next = validate(new FormData(form), c.errors);
    setErrors(next);
    const first = REQUIRED.find((name) => next[name]);
    if (first) {
      form.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      return;
    }
    toast.success(c.sentTitle, { description: c.sentBody });
    setFormKey((k) => k + 1);
    setCountry(c.countries[0]);
    submitted.current = false;
  };

  const onChange = (event: FormEvent<HTMLFormElement>) => {
    if (submitted.current) setErrors(validate(new FormData(event.currentTarget), c.errors));
  };

  const fieldError = (name: FieldName) => ({
    error: Boolean(errors[name]),
    errorMessage: errors[name],
  });

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section
          className="bg-[linear-gradient(var(--ddga-brand-25),var(--ddga-brand-25))] bg-size-[100%_209px] bg-top bg-no-repeat py-10 max-md:bg-size-[100%_237px] dark:bg-[linear-gradient(var(--ddga-alpha-brand-10),var(--ddga-alpha-brand-10))]"
          aria-labelledby="contact-title"
        >
          <div className="hp-container grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start gap-8 max-lg:grid-cols-1">
            <div className="grid gap-8">
              <div className="max-md:[&>div]:gap-4">
                <PageIntro
                  id="contact-title"
                  title={c.title}
                  description={c.intro}
                  descriptionClassName="max-w-[720px]"
                />
              </div>
              <form
                key={formKey}
                className="grid justify-items-start gap-8 [&_label]:font-semibold"
                noValidate
                onSubmit={onSubmit}
                onChange={onChange}
              >
                <div className="grid w-full grid-cols-2 gap-6 max-md:grid-cols-1 [&_label:has(+[data-slot=dropdown-trigger])]:mb-1 [&_label:has(+[data-slot=dropdown-trigger])]:leading-5">
                  <TextInput
                    name="firstName"
                    label={c.firstName}
                    placeholder={c.firstNamePh}
                    required
                    variant="filled-darker"
                    autoComplete="given-name"
                    {...fieldError('firstName')}
                  />
                  <TextInput
                    name="lastName"
                    label={c.lastName}
                    placeholder={c.lastNamePh}
                    required
                    variant="filled-darker"
                    autoComplete="family-name"
                    {...fieldError('lastName')}
                  />
                  <TextInput
                    name="email"
                    type="email"
                    label={c.email}
                    placeholder={c.emailPh}
                    required
                    variant="filled-darker"
                    autoComplete="email"
                    {...fieldError('email')}
                  />
                  <TextInput
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    label={c.phone}
                    placeholder={c.phonePh}
                    required
                    variant="filled-darker"
                    autoComplete="tel-national"
                    dir="ltr"
                    {...fieldError('phone')}
                    startAdornment={
                      <DropdownMenu open={pickerOpen} onOpenChange={setPickerOpen}>
                        <DropdownMenuTrigger asChild>
                          <TextInputDropdown
                            variant="subtle"
                            selected={pickerOpen}
                            dir="ltr"
                            aria-label={`${c.countryCode}: ${country}`}
                          >
                            {country}
                          </TextInputDropdown>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
                            {c.countries.map((code) => (
                              <DropdownMenuRadioItem key={code} value={code}>
                                <bdi dir="ltr">{code}</bdi>
                              </DropdownMenuRadioItem>
                            ))}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    }
                  />
                  <input type="hidden" name="countryCode" value={country} />
                  <TextInput
                    name="subject"
                    label={c.subject}
                    placeholder={c.subjectPh}
                    variant="filled-darker"
                  />
                  <Dropdown
                    name="category"
                    label={c.category}
                    placeholder={c.categoryPh}
                    variant="filled-darker"
                  >
                    {c.categories.map((name) => (
                      <DropdownItem key={name} value={name}>
                        {name}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                  <Textarea
                    name="message"
                    label={c.message}
                    placeholder={c.messagePh}
                    rows={3}
                    variant="filled-darker"
                    className="[&>textarea]:py-[11px]"
                  />
                  <FileUpload
                    name="attachment"
                    variant="button"
                    multiple={false}
                    label={c.upload}
                    description={c.uploadHint}
                    buttonLabel={c.browse}
                    accept=".jpg,.jpeg,.png,.pdf"
                    maxSize={MAX_UPLOAD_BYTES}
                    className="[&>button]:border-(--ddga-color-input) [&>button]:bg-transparent [&>button]:text-(--ddga-color-foreground) [&>button:hover]:bg-(--ddga-color-muted)"
                  />
                </div>
                <Button type="submit" size="lg">
                  {c.submit}
                </Button>
              </form>
            </div>

            <Card className="[--ddga-card-padding:39px] max-md:[--ddga-card-padding:39px_15px]">
              <div className="grid gap-4">
                <CardTitle asChild>
                  <h2>{c.cardTitle}</h2>
                </CardTitle>
                {c.channels.map((ch) => (
                  <div key={ch.kind} className="flex items-start gap-2">
                    <span className="shrink-0 py-0.5 text-ink-brand">{CHANNEL_ICON[ch.kind]}</span>
                    <div className="grid justify-items-start gap-1">
                      <span className="text-base font-bold text-gray-800 dark:text-ink">
                        {ch.label}
                      </span>
                      {HREF[ch.kind] ? (
                        <ContactValue
                          href={HREF[ch.kind](ch.value)}
                          value={ch.value}
                          label={ch.label}
                          c={c}
                        />
                      ) : (
                        <Link href="#" endIcon={<Link04Icon />}>
                          {ch.value}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
                <div className="grid gap-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-ink">{c.follow}</h3>
                  <div dir="ltr" className="flex w-fit gap-2">
                    {SOCIAL.map((s) => (
                      <Button
                        key={s.name}
                        asChild
                        variant="ghost"
                        size="icon-md"
                        aria-label={s.name}
                      >
                        <a href="#">{s.icon}</a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="grid justify-items-start gap-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-ink">
                  {c.emergencyTitle}
                </h3>
                {c.emergency.map((e) => (
                  <div key={e.label} className="flex items-center gap-2">
                    <span className="text-base font-semibold text-ink">{e.label}</span>
                    <ContactValue href={`tel:${e.value}`} value={e.value} label={e.label} c={c} />
                  </div>
                ))}
                <Link href="#">{c.viewMore}</Link>
              </div>
            </Card>
          </div>
        </section>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
