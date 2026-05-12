import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Blog — Krishna Madhiraju",
  description:
    "Thoughts on quality engineering, enterprise testing, and AI in QA.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>

        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-sm font-semibold text-primary tracking-[0.2em] uppercase shrink-0">
            Blog
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {posts.length === 0 ? (
          <p className="text-muted-foreground text-base">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="border-t border-border/20 py-8 group hover:bg-secondary/10 -mx-4 px-4 transition-colors duration-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display font-semibold text-2xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-2xl">
                        {post.description}
                      </p>
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
                            <span className="text-border/60 select-none">
                              ·
                            </span>
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
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
