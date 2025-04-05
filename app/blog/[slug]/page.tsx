"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Heart, Bookmark, Facebook, Twitter, Linkedin, Copy, Instagram } from "lucide-react";

// Mock API functions (replace with real API calls in production)
const getBlogPost = async (slug: string) => {
  // In a real app, you'd fetch this from your database/API
  return {
    id: "healthy-food-delivery-options",
    title: "10 Healthy Food Delivery Options You Need to Try",
    excerpt: "Discover the best healthy food options that you can get delivered right to your doorstep without compromising on taste or nutrition.",
    content: `
      <p class="text-lg mb-4">In today's fast-paced world, finding time to prepare healthy meals can be challenging. Fortunately, the rise of food delivery services has made it easier than ever to enjoy nutritious food without spending hours in the kitchen.</p>
      <!-- Rest of your HTML content -->
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Food Specialist",
      bio: "Jamie is a certified nutritionist and food specialist with over 10 years of experience in the food industry. He is passionate about making healthy eating accessible and enjoyable for everyone."
    },
    category: "Healthy Eating",
    readTime: "5 min read",
    comments: 24,
    likes: 156,
    tags: ["Healthy Eating", "Food Delivery", "Nutrition", "Meal Prep", "Organic"]
  };
};

const getRelatedPosts = async () => {
  // In a real app, you'd fetch this from your database/API
  return [
    {
      id: "plant-based-food-delivery",
      title: "The Rise of Plant-Based Options in Food Delivery",
      excerpt: "Plant-based eating is on the rise, and food delivery services are adapting. See the best vegan options available now.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 15, 2025",
      author: { name: "Lisa Greenfield", avatar: "/placeholder.svg?height=100&width=100" },
      category: "Food Trends",
      readTime: "5 min read"
    },
    // Other related posts...
  ];
};

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const [post, relatedPosts] = await Promise.all([
    getBlogPost(params.slug),
    getRelatedPosts()
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Blog */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/blog" 
            className="flex items-center text-[#396C03] hover:text-[#2A5102] transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Category and Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link 
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-[#396C03]/10 text-[#396C03] px-3 py-1 rounded-full text-sm font-medium"
            >
              {post.category}
            </Link>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center mb-8">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-bold text-gray-800">{post.author.name}</p>
              <p className="text-gray-600 text-sm">{post.author.role}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content - Rest of your component remains the same */}
          {/* ... */}
        </div>
      </main>

      {/* Newsletter and Footer - Rest of your component remains the same */}
      {/* ... */}
    </div>
  );
}