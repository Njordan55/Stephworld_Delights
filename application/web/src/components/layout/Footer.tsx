import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {footerContent, getConfiguredSocialLinks} from '@/config/footer';

const linkClassName = 'inline-block py-0.5 text-sm underline-offset-4 transition-colors hover:text-[var(--swd-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--swd-primary)]';

export default function Footer() {
  const t = useTranslations('Footer');
  const socialLinks = getConfiguredSocialLinks();

  return (
    <footer className="border-t px-4 py-5 sm:px-8 lg:py-6"
      style={{backgroundColor: 'var(--swd-surface)', color: 'var(--swd-foreground)', borderColor: 'var(--swd-border)'}}>
      <div className="mx-auto min-w-0 max-w-6xl">
        <p className="mb-5 max-w-xl text-sm leading-6">{t(footerContent.descriptionKey)}</p>

        <div className="grid min-w-0 grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
          {footerContent.groups.map((group) => (
            <section key={group.heading} aria-labelledby={`footer-${group.heading}`} className="min-w-0">
              <h2 id={`footer-${group.heading}`} className="mb-1.5 text-sm font-semibold">{t(`headings.${group.heading}`)}</h2>
              <ul className="space-y-0.5 [overflow-wrap:anywhere]">
                {group.links.filter((link) => !('visible' in link) || link.visible).map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link href={link.href} className={linkClassName}
                        style={{transitionDuration: 'var(--swd-quick-transition-duration)'}}>{t(`links.${link.label}`)}</Link>
                    ) : (
                      <span className="block py-0.5 text-sm">
                        {t(`links.${link.label}`)}
                        <span className="mt-0.5 block text-xs">{t('unavailable')}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section aria-labelledby="footer-social" className="min-w-0">
            <h2 id="footer-social" className="mb-1.5 text-sm font-semibold">{t('headings.social')}</h2>
            {socialLinks.length ? (
              <ul className="space-y-0.5 [overflow-wrap:anywhere]">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.url} className={linkClassName}
                      style={{transitionDuration: 'var(--swd-quick-transition-duration)'}}>{t(`links.${link.label}`)}</a>
                  </li>
                ))}
              </ul>
            ) : <p className="text-sm leading-6">{t('socialPending')}</p>}
          </section>
        </div>

        <p className="mt-5 border-t pt-3 text-xs leading-5 [overflow-wrap:anywhere]"
          style={{borderColor: 'var(--swd-border)'}}>
          {t('copyright', {year: new Date().getFullYear(), businessName: footerContent.businessName})}
        </p>
      </div>
    </footer>
  );
}
