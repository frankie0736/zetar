import { posts, type Post } from '@/app/data/blog-archive-data';
import { PageHeader } from '@/components/sections/templates';
import { SectionWrapper } from '@/components/section-wrapper';
import { PostCard } from './post-card';
import { BlogPagination } from './pagination';
import { paginatePosts } from './utils';

// Number of posts per page
const POSTS_PER_PAGE = 5;

async function getPosts(): Promise<Post[]> {
  return posts;
}

interface BlogArchiveProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogArchive({ searchParams }: BlogArchiveProps) {
  const allPosts = await getPosts();
  const { page } = await searchParams;

  // Get current page from URL or default to 1
  const currentPage = Number(page) || 1;

  // Use the pagination utility to get paginated posts and metadata
  const {
    paginatedItems,
    totalPages,
    currentPage: validCurrentPage,
  } = paginatePosts(allPosts, currentPage, POSTS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black">
      <PageHeader
        title="Blog"
        description="Insights and perspectives on plastic injection molding, welding assembly, and manufacturing innovation."
        showGridBackground
        background="gray"
      />
      <SectionWrapper>
        <div className="mx-auto max-w-4xl space-y-6">
          {paginatedItems.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <BlogPagination
            currentPage={validCurrentPage}
            totalPages={totalPages}
            basePath="/blog"
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
