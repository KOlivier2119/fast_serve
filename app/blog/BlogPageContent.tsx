"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import MarketingLayout from "@/components/MarketingLayout";
import { blogCategories, blogPosts, categoryToSlug } from "@/lib/blog";

const BlogPageContent = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory =
        !activeCategory || categoryToSlug(post.category) === activeCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featured = !activeCategory && !query ? blogPosts[0] : null;
  const gridPosts = featured
    ? filteredPosts.filter((post) => post.slug !== featured.slug)
    : filteredPosts;

  const isCategoryActive = (name: string) =>
    name === "All Posts" ? !activeCategory : categoryToSlug(name) === activeCategory;

  const categoryHref = (name: string) =>
    name === "All Posts" ? "/blog" : `/blog?category=${categoryToSlug(name)}`;

  const categoryCount = (name: string) =>
    name === "All Posts"
      ? blogPosts.length
      : blogPosts.filter((post) => post.category === name).length;

  return (
    <MarketingLayout>
      <section className="bg-[#396C03] text-white">
        <div className="section-inner py-14 md:py-16">
          <p className="text-sm font-medium text-white/70">Journal</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Stories from the kitchen and the road
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/75">
            Menus that travel, restaurants worth ordering from, and how delivery actually works.
          </p>
          <form
            className="mt-8 flex max-w-md items-center rounded-full bg-white p-1.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              aria-label="Search articles"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="px-3 text-sm text-gray-500 hover:text-gray-800"
              >
                Clear
              </button>
            )}
          </form>
        </div>
      </section>

      <div className="border-b border-gray-100 bg-white">
        <div className="section-inner flex flex-wrap gap-2 py-4">
          {blogCategories.map((category) => (
            <Link
              key={category}
              href={categoryHref(category)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                isCategoryActive(category)
                  ? "bg-[#396C03] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="section-inner py-12 md:py-16">
          {activeCategory && (
            <p className="mb-8 text-sm text-gray-500">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"} in{" "}
              <span className="font-medium text-gray-900">
                {blogCategories.find((c) => categoryToSlug(c) === activeCategory) ?? activeCategory}
              </span>
              {" · "}
              <Link href="/blog" className="text-[#396C03] hover:underline">
                All posts
              </Link>
            </p>
          )}

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="mb-12 grid overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2"
            >
              <img
                src={featured.image}
                alt=""
                className="h-56 w-full object-cover md:h-full"
              />
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-sm font-medium text-[#FF8B00]">{featured.category}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-gray-600">{featured.excerpt}</p>
                <p className="mt-6 text-sm text-gray-500">
                  {featured.author.name} · {featured.date} · {featured.readTime}
                </p>
              </div>
            </Link>
          )}

          {gridPosts.length === 0 ? (
            <p className="rounded-2xl bg-white px-6 py-16 text-center text-gray-500">
              No articles match that search.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <img src={post.image} alt="" className="h-44 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-[#396C03]">
                      {post.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-sm text-gray-500">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <aside className="mt-12 rounded-2xl bg-white p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Browse by topic
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {blogCategories.slice(1).map((category) => (
                <li key={category}>
                  <Link
                    href={categoryHref(category)}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200"
                  >
                    {category}
                    <span className="text-gray-400">{categoryCount(category)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <section className="bg-[#396C03] text-white">
        <div className="section-inner flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Hungry yet?
            </h2>
            <p className="mt-2 max-w-md text-white/75">
              Create an account and order from restaurants near you. First delivery is on us.
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
};

export default BlogPageContent;
