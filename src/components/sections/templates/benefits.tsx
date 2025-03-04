import { SectionWrapper } from '@/components/section-wrapper';
import {
  FeatureList,
  type FeatureItem,
} from '@/components/sections/feature-list';
import { type BackgroundVariant } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BenefitsProps {
  // Main content
  title: ReactNode;
  description?: ReactNode;
  features: FeatureItem[];

  // Feature list configuration
  featureColumns?: 1 | 2 | 3;
  featureBackground?: BackgroundVariant;

  // Visual customization
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
  showGridBackground?: boolean;
  className?: string;

  // Call to action
  action?: {
    text: string;
    href: string;
  };

  // Additional content
  children?: React.ReactNode;
}

export function Benefits({
  // Main content
  title,
  description,
  features,

  // Feature list configuration
  featureColumns = 2,
  featureBackground = 'default',

  // Visual customization
  background = 'default',
  alignment = 'left',
  showGridBackground = false,
  className,

  // Call to action
  action,

  // Additional content
  children,
}: BenefitsProps) {
  return (
    <SectionWrapper
      title={title}
      description={description}
      action={action}
      background={background}
      alignment={alignment}
      showGridBackground={showGridBackground}
      className={className}
    >
      <FeatureList
        features={features}
        columns={featureColumns}
        background={featureBackground}
      />
      {children}
    </SectionWrapper>
  );
}
