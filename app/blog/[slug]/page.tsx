import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPosts, getBlogPost } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Krishna Madhiraju`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All posts
        </Link>

        <header className="mb-12">
          <h1 className="font-display font-bold text-[clamp(32px,5vw,48px)] text-foreground leading-[1.1] mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-mono text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-NZ", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {post.tags.length > 0 && (
              <>
                <span className="text-border/60 select-none">·</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase text-primary/70 bg-primary/10 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div className="blog-content">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </main>
  );
}
