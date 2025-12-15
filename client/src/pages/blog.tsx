import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl text-primary">The Northwest Oyster Blog</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Stories from folks who can't get enough of the Pacific shellfish life.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="group flex flex-col h-full border border-gray-100 bg-white hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl text-primary group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4">
                    <span className="p-0 h-auto text-primary group-hover:text-accent uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
