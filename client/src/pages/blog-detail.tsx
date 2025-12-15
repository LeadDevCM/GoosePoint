import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import NotFound from "./not-found";

export default function BlogDetail() {
  const [match, params] = useRoute("/blog/:id");

  if (!match) return <NotFound />;

  const post = blogPosts.find((p) => p.id === params.id);
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Breadcrumbs */}
      <div className="bg-secondary/30 py-4">
        <div className="container mx-auto px-4 flex items-center text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-primary font-medium line-clamp-1">{post.title}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[50vh] relative overflow-hidden bg-gray-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-headings:font-serif prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent">
            {post.fullContent.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Link href="/blog">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2 pl-0">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Button>
            </Link>
            
            <div className="flex gap-2">
               <Button variant="outline" className="rounded-full h-8 w-8 p-0 border-gray-200 text-muted-foreground hover:text-primary hover:border-primary">
                 <span className="sr-only">Share on Facebook</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </Button>
               <Button variant="outline" className="rounded-full h-8 w-8 p-0 border-gray-200 text-muted-foreground hover:text-primary hover:border-primary">
                 <span className="sr-only">Share on Twitter</span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
