export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    initials: string;
    color: string;
    role: string;
    bio: string;
  };
  category: string;
  readTime: string;
  content: string;
};

export const categoryToSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export const blogPosts: BlogPost[] = [
  {
    slug: "healthy-food-delivery-options",
    title: "10 Healthy Food Delivery Options You Need to Try",
    excerpt:
      "Nutritious meals that still taste good — and actually show up on time.",
    image: "/blog_healthy.jpg",
    date: "April 5, 2025",
    author: {
      name: "Jamie Oliver",
      initials: "JO",
      color: "bg-emerald-600",
      role: "Food Editor",
      bio: "Chef and writer covering how delivery is changing the way we eat.",
    },
    category: "Healthy Eating",
    readTime: "5 min read",
    content: `
      <p>Finding time to cook well is hard. Delivery used to mean grease and leftovers. That is no longer the default.</p>
      <p>A growing set of kitchens now build menus around vegetables, protein, and reasonable portions — without asking you to give up flavor.</p>
      <h2>What to look for</h2>
      <ul>
        <li><strong>Clear ingredients:</strong> You should know what you are eating before the bag arrives.</li>
        <li><strong>Portions that match the claim:</strong> “Healthy” should not mean a side salad pretending to be dinner.</li>
        <li><strong>Dietary filters that work:</strong> Vegetarian, gluten-free, and high-protein should be real menus, not a single token dish.</li>
      </ul>
      <h2>Kitchens worth ordering from</h2>
      <h3>Green Kitchen</h3>
      <p>Plant-forward bowls and rotating weekly specials. Strong if you want vegetables to be the main event.</p>
      <h3>Fit Feast</h3>
      <p>High-protein plates with macros listed. Useful if you actually track what you eat.</p>
      <h3>Pure Plate</h3>
      <p>Clean cooking, no filler sauces. Paleo and keto options that do not taste like an afterthought.</p>
      <blockquote>
        <p>“I stopped choosing between eating well and getting dinner on the table.”</p>
        <cite>— Emma Johnson, nutrition coach</cite>
      </blockquote>
      <h2>How to order smarter</h2>
      <ol>
        <li>Filter by the diet you actually follow, not the one you wish you followed.</li>
        <li>Read the last three reviews, not the star average.</li>
        <li>Schedule weekday lunches in advance so you are not deciding hungry.</li>
      </ol>
      <p>Healthy delivery is not a miracle. It is a better set of defaults. Use it that way.</p>
    `,
  },
  {
    slug: "revolutionizing-food-delivery",
    title: "How FastServe is Changing Food Delivery",
    excerpt:
      "Shorter routes, fewer cold bags, and restaurants that still own the food.",
    image: "/blog_delivery.jpg",
    date: "April 2, 2025",
    author: {
      name: "Sarah Johnson",
      initials: "SJ",
      color: "bg-[#396C03]",
      role: "Head of Product",
      bio: "Builds the ordering experience at FastServe.",
    },
    category: "Company News",
    readTime: "4 min read",
    content: `
      <p>Most delivery apps optimized for more restaurants on a map. We optimized for food that is still hot when you open the bag.</p>
      <h2>What we changed</h2>
      <p>Dispatch looks at kitchen prep time, not just distance. A closer restaurant that is slammed is slower than one slightly farther that is ready now.</p>
      <p>Riders get a route that matches the ticket, not a puzzle of stacked orders that sits in a bag for twenty minutes.</p>
      <h2>What stays local</h2>
      <p>The restaurant still cooks the food. We do not run dark kitchens under someone else’s name. That keeps quality with the people who actually know the menu.</p>
    `,
  },
  {
    slug: "best-neighborhood-restaurants",
    title: "The Best Restaurants in Your Neighborhood",
    excerpt:
      "How we pick partners — and how to find the ones near you that are actually worth it.",
    image: "/blog_restaurant.jpg",
    date: "March 28, 2025",
    author: {
      name: "Michael Chen",
      initials: "MC",
      color: "bg-[#2A5102]",
      role: "Partnerships",
      bio: "Works with restaurant owners on menus that travel well.",
    },
    category: "Restaurant Spotlight",
    readTime: "6 min read",
    content: `
      <p>A restaurant can be excellent in person and average in a box. Packaging, steam, and time on the road all change the plate.</p>
      <h2>What we look for</h2>
      <ul>
        <li>Dishes that hold for 20 minutes without collapsing</li>
        <li>Kitchens that can fire delivery tickets without slowing the dining room</li>
        <li>Packaging that does not soak through</li>
      </ul>
      <p>Open the app, set your address, and sort by rating for the last 30 days — not all-time. Neighborhoods change. Menus do too.</p>
    `,
  },
  {
    slug: "quick-meals-busy-professionals",
    title: "Quick Meals for Busy Weeknights",
    excerpt:
      "When you get home at 8pm, you need food that is already decided.",
    image: "/blog_quick_meals.jpg",
    date: "March 25, 2025",
    author: {
      name: "Emily Rodriguez",
      initials: "ER",
      color: "bg-[#E07A00]",
      role: "Writer",
      bio: "Writes about weekday cooking, or the lack of it.",
    },
    category: "Meal Ideas",
    readTime: "3 min read",
    content: `
      <p>The weeknight problem is not hunger. It is decision fatigue. Save three restaurants, save two dishes each, and stop browsing.</p>
      <h2>A simple rotation</h2>
      <ul>
        <li>Monday: rice bowl, extra vegetables</li>
        <li>Wednesday: grilled protein and a salad that is actually a meal</li>
        <li>Friday: the thing you actually want</li>
      </ul>
      <p>Schedule the first two. Leave Friday open. That is enough structure for most weeks.</p>
    `,
  },
  {
    slug: "behind-the-scenes-delivery",
    title: "Behind the Scenes: How Your Food Gets Delivered",
    excerpt:
      "From ticket to door — the ten minutes you never see.",
    image: "/blog_delivery.jpg",
    date: "March 20, 2025",
    author: {
      name: "David Thompson",
      initials: "DT",
      color: "bg-[#396C03]",
      role: "Operations",
      bio: "Runs rider ops and kitchen SLAs.",
    },
    category: "Behind the Scenes",
    readTime: "7 min read",
    content: `
      <p>Your order hits the kitchen the moment you pay. A rider is assigned when the food is close to ready, not when you tap checkout.</p>
      <h2>The handoff</h2>
      <p>If a rider arrives too early, food waits in a bag. Too late, and it waits on the pass. We aim for a two-minute window. That is the whole job.</p>
      <p>After pickup, the route is locked. No extra stop unless you are on the way and the extra wait is under four minutes.</p>
    `,
  },
  {
    slug: "plant-based-food-delivery",
    title: "Plant-Based Options That Are Actually Good",
    excerpt:
      "Vegan delivery has moved past the obligatory grain bowl.",
    image: "/blog_plant_based.jpg",
    date: "March 15, 2025",
    author: {
      name: "Lisa Greenfield",
      initials: "LG",
      color: "bg-emerald-700",
      role: "Food Writer",
      bio: "Covers plant-based cooking and restaurant menus.",
    },
    category: "Food Trends",
    readTime: "5 min read",
    content: `
      <p>The best plant-based delivery right now is not trying to imitate a burger. It is cooking vegetables like they matter.</p>
      <p>Look for kitchens that char, pickle, and season — not ones that hide everything under cashew cream.</p>
      <h2>Filter tip</h2>
      <p>Use the vegetarian filter, then read the dish names. If every plate is “bowl,” keep scrolling.</p>
    `,
  },
  {
    slug: "food-photography-tips",
    title: "How to Photograph the Food You Order",
    excerpt:
      "You do not need a camera. You need a window and ten extra seconds.",
    image: "/blog_healthy.jpg",
    date: "March 10, 2025",
    author: {
      name: "Carlos Mendez",
      initials: "CM",
      color: "bg-[#2A5102]",
      role: "Photographer",
      bio: "Shoots restaurants and delivery packaging for FastServe.",
    },
    category: "Tips & Tricks",
    readTime: "4 min read",
    content: `
      <p>Turn off the overhead light. Stand next to a window. Shoot from a 45-degree angle, not straight down unless the plate is flat and graphic.</p>
      <p>Wipe the rim. Move the sauce packet out of the frame. That is most of the work.</p>
    `,
  },
  {
    slug: "international-cuisine-delivery",
    title: "Eat Around the World Without Leaving Home",
    excerpt:
      "The dishes that travel — and the ones you should still eat in the restaurant.",
    image: "/blog_restaurant.jpg",
    date: "March 5, 2025",
    author: {
      name: "Priya Patel",
      initials: "PP",
      color: "bg-[#E07A00]",
      role: "Writer",
      bio: "Writes about regional cooking and what survives a delivery bag.",
    },
    category: "Food Culture",
    readTime: "6 min read",
    content: `
      <p>Stews, grilled meats, and dumplings travel. Soufflés, tempura, and anything with a crackling crust usually do not.</p>
      <p>If you are ordering a cuisine you love, pick the braise. Save the fry for a table.</p>
    `,
  },
  {
    slug: "sustainable-food-packaging",
    title: "Packaging That Does Not Become Instant Trash",
    excerpt:
      "What we switched, what still leaks, and what restaurants had to change.",
    image: "/blog_quick_meals.jpg",
    date: "March 1, 2025",
    author: {
      name: "Alex Green",
      initials: "AG",
      color: "bg-emerald-800",
      role: "Sustainability",
      bio: "Works with partners on packaging that actually composts.",
    },
    category: "Sustainability",
    readTime: "5 min read",
    content: `
      <p>Fiber bowls fail when soup sits in them for thirty minutes. We learned that the expensive way.</p>
      <p>The current standard is a lined fiber box for dry food, a proper container for anything wet, and no extra bag if one box will do.</p>
      <p>Ask your city how to compost the liner. “Compostable” on the lid is not the same as accepted at the curb.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const current = getPostBySlug(slug);
  const rest = blogPosts.filter((post) => post.slug !== slug);
  const sameCategory = rest.filter((post) => post.category === current?.category);
  return [...sameCategory, ...rest.filter((p) => p.category !== current?.category)].slice(0, limit);
};

export const blogCategories = [
  "All Posts",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
