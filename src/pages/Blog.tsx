

export default function Blog() {
  // Blog data from your content
  const blogs = [
    {
      id: 1,
      title: "Unlocking AI Innovation with IBM watsonx: A Comprehensive Guide",
      category: "Uncategorized",
      date: "February 28, 2025",
      image: "/ibm.webp",
      excerpt:
        "IBM's watsonx is a cutting-edge AI and data platform designed to empower businesses with advanced AI capabilities.",
      author: "admin",
    },
    {
      id: 2,
      title: "Migrating IBM FileNet P8 to Hyland OnBase: A Comprehensive Guide",
      category: "Uncategorized",
      date: "February 12, 2025",
      image: "/Untitled-11-copy.png",
      excerpt:
        "Organizations often need to migrate from IBM FileNet P8 to Hyland OnBase due to cost efficiency, enhanced functionalities, better...",
      author: "admin",
    },
    {
      id: 3,
      title: "Unlocking Business Potential: How ICC for SAP Can Transform Your Operations",
      category: "ICC",
      date: "December 12, 2024",
      image: "/icc.jpeg",
      excerpt: "How ICC for SAP Can Transform Your Operations",
      author: "admin",
    },
    {
      id: 4,
      title: "Hyland OnBase",
      category: "Hyland",
      date: "November 26, 2024",
      image: "/Hyland-1.png",
      excerpt:
        "Hyland OnBase is a powerful enterprise content management system that streamlines processes, improves efficiency, and enhances security.",
      author: "admin",
    },
    {
      id: 5,
      title: "Hyland Nuxeo",
      category: "Hyland",
      date: "November 7, 2024",
      image: "/Hyland-1.png",
      excerpt:
        "In this comprehensive guide, we'll dive deep into the world of Hyland Nuxeo, exploring everything from its core functionalities to real-world applications.",
      author: "admin",
    },
    {
      id: 6,
      title: "CMOD To FileNet P8 Migration",
      category: "FileNet P8",
      date: "September 26, 2024",
      image: "/CMOD-Filenet-p8.png",
      excerpt:
        "Embracing the transition from CMOD to FileNet P8 isn't just about changing platforms—it's about revolutionizing the way you manage and interact with your documents.",
      author: "admin",
    },
    {
      id: 7,
      title: "FileNet Content Manager",
      category: "FileNet P8",
      date: "August 29, 2024",
      image: "/Screenshot-2024-08-28-221356.png",
      excerpt:
        "Are you drowning in a sea of digital documents? In today's fast-paced business world, managing vast amounts of content efficiently is not just a luxury—it's a necessity.",
      author: "admin",
    },
    {
      id: 8,
      title: "DATACAP: The Battle That Will Change Your Business Forever",
      category: "Datacap",
      date: "July 26, 2024",
      image: "/DATACAP.jpg",
      excerpt: "DATACAP's continued use in 2024 depends on its maintenance and compatibility with current systems.",
      author: "admin",
    },
    {
      id: 9,
      title: "Opentext Documentum installation and configuration",
      category: "Opentext",
      date: "May 23, 2024",
      image: "/Your-paragraph-text.png",
      excerpt:
        "The OpenText Documentum installation and configuration document provides step-by-step instructions for setting up and configuring the Documentum platform.",
      author: "admin",
    },
    {
      id: 10,
      title: "OpenText Documentum integration",
      category: "Datacap",
      date: "May 20, 2024",
      image: "/DATACAP.jpg",
      excerpt:
        "OpenText Documentum integration is a strategic approach that allows organizations to streamline content management, improve collaboration, and enhance productivity.",
      author: "admin",
    },
    {
      id: 11,
      title: "OpenText Upgrade",
      category: "Datacap",
      date: "May 17, 2024",
      image: "/DATACAP.jpg",
      excerpt:
        "Regular upgrades allow you to leverage cutting-edge content management capabilities, streamline critical business processes, and provide your users with a more robust, user-friendly experience.",
      author: "admin",
    },
    {
      id: 12,
      title: "Hyland OnBase",
      category: "Hyland",
      date: "May 14, 2024",
      image: "/Hyland-1.png",
      excerpt:
        "Hyland OnBase offers a comprehensive suite of tools and functionalities, including document management, workflow automation, records management, and seamless integrations with other systems.",
      author: "admin",
    },
  ]

  // Group blogs by category
  const categories = [...new Set(blogs.map((blog) => blog.category))]

  return (
    <div className="min-h-screen bg-gray-50 ">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 bg-gray-300 relative">
                  <img
                    src={blogs[0].image || "/placeholder.svg?height=800&width=600"}
                    alt={blogs[0].title}
                    className="object-cover"
                    
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {blogs[0].category}
                  </span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{blogs[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>By {blogs[0].author}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{blogs[0].title}</h3>
                <p className="text-gray-600 mb-4">{blogs[0].excerpt}</p>
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 mb-8">
          <div className="w-full lg:w-2/3 px-2">
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

            <div className="space-y-6">
              {blogs.slice(1, 4).map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-300 relative">
                      <img
                        src={blog.image || "/placeholder.svg?height=400&width=300"}
                        alt={blog.title}
                        className="object-cover"
                        
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-4">
                    <div className="flex items-center text-xs text-gray-600 mb-1">
                      <span>{blog.date}</span>
                      <span className="mx-1">•</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                    <button className="text-blue-800 hover:text-blue-600 font-medium text-sm flex items-center">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-2 mt-6 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <h3 className="text-lg font-bold mb-3 pb-2 border-b">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category} className="flex items-center justify-between">
                    <span className="text-gray-700 hover:text-blue-800 cursor-pointer">{category}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {blogs.filter((blog) => blog.category === category).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold mb-3 pb-2 border-b">Subscribe</h3>
              <p className="text-gray-600 text-sm mb-3">Stay updated with our latest articles and news.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button className="w-full bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">All Articles</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(4).map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-gray-300 relative">
                <img
                  src={blog.image || "/placeholder.svg?height=400&width=300"}
                  alt={blog.title}
                  className="object-cover"
                  
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                  {blog.category}
                </span>
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center text-xs text-gray-600 mb-1">
                  <span>{blog.date}</span>
                  <span className="mx-1">•</span>
                  <span>By {blog.author}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <button className="text-blue-800 hover:text-blue-600 font-medium text-sm flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

