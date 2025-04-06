import Link from "next/link"
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
  User,
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
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      avatar: "/placeholder.svg?height=100&width=100",
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
      excerpt:
        "Plant-based eating is on the rise, and food delivery services are adapting. See the best vegan options available now.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 15, 2025",
      author: {
        name: "Lisa Greenfield",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Food Trends",
      readTime: "5 min read",
    },
    {
      id: "meal-prep-delivery-services",
      title: "Meal Prep Delivery Services: Are They Worth It?",
      excerpt:
        "We analyze the cost, convenience, and quality of popular meal prep delivery services to help you decide.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2025",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Food Reviews",
      readTime: "4 min read",
    },
    {
      id: "sustainable-food-packaging",
      title: "Sustainable Food Packaging: The Future of Delivery",
      excerpt: "How FastServe is leading the way in eco-friendly food packaging solutions that reduce waste.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 1, 2025",
      author: {
        name: "Alex Green",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Sustainability",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="bg-[#396C03] rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-900">FastServe</h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-[#396C03] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                Menu
              </Link>
              <Link href="/blog" className="text-[#396C03] font-medium">
                Blog
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-[#396C03] transition-colors hidden md:flex items-center"
              >
                <User size={18} className="mr-1" />
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#396C03] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[#396C03] transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-[#396C03] transition-colors"
            >
              {post.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium truncate">{post.title}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-[#396C03] hover:text-[#2A5102] mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center mb-4 text-sm">
                <span className="bg-[#396C03]/10 text-[#396C03] px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <div className="flex items-center text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="flex items-center text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

              {/* Author */}
              <div className="flex items-center mb-6">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-auto object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] px-3 py-1 rounded-full text-sm transition-colors flex items-center"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </Link>
              ))}
            </div>

            {/* Article Footer */}
            <footer className="border-t border-b border-gray-200 py-6 mb-8">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <button className="flex items-center text-gray-700 hover:text-[#396C03] transition-colors">
                    <Heart size={20} className="mr-1" />
                    <span>{post.likes} Likes</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-[#396C03] transition-colors">
                    <MessageSquare size={20} className="mr-1" />
                    <span>{post.comments} Comments</span>
                  </button>
                  <button className="flex items-center text-gray-700 hover:text-[#396C03] transition-colors">
                    <Bookmark size={20} className="mr-1" />
                    <span>Save</span>
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-3">Share:</span>
                  <div className="flex space-x-2">
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] p-2 rounded-full transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] p-2 rounded-full transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] p-2 rounded-full transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </footer>

            {/* Author Bio */}
            <div className="bg-[#396C03]/5 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{post.author.name}</h3>
                  <p className="text-[#396C03] font-medium mb-3">{post.author.role}</p>
                  <p className="text-gray-600 mb-4">{post.author.bio}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comments ({post.comments})</h3>

              {/* Comment Form */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Leave a Comment</h4>
                <form>
                  <div className="mb-4">
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03]/50 focus:border-[#396C03]"
                      rows={4}
                      placeholder="Share your thoughts..."
                    ></textarea>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03]/50 focus:border-[#396C03]"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03]/50 focus:border-[#396C03]"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <input type="checkbox" id="saveInfo" className="mr-2" />
                    <label htmlFor="saveInfo" className="text-gray-700">
                      Save my name and email for the next time I comment
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Post Comment
                  </button>
                </form>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start mb-4">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Sarah Johnson"
                      className="w-10 h-10 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <h5 className="font-medium text-gray-900 mr-2">Sarah Johnson</h5>
                        <span className="text-sm text-gray-500">April 6, 2025</span>
                      </div>
                      <p className="text-gray-700">
                        This article is exactly what I needed! I've been looking for healthy food delivery options and
                        this gives me a great starting point. I'm definitely going to try Green Kitchen first.
                      </p>
                      <div className="flex items-center mt-3 text-sm">
                        <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                          <Heart size={16} className="inline mr-1" /> 12
                        </button>
                        <button className="text-gray-500 hover:text-[#396C03] transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>

                  {/* Nested Reply */}
                  <div className="ml-12 pl-4 border-l-2 border-gray-100">
                    <div className="flex items-start mt-4">
                      <img
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="flex items-center mb-1">
                          <h5 className="font-medium text-gray-900 mr-2">{post.author.name}</h5>
                          <span className="bg-[#396C03]/10 text-[#396C03] text-xs px-2 py-1 rounded-full">Author</span>
                          <span className="text-sm text-gray-500 ml-2">April 6, 2025</span>
                        </div>
                        <p className="text-gray-700">
                          Thanks for your comment, Sarah! Green Kitchen is definitely a great choice. Let me know how
                          you like it!
                        </p>
                        <div className="flex items-center mt-3 text-sm">
                          <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                            <Heart size={16} className="inline mr-1" /> 5
                          </button>
                          <button className="text-gray-500 hover:text-[#396C03] transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Michael Chen"
                      className="w-10 h-10 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <h5 className="font-medium text-gray-900 mr-2">Michael Chen</h5>
                        <span className="text-sm text-gray-500">April 5, 2025</span>
                      </div>
                      <p className="text-gray-700">
                        I've been using Fit Feast for about 3 months now and can confirm it's excellent for anyone with
                        fitness goals. Their portion sizes are perfect and the macros are always on point.
                      </p>
                      <div className="flex items-center mt-3 text-sm">
                        <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                          <Heart size={16} className="inline mr-1" /> 8
                        </button>
                        <button className="text-gray-500 hover:text-[#396C03] transition-colors">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg transition-colors">
                  Load More Comments
                </button>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Related Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="flex gap-4 group">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800 group-hover:text-[#396C03] transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] px-3 py-1 rounded-full text-sm transition-colors flex items-center"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-[#396C03] to-[#2A5102] rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
              <p className="mb-4 text-white/90">
                Get the latest food trends and restaurant news delivered to your inbox weekly.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF8B00] hover:bg-[#E07A00] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Download FastServe App"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Try FastServe Today</h3>
                <p className="text-gray-600 mb-4">
                  Download our app and get your first delivery free. Enjoy meals from your favorite restaurants.
                </p>
                <Link
                  href="#"
                  className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
                >
                  Download App
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#396C03" className="w-6 h-6">
                    <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">FastServe</h2>
              </div>
              <p className="text-gray-400 mb-4">Delivering delicious meals with speed and care since 2020.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Food Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Grocery Delivery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Meal Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Corporate Catering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Restaurant Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>123 Food Street, Cityville</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@fastserve.com</p>
                <p>Open: 24/7</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FastServe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

