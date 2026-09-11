import { DigitalStamp } from '@dev-dga/react';
import { useCopy } from '@/i18n/locale-context';

export function DigitalStampSection() {
  const c = useCopy().stamp;
  return (
    <DigitalStamp
      extension="gov.sa"
      aria-label={c.ariaLabel}
      statement={c.statement}
      triggerLabel={c.triggerLabel}
      domainTitle={
        <>
          {c.domainPrefix}
          <strong>.gov.sa</strong>
        </>
      }
      domainDescription={c.domainDescription}
      securityTitle={
        <>
          {c.securityPrefix}
          <strong>HTTPS</strong>
        </>
      }
      securityDescription={c.securityDescription}
      registrationLabel={c.registrationLabel}
      registrationNumber={c.registrationNumber}
    />
  );
}
