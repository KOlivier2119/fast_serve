import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Heart, Bookmark, Facebook, Twitter, Linkedin, Copy } from "lucide-react"

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  category: string;
  readTime: string;
  comments: number;
  likes: number;
  tags: string[];
}

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: string;
}

// This would normally come from a database or API
const getBlogPost = (slug: string): BlogPost => {
  // For demo purposes, we'll just return data for the healthy food post
  // In a real app, you'd fetch this based on the slug
  return {
    id: "healthy-food-delivery-options",
    title: "10 Healthy Food Delivery Options You Need to Try",
    excerpt:
      "Discover the best healthy food options that you can get delivered right to your doorstep without compromising on taste or nutrition.",
    content: `
      <p class="text-lg mb-4">In today's fast-paced world, finding time to prepare healthy meals can be challenging. Fortunately, the rise of food delivery services has made it easier than ever to enjoy nutritious food without spending hours in the kitchen.</p>
      
      <p class="text-lg mb-4">Whether you're following a specific diet or simply trying to make healthier choices, these 10 food delivery options offer delicious meals that don't compromise on nutrition or taste.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Green Chef</h2>
      <p class="mb-4">Green Chef stands out for its certified organic ingredients and diverse menu options that cater to various dietary preferences, including keto, paleo, plant-based, and gluten-free. Their pre-portioned ingredients and step-by-step recipes make cooking healthy meals at home both convenient and enjoyable.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Sunbasket</h2>
      <p class="mb-4">Sunbasket offers organic produce and responsibly sourced proteins in their meal kits and ready-to-heat meals. With options for various diets including Mediterranean, vegetarian, and diabetes-friendly, they make healthy eating accessible and delicious.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Daily Harvest</h2>
      <p class="mb-4">Perfect for those who love smoothies, soups, and bowls, Daily Harvest delivers frozen, ready-to-blend or heat meals made from fruits and vegetables. Their offerings are plant-based and designed to provide essential nutrients without added sugars or preservatives.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Sakara Life</h2>
      <p class="mb-4">For a premium plant-based experience, Sakara Life delivers organic, ready-to-eat meals that focus on nutrient density and whole foods. Their philosophy centers around clean eating for optimal health and wellness.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Territory Foods</h2>
      <p class="mb-4">Territory Foods partners with local chefs to create meals that align with various dietary preferences, including Whole30, paleo, keto, and plant-based. Their meals are fresh, never frozen, and rotate regularly to keep your taste buds excited.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Freshly</h2>
      <p class="mb-4">Freshly delivers ready-to-eat meals that are both nutritious and satisfying. Their menu includes options with less sugar, fewer processed ingredients, and more nutrients, making healthy eating convenient for busy individuals.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Purple Carrot</h2>
      <p class="mb-4">As a plant-based meal delivery service, Purple Carrot helps you incorporate more vegetables into your diet with creative, flavorful recipes. Their meals are designed to be nutritionally balanced while introducing you to new plant-based ingredients and cooking techniques.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Factor</h2>
      <p class="mb-4">Factor delivers fully-prepared meals designed by dietitians to be both healthy and delicious. With options like keto, calorie-smart, and vegan, their meals require no preparation beyond heating, making healthy eating effortless.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Splendid Spoon</h2>
      <p class="mb-4">Focusing on plant-based smoothies, soups, and grain bowls, Splendid Spoon offers ready-to-eat options that are perfect for breakfast and lunch. Their meals are designed to be nutrient-dense and satisfying while remaining low in sugar and sodium.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Trifecta Nutrition</h2>
      <p class="mb-4">Popular among fitness enthusiasts, Trifecta Nutrition delivers organic, macro-balanced meals that support various fitness goals. Their meal plans include options like keto, paleo, vegan, and clean eating, all designed to fuel your body optimally.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">With these healthy food delivery options, maintaining a nutritious diet has never been easier. Whether you prefer cooking from meal kits or enjoying ready-to-eat meals, there's a service that can meet your dietary needs and preferences.</p>
      
      <p class="mb-4">Remember that the best healthy eating plan is one that you can maintain consistently. By incorporating these delivery services into your routine, you can save time while nourishing your body with high-quality, nutritious foods.</p>
      
      <p class="text-lg font-medium mt-8">What's your favorite healthy food delivery service? Share your experiences in the comments below!</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Food Specialist",
      bio: "Jamie is a certified nutritionist and food specialist with over 10 years of experience in the food industry. He is passionate about making healthy eating accessible and enjoyable for everyone.",
    },
    category: "Healthy Eating",
    readTime: "5 min read",
    comments: 24,
    likes: 156,
    tags: ["Healthy Eating", "Food Delivery", "Nutrition", "Meal Prep", "Organic"],
  }
}

// This would normally come from a database or API
const getRelatedPosts = (): RelatedPost[] => {
  return [
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
      id: "quick-meals-busy-professionals",
      title: "Quick and Easy Meals for Busy Professionals",
      excerpt:
        "No time to cook? No problem. These quick meal options will save your day without sacrificing quality or taste.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 25, 2025",
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg?height=100&width=100",
      },
      category: "Meal Ideas",
      readTime: "3 min read",
    },
    {
      id: "sustainable-food-packaging",
      title: "Sustainable Food Packaging: The Future of Delivery",
      excerpt:
        "How FastServe is leading the way in eco-friendly food packaging solutions that reduce waste without compromising food quality.",
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
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getRelatedPosts()
  
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
              src={post.author.avatar || "/placeholder.svg"} 
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
              src={post.image || "/placeholder.svg"} 
              alt={post.title} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Social Sharing */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </button>
              <button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </button>
              <button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors">
                <Copy size={18} />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center text-gray-600 hover:text-[#396C03] transition-colors">
                <Heart size={20} className="mr-1" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-[#396C03] transition-colors">
                <Bookmark size={20} />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link 
                  key={index}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-[#396C03]/5 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <img 
                src={post.author.avatar || "/placeholder.svg"} 
                alt={post.author.name} 
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">About {post.author.name}</h3>
                <p className="text-gray-600 mb-3">{post.author.role}</p>
                <p className="text-gray-700">{post.author.bio}</p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Comments ({post.comments})</h3>
            
            {/* Comment Form */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h4 className="text-lg font-bold mb-4">Leave a comment</h4>
              <form>
                <div className="mb-4">
                  <textarea 
                    placeholder="Write your comment here..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all min-h-[120px]"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#396C03] focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input 
                    type="checkbox" 
                    id="saveInfo" 
                    className="h-4 w-4 text-[#396C03] focus:ring-[#396C03] border-gray-300 rounded"
                  />
                  <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                    Save my name and email for the next time I comment
                  </label>
                </div>
                <button 
                  type="submit"
                  className="bg-[#396C03] hover:bg-[#2A5102] text-white font-medium py-3 px-6 rounded-xl transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
            
            {/* Sample Comments */}
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Sarah Johnson" 
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                      <span className="text-sm text-gray-500">April 6, 2025</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      I've been using Green Chef for about 3 months now and I absolutely love it! The meals are delicious and I feel so much better eating organic ingredients. Definitely recommend trying it if you're looking for a healthy meal delivery option.
                    </p>
                    <div className="flex items-center text-sm">
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                        <Heart size={16} className="inline mr-1" /> 12
                      </button>
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment 2 with reply */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Michael Chen" 
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Michael Chen</h4>
                      <span className="text-sm text-gray-500">April 5, 2025</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Has anyone tried Trifecta Nutrition? I'm considering it for my fitness goals but would love to hear some real experiences before committing.
                    </p>
                    <div className="flex items-center text-sm mb-4">
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                        <Heart size={16} className="inline mr-1" /> 8
                      </button>
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors">
                        Reply
                      </button>
                    </div>
                    
                    {/* Reply */}
                    <div className="ml-8 pt-4 border-t border-gray-100">
                      <div className="flex items-start">
                        <img 
                          src="/placeholder.svg?height=100&width=100" 
                          alt="Jamie Oliver" 
                          className="w-8 h-8 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <div className="flex items-center mb-2">
                            <h5 className="font-bold text-gray-800 mr-2">Jamie Oliver</h5>
                            <span className="text-xs bg-[#396C03]/10 text-[#396C03] px-2 py-0.5 rounded-full">Author</span>
                          </div>
                          <p className="text-gray-700 mb-2">
                            Hi Michael! I've had several clients who use Trifecta with great results. It's particularly good if you're tracking macros for fitness goals. The portion sizes are generous and the quality is consistent.
                          </p>
                          <div className="flex items-center text-sm">
                            <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                              <Heart size={16} className="inline mr-1" /> 5
                            </button>
                            <span className="text-sm text-gray-500">April 5, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comment 3 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start">
                  <img 
                    src="/placeholder.svg?height=100&width=100" 
                    alt="Emily Rodriguez" 
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">Emily Rodriguez</h4>
                      <span className="text-sm text-gray-500">April 5, 2025</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      I've been using Daily Harvest for breakfast and lunch, and it's been a game-changer for my busy schedule. The smoothies are delicious and so convenient. I'd love to see a more detailed review of their newer items like the harvest bowls.
                    </p>
                    <div className="flex items-center text-sm">
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors mr-4">
                        <Heart size={16} className="inline mr-1" /> 15
                      </button>
                      <button className="text-gray-500 hover:text-[#396C03] transition-colors">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="text-[#396C03] hover:text-[#2A5102] font-medium transition-colors">
                  Load More Comments
                </button>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <img 
                      src={post.image || "/placeholder.svg"} 
                      alt={post.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent h-20"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#396C03] px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[#396C03] transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-[#396C03] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-white/80 mb-6">Get the latest food delivery tips and tricks straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 py-3 px-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button 
                type="submit"
                className="bg-[#FF8B00] hover:bg-[#E07A00] text-white font-medium py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A5102] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#396C03" className="w-6 h-6">
                    <path d="M17.5 3A3.5 3.5 0 0 1 21 6.5c0 1.63-1.17 3-2.72 3.28.17.47.28.97.28 1.47 0 2.25-1.7 4.5-5 6.75-3.3-2.25-5-4.5-5-6.75 0-.5.11-1 .28-1.47A3.5 3.5 0 0 1 6.5 3 3.5 3.5 0 0 1 10 6.5c0 .5-.11 1-.28 1.47A3.5 3.5 0 0 1 12 11.2a3.5 3.5 0 0 1 2.28-3.23A3.5 3.5 0 0 1 14 6.5 3.5 3.5 0 0 1 17.5 3M6.5 5A1.5 1.5 0 0 0 5 6.5 1.5 1.5 0 0 0 6.5 8 1.5 1.5 0 0 0 8 6.5 1.5 1.5 0 0 0 6.5 5m11 0A1.5 1.5 0 0 0 16 6.5 1.5 1.5 0 0 0 17.5 8 1.5 1.5 0 0 0 19 6.5 1.5 1.5 0 0 0 17.5 5M12 8.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">FastServe</h3>
              </div>
              <p className="mt-2 text-white/80">Delivering healthy, delicious meals to your doorstep.</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Healthy Eating</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Food Trends</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Recipes</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Nutrition</Link></li>
                <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-white/80">
                <p className="mb-2">123 Food Street, San Francisco, CA 94107</p>
                <p className="mb-2">Email: hello@fastserve.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-white hover:text-[#FF8B00] transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-[#FF8B00] transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-[#FF8B00] transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 FastServe. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}