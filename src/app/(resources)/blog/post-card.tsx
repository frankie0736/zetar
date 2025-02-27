import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/app/utils/slugify';
import { type Post } from '@/app/data/blog-archive-data';
import { cn } from '@/lib/utils';

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="group border-border/5 bg-background/20 hover:bg-background/40 dark:border-border/5 relative overflow-hidden rounded-lg border transition-colors duration-300 dark:bg-slate-950/20 dark:hover:bg-slate-950/40">
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <Link
            href={slugify(post.title)}
            className="block overflow-hidden rounded-md transition-all duration-300"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={225}
                className={cn(
                  'aspect-[16/9] w-full object-cover object-center',
                  'transform transition-transform duration-500 group-hover:scale-105 sm:w-[240px]',
                )}
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Badge
              variant="outline"
              className="border-border/20 text-muted-foreground rounded-md bg-transparent px-2 py-0.5 text-xs font-normal"
            >
              {post.category}
            </Badge>
            <span className="text-muted-foreground text-xs">{post.date}</span>
          </div>
          <h3 className="font-serif text-xl font-medium tracking-tight lg:text-2xl">
            <Link
              href={slugify(post.title)}
              className="text-foreground/90 group-hover:text-primary inline-block transition-colors duration-300"
            >
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <Link
            href={slugify(post.title)}
            className="text-primary inline-flex items-center text-sm font-medium opacity-80 transition-all duration-300 hover:translate-x-0.5 hover:opacity-100"
          >
            Read article
            <ArrowRight className="ml-1.5 size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
