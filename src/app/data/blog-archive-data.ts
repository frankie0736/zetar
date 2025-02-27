export type Post = {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  category: string;
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'How to design a website from scratch',
    image:
      'https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080',
    date: 'May 20, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Injection Molding',
  },
  {
    id: '2',
    title: 'The best tools for web development and design',
    image:
      'https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'June 12, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Post Processing',
  },
  {
    id: '3',
    title: 'How to market your website and get more traffic',
    image:
      'https://images.unsplash.com/photo-1572733438515-8f143a854f72?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'July 5, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Rapid Prototyping',
  },
  {
    id: '4',
    title: 'The future of web development and design',
    image:
      'https://images.unsplash.com/photo-1546414701-81cc6963c67f?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'August 18, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Mold Design',
  },
  {
    id: '5',
    title: 'The difference between UI and UX and how to design for both',
    image:
      'https://images.unsplash.com/photo-1647715360138-33fb6fe68539?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'September 7, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Injection Molding',
  },
  {
    id: '6',
    title:
      'Optimizing your website for SEO and getting more traffic from search engines',
    image:
      'https://images.unsplash.com/photo-1623496258831-091279081ac5?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'September 23, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Post Processing',
  },
  {
    id: '7',
    title: 'The best tools for web development and design',
    image:
      'https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'October 12, 2024',
    excerpt:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    category: 'Rapid Prototyping',
  },
];

export const blogCategories = [
  {
    title: 'All',
    href: '/blog',
  },
  {
    title: 'Injection Molding',
    href: '/blog/injection-molding',
  },
  {
    title: 'Post Processing',
    href: '/blog/post-processing',
  },
  {
    title: 'Rapid Prototyping',
    href: '/blog/rapid-prototyping',
  },
  {
    title: 'Mold Design',
    href: '/blog/mold-design',
  },
];
