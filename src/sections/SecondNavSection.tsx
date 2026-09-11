import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@dev-dga/react';
import { useMode } from '@/app/mode';
import {
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  EyeIcon,
  LocationIcon,
  MicIcon,
  MoonIcon,
  SunIcon,
  ZoomInAreaIcon,
  ZoomOutAreaIcon,
} from '@/assets/icons';
import { useCopy } from '@/i18n/locale-context';

const ITEM_ICONS = {
  cloud: CloudIcon,
  calendar: CalendarIcon,
  clock: ClockIcon,
  location: LocationIcon,
};
const ACTION_ICONS = {
  mic: MicIcon,
  zoomOut: ZoomOutAreaIcon,
  zoomIn: ZoomInAreaIcon,
  view: EyeIcon,
};

function ThemeToggle({ labels }: { labels: { light: string; dark: string } }) {
  const { mode, setMode } = useMode();
  const next = mode === 'dark' ? 'light' : 'dark';
  const Icon = next === 'dark' ? MoonIcon : SunIcon;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon-md"
          aria-label={labels[next]}
          onClick={() => setMode(next)}
          startIcon={<Icon className="size-5" />}
        />
      </TooltipTrigger>
      <TooltipContent>{labels[next]}</TooltipContent>
    </Tooltip>
  );
}

export function SecondNavSection() {
  const c = useCopy().utility;
  return (
    <section
      className="flex h-10 items-center gap-4 border-y border-solid border-input bg-muted px-8 max-md:hidden"
      aria-label={c.label}
    >
      <ul className="flex min-w-0 flex-1 list-none items-center gap-4 overflow-hidden">
        {c.items.map((item) => {
          const Icon = ITEM_ICONS[item.icon];
          return (
            <li
              key={item.icon}
              className="inline-flex items-center gap-1 text-base whitespace-nowrap text-ink-2"
            >
              <Icon className="size-6 shrink-0" />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-1.5">
        {c.actions.map((action) => {
          if (action.icon === 'theme') return <ThemeToggle key="theme" labels={c.theme} />;
          const Icon = ACTION_ICONS[action.icon];
          return (
            <Tooltip key={action.icon}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-md"
                  aria-label={action.label}
                  startIcon={<Icon className="size-5" />}
                />
              </TooltipTrigger>
              <TooltipContent>{action.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </section>
  );
}
