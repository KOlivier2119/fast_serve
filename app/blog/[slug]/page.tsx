import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Logo from "@/components/Logo"
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageSquare,
  Heart,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Tag,
} from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const post = {
    id: params.slug,
    title:
      params.slug === "healthy-food-delivery-options"
        ? "10 Healthy Food Delivery Options You Need to Try"
        : "How FastServe is Revolutionizing Food Delivery",
    content: `
      <p class="lead">In today's fast-paced world, finding time to prepare healthy meals can be challenging. Fortunately, food delivery services have evolved to offer nutritious options that don't compromise on taste or quality.</p>
      
      <p>The demand for healthy food delivery has skyrocketed in recent years, with more people prioritizing their wellbeing while balancing busy schedules. This trend has led to an explosion of services catering specifically to health-conscious consumers.</p>
      
      <h2>Why Choose Healthy Food Delivery?</h2>
      
      <p>Healthy food delivery services offer numerous benefits:</p>
      
      <ul>
        <li><strong>Time-saving:</strong> No need to shop for ingredients or spend hours cooking</li>
        <li><strong>Portion control:</strong> Meals are typically portioned appropriately</li>
        <li><strong>Nutritional balance:</strong> Professional chefs and nutritionists ensure balanced meals</li>
        <li><strong>Reduced food waste:</strong> You only get what you need</li>
        <li><strong>Dietary accommodation:</strong> Many services cater to specific dietary needs</li>
      </ul>
      
      <p>With these advantages, it's no wonder more people are turning to healthy food delivery options to maintain their dietary goals without sacrificing convenience.</p>
      
      <h2>Top Healthy Food Delivery Services</h2>
      
      <p>Here are our top picks for healthy food delivery services that consistently deliver on quality, taste, and nutrition:</p>
      
      <h3>1. Green Kitchen</h3>
      
      <p>Green Kitchen specializes in plant-based meals made with organic ingredients. Their menu rotates weekly and features creative vegan and vegetarian options that even meat-eaters would enjoy. Popular dishes include their Buddha bowls and cauliflower "steaks."</p>
      
      <h3>2. Fit Feast</h3>
      
      <p>Perfect for fitness enthusiasts, Fit Feast offers high-protein meals designed to support active lifestyles. Each meal comes with detailed macronutrient information, making it easy to track your intake. Their grilled chicken power bowl is a customer favorite.</p>
      
      <h3>3. Pure Plate</h3>
      
      <p>Pure Plate focuses on clean eating with meals free from processed ingredients, refined sugars, and artificial additives. They offer paleo, keto, and Whole30-compliant options. Their wild-caught salmon with roasted vegetables is particularly popular.</p>
      
      <h3>4. Mindful Meals</h3>
      
      <p>This service emphasizes locally-sourced ingredients and sustainable practices. Mindful Meals offers a range of options for different dietary preferences, including gluten-free and dairy-free choices. Their seasonal grain bowls receive rave reviews.</p>
      
      <h3>5. Nourish Box</h3>
      
      <p>Nourish Box delivers ready-to-eat meals that require no preparation. Their menu is designed by nutritionists and includes options for breakfast, lunch, and dinner. Their overnight oats and Mediterranean bowls are customer favorites.</p>
      
      <blockquote>
        <p>"Healthy food delivery services have transformed how I approach nutrition. I no longer have to choose between eating well and saving time."</p>
        <cite>— Emma Johnson, Nutrition Coach</cite>
      </blockquote>
      
      <h2>How to Choose the Right Service for You</h2>
      
      <p>When selecting a healthy food delivery service, consider these factors:</p>
      
      <ol>
        <li><strong>Dietary requirements:</strong> Ensure the service can accommodate your specific needs</li>
        <li><strong>Budget:</strong> Compare pricing plans to find one that fits your financial situation</li>
        <li><strong>Meal variety:</strong> Look for services that offer diverse menu options to prevent boredom</li>
        <li><strong>Delivery frequency:</strong> Consider how often you want meals delivered</li>
        <li><strong>Preparation required:</strong> Decide if you prefer ready-to-eat meals or meal kits</li>
      </ol>
      
      <p>Taking the time to research different services will help you find the perfect fit for your lifestyle and preferences.</p>
      
      <h2>Making the Most of Your Healthy Food Delivery</h2>
      
      <p>To maximize the benefits of healthy food delivery services:</p>
      
      <ul>
        <li>Plan your orders in advance to ensure you have meals when needed</li>
        <li>Store meals properly according to the provider's instructions</li>
        <li>Supplement delivered meals with fresh fruits and vegetables</li>
        <li>Provide feedback to help services improve and better meet your needs</li>
        <li>Consider mixing services to increase variety in your diet</li>
      </ul>
      
      <p>With these strategies, you can enjoy the convenience of food delivery while maintaining a nutritious diet.</p>
      
      <h2>Conclusion</h2>
      
      <p>Healthy food delivery services have revolutionized how we approach nutrition in our busy lives. By offering convenient access to nutritious, delicious meals, these services make it easier than ever to maintain a healthy diet without sacrificing time or taste.</p>
      
      <p>Whether you're looking to support fitness goals, accommodate dietary restrictions, or simply eat better with less effort, there's likely a healthy food delivery service that fits your needs. As this industry continues to grow, we can expect even more innovative options to emerge, further simplifying the journey to better health through good nutrition.</p>
    `,
    image: "/blog_healthy.jpg",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      initials: "JO",
      color: "bg-emerald-500",
      role: "Food Specialist",
      bio: "Award-winning chef and food writer with over 15 years of experience in the culinary world.",
    },
    category: "Healthy Eating",
    readTime: "5 min read",
    comments: 24,
    likes: 156,
    tags: ["Healthy", "Food Delivery", "Nutrition", "Meal Planning"],
  }

  // Related posts would normally come from a database query
  const relatedPosts = [
    {
      id: "plant-based-food-delivery",
      title: "The Rise of Plant-Based Options in Food Delivery",
      excerpt: "Plant-based eating is on the rise, and food delivery services are adapting. See the best vegan options available now.",
      image: "/blog_plant_based.jpg",
      date: "March 15, 2025",
      author: { name: "Lisa Greenfield", initials: "LG", color: "bg-green-500" },
      category: "Food Trends",
      readTime: "5 min read",
    },
    {
      id: "meal-prep-delivery-services",
      title: "Meal Prep Delivery Services: Are They Worth It?",
      excerpt: "We analyze the cost, convenience, and quality of popular meal prep delivery services to help you decide.",
      image: "/blog_quick_meals.jpg",
      date: "March 10, 2025",
      author: { name: "Michael Chen", initials: "MC", color: "bg-purple-500" },
      category: "Food Reviews",
      readTime: "4 min read",
    },
    {
      id: "sustainable-food-packaging",
      title: "Sustainable Food Packaging: The Future of Delivery",
      excerpt: "How FastServe is leading the way in eco-friendly food packaging solutions that reduce waste.",
      image: "/blog_delivery.jpg",
      date: "March 1, 2025",
      author: { name: "Alex Green", initials: "AG", color: "bg-teal-500" },
      category: "Sustainability",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Image Background */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={post.image || "/placeholder.svg"} 
            alt={post.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-12 pb-16 md:pt-16 md:pb-20">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-white/70 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-white transition-colors"
            >
              {post.category}
            </Link>
          </div>

          {/* Article Meta */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#FF8B00] text-white px-4 py-1.5 rounded-full font-semibold text-sm">
                {post.category}
              </span>
              <div className="flex items-center text-white/80 text-sm">
                <Calendar size={16} className="mr-1.5" />
                <span>{post.date}</span>
              </div>
              <span className="text-white/50">•</span>
              <div className="flex items-center text-white/80 text-sm">
                <Clock size={16} className="mr-1.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold ${post.author.color} ring-4 ring-white/20`}>
                {post.author.initials}
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg">{post.author.name}</h3>
                <p className="text-white/70">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <article className="lg:w-2/3">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#396C03] hover:text-[#2A5102] mb-10 font-medium transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-[#396C03]/10 flex items-center justify-center group-hover:bg-[#396C03]/20 transition-colors">
                <ArrowLeft size={15} />
              </span>
              Back to Blog
            </Link>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-10
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#396C03]
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-gray-600 prose-li:leading-relaxed
              prose-strong:text-gray-800 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-[#396C03] prose-blockquote:bg-[#396C03]/5 prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic
              prose-blockquote:text-gray-700
              prose-ul:space-y-1 prose-ol:space-y-1
              prose-a:text-[#396C03] prose-a:no-underline hover:prose-a:underline
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <Tag size={14} />
                  {tag}
                </Link>
              ))}
            </div>

            {/* Article Footer - Engagement */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors group">
                    <span className="w-10 h-10 rounded-full bg-white group-hover:bg-red-50 flex items-center justify-center transition-colors shadow-sm">
                      <Heart size={18} />
                    </span>
                    <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-[#396C03] transition-colors group">
                    <span className="w-10 h-10 rounded-full bg-white group-hover:bg-[#396C03]/10 flex items-center justify-center transition-colors shadow-sm">
                      <MessageSquare size={18} />
                    </span>
                    <span className="font-semibold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-[#396C03] transition-colors group">
                    <span className="w-10 h-10 rounded-full bg-white group-hover:bg-[#396C03]/10 flex items-center justify-center transition-colors shadow-sm">
                      <Bookmark size={18} />
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-medium text-sm">Share:</span>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white hover:bg-blue-600 text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white hover:bg-sky-500 text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white hover:bg-blue-700 text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="border border-gray-100 rounded-2xl p-6 md:p-8 mb-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className={`w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold ${post.author.color}`}>
                {post.author.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-gray-900">{post.author.name}</h3>
                  <span className="bg-[#396C03]/10 text-[#396C03] text-xs font-semibold px-2.5 py-1 rounded-full">Author</span>
                </div>
                <p className="text-[#396C03] font-medium text-sm mb-3">{post.author.role}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{post.author.bio}</p>
                <div className="flex gap-2">
                  <a href="#" className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#396C03] text-gray-500 hover:text-[#396C03] flex items-center justify-center transition-colors" aria-label="Twitter">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full border border-gray-200 hover:border-[#396C03] text-gray-500 hover:text-[#396C03] flex items-center justify-center transition-colors" aria-label="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <section className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments <span className="text-gray-400">({post.comments})</span></h3>

              {/* Comment Form */}
              <div className="border border-gray-100 rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Leave a Comment</h4>
                <form>
                  <div className="mb-4">
                    <textarea
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#396C03]/30 focus:border-[#396C03] transition-colors resize-none"
                      rows={4}
                      placeholder="Share your thoughts..."
                    ></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                      type="text"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#396C03]/30 focus:border-[#396C03] transition-colors"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#396C03]/30 focus:border-[#396C03] transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#396C03] hover:bg-[#2A5102] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>

              {/* Sample Comments */}
              <div className="space-y-4">
                <div className="border border-gray-100 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold bg-blue-500 flex-shrink-0">
                      SJ
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-gray-900">Sarah Johnson</h5>
                        <span className="text-sm text-gray-400">April 6, 2025</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        This article is exactly what I needed! I've been looking for healthy food delivery options and
                        this gives me a great starting point. I'm definitely going to try Green Kitchen first.
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1">
                          <Heart size={15} /> 12
                        </button>
                        <button className="text-gray-400 hover:text-[#396C03] transition-colors font-medium">Reply</button>
                      </div>
                    </div>
                  </div>

                  {/* Nested Reply */}
                  <div className="ml-14 pl-5 border-l-2 border-[#396C03]/20">
                    <div className="flex items-start gap-4">
                      <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${post.author.color}`}>
                        {post.author.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-semibold text-gray-900">{post.author.name}</h5>
                          <span className="bg-[#396C03]/10 text-[#396C03] text-xs font-semibold px-2 py-0.5 rounded-full">Author</span>
                          <span className="text-sm text-gray-400 ml-auto">April 6, 2025</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Thanks for your comment, Sarah! Green Kitchen is definitely a great choice. Let me know how you like it!
                        </p>
                        <div className="flex items-center gap-4 mt-3 text-sm">
                          <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1">
                            <Heart size={15} /> 5
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-100 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white text-sm font-bold bg-purple-500">
                      MC
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-semibold text-gray-900">Michael Chen</h5>
                        <span className="text-sm text-gray-400">April 5, 2025</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        I've been using Fit Feast for about 3 months now and can confirm it's excellent for anyone with
                        fitness goals. Their portion sizes are perfect and the macros are always on point.
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm">
                        <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1">
                          <Heart size={15} /> 8
                        </button>
                        <button className="text-gray-400 hover:text-[#396C03] transition-colors font-medium">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="border border-gray-200 hover:border-[#396C03] hover:text-[#396C03] text-gray-600 font-medium py-3 px-8 rounded-xl transition-colors">
                  Load More Comments
                </button>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="lg:sticky lg:top-6 space-y-6">
              {/* Related Posts */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="flex gap-3 group">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-20 h-20 rounded-xl object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-800 group-hover:text-[#396C03] transition-colors line-clamp-2 mb-1">
                          {relatedPost.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock size={12} className="mr-1" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 bg-gray-50 hover:bg-[#396C03]/10 text-gray-600 hover:text-[#396C03] px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Tag size={13} />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#396C03] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-1">Stay in the loop</h3>
                <p className="text-white/80 text-sm mb-4">
                  Get the latest food trends and tips delivered weekly.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FF8B00] hover:bg-[#E07A00] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* CTA App */}
              <div className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="h-32 bg-[#396C03] flex items-center justify-center">
                  <Logo size={52} showWordmark={true} variant="default" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-1">Try FastServe Today</h3>
                  <p className="text-gray-500 text-sm mb-4">First delivery free. Order from your favourite local restaurants.</p>
                  <Link
                    href="#"
                    className="block text-center bg-[#396C03] hover:bg-[#2A5102] text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm"
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}