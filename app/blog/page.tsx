"use client"

import Link from "next/link"
import { Search, Clock, MessageSquare, Heart, Tag, Calendar, ArrowRight, Menu, X, User, BookOpen } from "lucide-react"
import { useState } from "react"

const BlogPage = () => {
  // Sample blog post data with more complete content
  const featuredPost = {
    id: "healthy-food-delivery-options",
    title: "10 Healthy Food Delivery Options You Need to Try",
    excerpt:
      "Discover the best healthy food options that you can get delivered right to your doorstep without compromising on taste or nutrition.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Food Specialist",
    },
    category: "Healthy Eating",
    readTime: "5 min read",
    comments: 24,
    likes: 156,
  }

  const blogPosts = [
    {
      id: "revolutionizing-food-delivery",
      title: "How FastServe is Revolutionizing Food Delivery",
      excerpt:
        "Learn how our innovative approach to food delivery is changing the game and bringing better food to more people faster than ever before.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 2, 2025",
      author: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Marketing Director",
      },
      category: "Company News",
      readTime: "4 min read",
      comments: 18,
      likes: 97,
    },
    {
      id: "best-neighborhood-restaurants",
      title: "The Best Restaurants in Your Neighborhood",
      excerpt:
        "We've curated a list of the top-rated restaurants in your area that you can order from through FastServe, with exclusive discounts for our users.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 28, 2025",
      author: {
        name: "Michael Chen",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Restaurant Curator",
      },
      category: "Restaurant Spotlight",
      readTime: "6 min read",
      comments: 32,
      likes: 145,
    },
    {
      id: "quick-meals-busy-professionals",
      title: "Quick and Easy Meals for Busy Professionals",
      excerpt:
        "No time to cook? No problem. These quick meal options will save your day without sacrificing quality or taste. Perfect for busy weeknights.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 25, 2025",
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Nutritionist",
      },
      category: "Meal Ideas",
      readTime: "3 min read",
      comments: 14,
      likes: 89,
    },
    {
      id: "behind-the-scenes-delivery",
      title: "Behind the Scenes: How Your Food Gets Delivered",
      excerpt:
        "Take a peek behind the curtain and see the journey your food takes from restaurant kitchen to your doorstep, and meet the people who make it happen.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 20, 2025",
      author: {
        name: "David Thompson",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Operations Manager",
      },
      category: "Behind the Scenes",
      readTime: "7 min read",
      comments: 29,
      likes: 112,
    },
    {
      id: "plant-based-food-delivery",
      title: "The Rise of Plant-Based Options in Food Delivery",
      excerpt:
        "Plant-based eating is on the rise, and food delivery services are adapting. See the best vegan options available now and how they're changing the industry.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 15, 2025",
      author: {
        name: "Lisa Greenfield",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Vegan Food Expert",
      },
      category: "Food Trends",
      readTime: "5 min read",
      comments: 41,
      likes: 203,
    },
    {
      id: "food-photography-tips",
      title: "Food Photography Tips for Social Media",
      excerpt:
        "Want to make your food pics stand out on Instagram? Learn professional food photography tips that you can use with just your smartphone.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2025",
      author: {
        name: "Carlos Mendez",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Food Photographer",
      },
      category: "Tips & Tricks",
      readTime: "4 min read",
      comments: 36,
      likes: 178,
    },
    {
      id: "international-cuisine-delivery",
      title: "Exploring International Cuisines Through Delivery",
      excerpt:
        "Travel the world through your taste buds with these authentic international restaurants that deliver. From Thai to Ethiopian, expand your culinary horizons.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 5, 2025",
      author: {
        name: "Priya Patel",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Culinary Explorer",
      },
      category: "Food Culture",
      readTime: "6 min read",
      comments: 27,
      likes: 134,
    },
    {
      id: "sustainable-food-packaging",
      title: "Sustainable Food Packaging: The Future of Delivery",
      excerpt:
        "How FastServe is leading the way in eco-friendly food packaging solutions that reduce waste without compromising food quality or delivery experience.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 1, 2025",
      author: {
        name: "Alex Green",
        avatar: "/placeholder.svg?height=100&width=100",
        role: "Sustainability Lead",
      },
      category: "Sustainability",
      readTime: "5 min read",
      comments: 19,
      likes: 92,
    },
  ]

  const categories = [
    { name: "All Posts", count: 42 },
    { name: "Healthy Eating", count: 12 },
    { name: "Company News", count: 8 },
    { name: "Restaurant Spotlight", count: 15 },
    { name: "Meal Ideas", count: 10 },
    { name: "Behind the Scenes", count: 6 },
    { name: "Food Trends", count: 9 },
    { name: "Tips & Tricks", count: 7 },
    { name: "Food Culture", count: 11 },
    { name: "Sustainability", count: 5 },
  ]

  const tags = [
    "Healthy",
    "Fast Food",
    "Vegan",
    "Desserts",
    "Italian",
    "Asian",
    "Mexican",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Drinks",
    "Organic",
    "Gluten-Free",
    "Keto",
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-[#396C03] transition-colors">
                Home
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#396C03] transition-colors">
                Menu
              </Link>
              <Link
                href="/blog"
                className="text-[#396C03] font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF8B00]"
              >
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
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-[#396C03] transition-colors flex items-center">
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

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#396C03] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#396C03] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link href="/blog" className="text-[#396C03] font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#396C03] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-[#396C03] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-[#396C03] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Blog Hero Section */}
      <div className="relative bg-gradient-to-r from-[#396C03] to-[#2A5102] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="foodPattern" patternUnits="userSpaceOnUse" width="50" height="50">
                <path
                  d="M10 10C15 10 15 5 20 5C25 5 25 10 30 10C35 10 35 5 40 5C45 5 45 10 50 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#foodPattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <BookOpen className="w-12 h-12 mx-auto mb-2" />
              <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium">
                Food Stories & Insights
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">FastServe Blog</h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Delicious stories, tips, and trends from the world of food delivery. Discover culinary adventures that
              await at your doorstep.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for recipes, tips, restaurants..."
                className="w-full py-4 px-6 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FF8B00] hover:bg-[#E07A00] text-white p-2 rounded-full transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Category Pills */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-2 md:justify-center">
            {categories.slice(0, 7).map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-[#396C03] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </Link>
            ))}
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
              More...
            </button>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Post */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12 transition-all duration-300 hover:shadow-md">
              <div className="relative">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF8B00] text-white px-4 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center text-white/90 text-sm">
                      <Clock size={14} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredPost.title}</h2>
                  <p className="text-white/90 mb-4 md:text-lg line-clamp-2">{featuredPost.excerpt}</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={featuredPost.author.avatar || "/placeholder.svg"}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{featuredPost.author.name}</p>
                    <p className="text-sm text-gray-500">{featuredPost.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-500">
                    <MessageSquare size={16} className="mr-1" />
                    <span>{featuredPost.comments}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Heart size={16} className="mr-1" />
                    <span>{featuredPost.likes}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="flex items-center text-[#396C03] font-medium hover:text-[#2A5102] transition-colors"
                  >
                    Read article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-52 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#396C03]/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 hover:text-[#396C03] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <MessageSquare size={14} className="mr-1" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Heart size={14} className="mr-1" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex items-center bg-white rounded-lg shadow-sm">
                <button className="px-4 py-2 text-gray-500 hover:text-[#396C03] transition-colors rounded-l-lg border-r border-gray-200">
                  &laquo; Previous
                </button>
                <button className="px-4 py-2 text-white bg-[#396C03]">1</button>
                <button className="px-4 py-2 text-gray-700 hover:text-[#396C03] transition-colors">2</button>
                <button className="px-4 py-2 text-gray-700 hover:text-[#396C03] transition-colors">3</button>
                <button className="px-4 py-2 text-gray-500 hover:text-[#396C03] transition-colors rounded-r-lg border-l border-gray-200">
                  Next &raquo;
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* About Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <span className="bg-[#396C03]/10 text-[#396C03] p-2 rounded-full mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                  </svg>
                </span>
                About FastServe
              </h3>
              <p className="text-gray-600 mb-4">
                FastServe is revolutionizing food delivery with faster service, better restaurants, and more sustainable
                practices. We're on a mission to bring delicious food to your doorstep in record time.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-600 hover:text-[#396C03] p-2 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-600 hover:text-[#396C03] p-2 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-600 hover:text-[#396C03] p-2 rounded-full transition-colors"
                >
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

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <span className="bg-[#396C03]/10 text-[#396C03] p-2 rounded-full mr-2">
                  <Tag size={18} />
                </span>
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className={`${index === 0 ? "text-[#396C03] font-medium" : "text-gray-700"}`}>
                        {category.name}
                      </span>
                      <span
                        className={`${index === 0 ? "bg-[#396C03]/10 text-[#396C03]" : "bg-gray-100 text-gray-600"} px-2 py-1 rounded-full text-xs`}
                      >
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <span className="bg-[#396C03]/10 text-[#396C03] p-2 rounded-full mr-2">
                  <Tag size={18} />
                </span>
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="bg-gray-100 hover:bg-[#396C03]/10 text-gray-700 hover:text-[#396C03] px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="bg-gradient-to-br from-[#396C03] to-[#2A5102] p-6 rounded-xl shadow-sm text-white">
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
                  className="w-full bg-[#FF8B00] hover:bg-[#E07A00] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  Subscribe Now <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Featured Author */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Featured Author</h3>
              <div className="flex flex-col items-center text-center">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Jamie Oliver"
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-lg">Jamie Oliver</h4>
                <p className="text-[#396C03] text-sm mb-2">Food Specialist</p>
                <p className="text-gray-600 mb-4">
                  Award-winning chef and food writer with over 15 years of experience in the culinary world.
                </p>
                <Link href="#" className="text-[#396C03] font-medium hover:text-[#2A5102] transition-colors">
                  View all posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#396C03]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to experience the fastest food delivery?
              </h2>
              <p className="text-gray-600 mb-6 md:text-lg">
                Download the FastServe app today and get your first delivery free. Enjoy meals from your favorite
                restaurants delivered to your doorstep in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center"
                >
                  Download App <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  href="#"
                  className="bg-white border border-gray-300 hover:border-[#396C03] text-gray-700 hover:text-[#396C03] font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="FastServe App"
                className="w-full max-w-[200px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

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

export default BlogPage

