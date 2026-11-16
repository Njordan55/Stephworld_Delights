import {ArrowUpRight, ClipboardCheck, Compass, MessageSquare} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {customOrdersContent, type CustomOrdersContent} from '@/config/custom-orders';

const stepIcons = {choose: Compass, request: MessageSquare, confirm: ClipboardCheck};

export default function CustomOrdersSection({content = customOrdersContent}: {content?: CustomOrdersContent}) {
  const t = useTranslations('CustomOrders');

  return (
    <section aria-labelledby="custom-orders-title" className="@container px-4 py-12 sm:px-8 sm:py-16"
      style={{backgroundColor: 'var(--swd-background)', color: 'var(--swd-foreground)'}}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 id="custom-orders-title" className="text-2xl font-semibold sm:text-3xl">{content.title ?? t(content.titleKey)}</h2>
          <p className="mt-3 text-base leading-7">{content.description ?? t(content.descriptionKey)}</p>
        </div>

        <ol role="list" className="mt-8 grid max-w-4xl grid-cols-1 justify-items-start gap-4 md:grid-cols-2 @[48rem]:grid-cols-3">
          {content.steps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            return (
              <li key={step.id} className="aspect-square w-full min-h-min min-w-0 max-w-72 border p-5"
                style={{backgroundColor: 'color-mix(in srgb, var(--swd-surface) 80%, var(--swd-border))', color: 'var(--swd-primary)', borderColor: 'var(--swd-border)', borderRadius: 'calc(var(--swd-radius-default) / 2)'}}>
                <div className="flex items-center justify-between gap-4" aria-hidden="true">
                  <span className="flex h-10 w-10 items-center justify-center border"
                    style={{color: 'var(--swd-foreground)', borderColor: 'var(--swd-border)', borderRadius: 'calc(var(--swd-radius-default) / 2)'}}>
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="text-xs font-medium tabular-nums" style={{color: 'var(--swd-primary)'}}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold [overflow-wrap:anywhere]" style={{color: 'var(--swd-foreground)'}}>{step.title ?? t(step.titleKey)}</h3>
                <p className="mt-2 text-sm leading-6">{step.description ?? t(step.descriptionKey)}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex flex-col items-start gap-3">
          <Link href={content.action.href}
            className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 px-6 py-3 text-center text-sm font-semibold transition-[opacity,transform] hover:opacity-80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)] motion-reduce:transform-none"
            style={{backgroundColor: 'var(--swd-primary)', color: 'var(--swd-background)', borderRadius: 'var(--swd-radius-default)', transitionDuration: 'var(--swd-quick-transition-duration)'}}>
            {t(content.action.labelKey)}<ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
          </Link>
          <p className="max-w-xl text-sm leading-6">{content.note ?? t(content.noteKey)}</p>
        </div>
      </div>
    </section>
  );
}
