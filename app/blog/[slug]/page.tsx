import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/MarketingLayout";
import { blogPosts, categoryToSlug, getPostBySlug, getRelatedPosts } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article | FastServe" };
  return {
    title: `${post.title} | FastServe`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <MarketingLayout>
      <article>
        <header className="bg-[#396C03] text-white">
          <div className="section-inner max-w-3xl py-12 md:py-16">
            <p className="text-sm text-white/70">
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/blog?category=${categoryToSlug(post.category)}`}
                className="hover:text-white"
              >
                {post.category}
              </Link>
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/75">{post.excerpt}</p>
            <p className="mt-6 text-sm text-white/70">
              {post.author.name} · {post.date} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="bg-white">
          <div className="section-inner max-w-3xl py-10 md:py-14">
            <img
              src={post.image}
              alt=""
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover"
            />

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 flex items-start gap-4 border-t border-gray-100 pt-8">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${post.author.color}`}
              >
                {post.author.initials}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-[#396C03]">{post.author.role}</p>
                <p className="mt-1 text-sm text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="section-inner py-12 md:py-16">
            <div className="mb-6 flex items-end justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Keep reading</h2>
              <Link href="/blog" className="text-sm font-medium text-[#396C03] hover:underline">
                All articles
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <img src={item.image} alt="" className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-[#396C03]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-semibold leading-snug text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{item.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#396C03] text-white">
        <div className="section-inner flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Order something good tonight
            </h2>
            <p className="mt-2 max-w-md text-white/75">
              Browse local restaurants and get dinner at the door in about 20 minutes.
            </p>
          </div>
          <Link
            href="/register"
            className="rounded-full bg-[#FF8B00] px-6 py-3 text-sm font-semibold text-white hover:bg-[#E07A00]"
          >
            Get started
          </Link>
        </div>
      </section>
    </MarketingLayout>
  );
}
