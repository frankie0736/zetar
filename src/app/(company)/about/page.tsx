import {
  BRAND_STORY,
  PAGE_HEADER,
  HOW_IT_WORKS,
  HOW_IT_WORKS_STEPS,
  WHERE_ITS_USED,
  WHERE_ITS_USED_GALLERY,
  MESSAGE,
  CTA,
} from './data';
import { PageHeader } from '@/components/sections/templates';
import { WhereItsUsed } from '@/components/sections/templates';
import { Gallery } from '@/components/sections/gallery';
import { SectionWrapper } from '@/components/section-wrapper';
import { HowItWorks } from '@/components/sections/templates';
import { Form } from '@/components/sections/form';
import Image from 'next/image';
export default function About() {
  return (
    <main>
      <PageHeader
        title={PAGE_HEADER.title}
        description={PAGE_HEADER.description}
        action={PAGE_HEADER.action}
        headingLevel="h1"
        background="gray"
      />
      <SectionWrapper
        title={BRAND_STORY.title}
        description={BRAND_STORY.description}
        alignment="center"
      >
        <Gallery items={BRAND_STORY.items} columns={2} />
      </SectionWrapper>

      <HowItWorks
        title={HOW_IT_WORKS.title}
        description={HOW_IT_WORKS.description}
        background="gray"
        steps={HOW_IT_WORKS_STEPS}
      />

      <WhereItsUsed
        title={WHERE_ITS_USED.title}
        action={WHERE_ITS_USED.action}
        items={WHERE_ITS_USED_GALLERY}
        galleryColumns={4}
      />

      <SectionWrapper
        title={MESSAGE.title}
        description={MESSAGE.description}
        background="gray"
        className="flex-row items-center"
        alignment="center"
      >
        <Image
          src={MESSAGE.image}
          alt={MESSAGE.title}
          width={300}
          height={300}
        />
      </SectionWrapper>

      <SectionWrapper
        title={CTA.title}
        description={CTA.description}
        className="flex-row"
      >
        <Form />
      </SectionWrapper>
    </main>
  );
}
