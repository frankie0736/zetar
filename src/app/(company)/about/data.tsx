import { Gallery } from '@/components/sections/gallery';
import { type Step } from '@/components/sections/steps';
import { type GalleryItem } from '@/components/sections/gallery';
export const PAGE_HEADER = {
  title: 'Welcome to Zetarmold',
  description:
    'A brand that seamlessly blends craftsmanship with family heritage. Established in 2005 in China, ZetarMold has become a leader in the plastic injection mold and molding industry. We offer comprehensive services—from design to assembly—guided by our core belief: _craftsmanship with integrity, creating superior products for the world.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
};

export const BRAND_STORY = {
  title: 'Our Brand Story',
  description:
    'ZetarMold’s journey began with a family passionate about precision and quality. Founded in 2005 by artisans with generations of expertise, we built our company on the principle of _crafting with heart_. Every product we create reflects our dedication to treating it as a work of art.\n\nOur values—integrity as our standard and excellence for the world—shape everything we do. Certified with ISO 9001, ISO 13485, ISO 14001, and ISO 45001, and equipped with a Class 108 clean room, we meet the strict demands of industries like medical and food production.',
  items: [
    {
      image: '/images/placeholder/1.svg',
      title: 'Craftsmanship',
      description:
        'At ZetarMold, craftsmanship is at our core. Our team, including over 20 English-speaking professionals and 7 experienced engineers, combines traditional techniques with modern technology to ensure every detail meets the highest standards.',
    },
    {
      image: '/images/placeholder/2.svg',
      title: 'PrecFamily Legacyision',
      description:
        'Passed down through generations, our family’s mold-making expertise drives us forward. From a small factory to facilities across Shanghai, Jiangsu, and Zhejiang, we remain rooted in our commitment to quality and integrity.',
    },
  ],
};

// How It Works
export const HOW_IT_WORKS = {
  title: 'Our Milestones',
  description:
    'These milestones highlight our dedication to craftsmanship and our family’s legacy.',
  action: {
    text: 'Let Zetar Patiently Explain the Principles',
    href: '/contact',
  },
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    title: '2005',
    description: 'ZetarMold is founded, focusing on plastic injection molds.',
    image: '/images/placeholder/1.svg',
    icon: 'Paintbrush',
  },
  {
    title: '2010',
    description: 'ZetarMold expands its operations to Shanghai.',
    image: '/images/placeholder/1.svg',
    icon: 'Layers',
  },
  {
    title: '2013',
    description: 'ZetarMold establishes a Class 108 clean room.',
    image: '/images/placeholder/1.svg',
    icon: 'Zap',
  },
  {
    title: '2016-2020',
    description: 'ZetarMold opens its first overseas office in Shanghai.',
    image: '/images/placeholder/1.svg',
    icon: 'Sticker',
  },
];

// Where It's Used
export const WHERE_ITS_USED = {
  title: (
    <>
      Why Choose <span className="text-primary">ZetarMold</span>?
    </>
  ),
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
};

// Where It's Used Gallery
export const WHERE_ITS_USED_GALLERY: GalleryItem[] = [
  {
    title: 'One-Stop Service',
    description: 'From design to assembly, we handle it all.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Expert Team',
    description:
      'Our engineers and multilingual staff provide tailored, seamless support.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'Our certifications and advanced facilities ensure top-tier standards.',
    image: '/images/placeholder/1.svg',
  },
  {
    title: 'Global Vision, Personal Touch',
    description: 'We combine family warmth with international professionalism.',
    image: '/images/placeholder/1.svg',
  },
];
export const MESSAGE = {
  title: 'A Message from ZetarMold',
  description:
    '“At ZetarMold, we build more than products—we build trust and partnerships. Every mold and product carries our family’s pride and commitment to excellence. Let’s turn your ideas into reality together.”',
  image: '/images/placeholder/1.svg',
};

export const CTA = {
  title: 'Ready to Start Your Journey with ZetarMold?',
  description: (
    <>
      <p>
        Where inheriting the spirit of craftsmanship, upholding the
        family&apos;s founding principles, and creating superior products for
        the world.
      </p>
      <p>Let&apos;s turn your ideas into reality together.</p>
    </>
  ),
};
