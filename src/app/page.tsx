import { ShoppingCart, Search, User, ChevronDown, Star, Menu } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-ui-background-secondary">
      {/* Announcement Bar */}
      <div className="bg-brand-primary text-white py-2 text-center text-sm font-medium">
        Southern Tradition, Perfectly Boiled. Free Shipping on Orders Over $50!
      </div>

      {/* Header */}
      <header className="bg-white border-b border-ui-border-light sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Logo */}
          <div className="py-6 text-center">
            <Image
              src="/DG_Logo_lg_600x.webp"
              alt="Dixie Grace's Boiled Peanuts"
              width={300}
              height={80}
              className="mx-auto h-20 w-auto"
              priority
            />
          </div>

          {/* Navigation */}
          <nav className="border-t border-ui-border-light">
            <div className="flex items-center justify-between py-4">
              <div className="hidden lg:flex items-center gap-8 flex-1">
                <NavLink>HOME</NavLink>
                <NavLink dropdown>PRODUCTS</NavLink>
                <NavLink>FAQs</NavLink>
                <NavLink>AFFILIATE</NavLink>
                <NavLink>CONTACT</NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition">
                <Menu className="w-6 h-6 text-brand-primary" />
              </button>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <User className="w-5 h-5 text-brand-primary" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Search className="w-5 h-5 text-brand-primary" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <ShoppingCart className="w-5 h-5 text-brand-primary" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Full Width Background */}
      <section className="relative w-full h-[850px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-top bg-no-repeat"
          style={{
            backgroundImage: 'url(/dixiebackground.webp)',
            backgroundSize: '100% auto'
          }}
        >
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl">
            {/* Content removed */}
          </div>
        </div>
      </section>

      {/* Holiday Collection Title */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-serif text-4xl md:text-5xl text-center text-brand-primary mb-12">
          The 2025 Holiday Collection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ProductCard
            image="🎁"
            title="Wild Cacao Ensemble"
            price="$110"
            rating={0}
            reviews="No reviews"
          />
          <ProductCard
            image="☕"
            title="The Grand Flight"
            price="$80"
            rating={0}
            reviews="No reviews"
          />
          <ProductCard
            image="🎄"
            title="Vosges Holiday Hatbox"
            price="$145"
            rating={4.9}
            reviews="70 reviews"
          />
          <ProductCard
            image="🏰"
            title="2025 Haut-Chocolat Advent Calendar"
            price="$375"
            rating={4.8}
            reviews="734 reviews"
          />
        </div>

        {/* Shop All Button */}
        <div className="text-center">
          <button className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-12 py-3 text-sm font-medium tracking-wider transition-colors">
            SHOP ALL
          </button>
        </div>
      </section>

      {/* Mellon Collie Section */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-8 md:p-16">
            <div className="max-w-md">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-6">
                The Mellon Collie Sessions: A Curious Contemplation of Music & Chocolate
              </h2>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-red-700 via-teal-600 to-purple-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/DG_Original_Rendering_Transparent.webp"
                alt="Dixie Grace's Artisanal Boiled Peanuts"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Le Jardin de Cacao Section */}
      <section className="bg-ui-background-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-blue-900 flex items-center justify-center p-8">
              <Image
                src="/DixieGrace_sStarterKit.webp"
                alt="Dixie Grace Starter Kit"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-8 md:p-16 bg-white">
            <div className="max-w-md text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-6">
                Le Jardin de Cacao
              </h2>
              <p className="text-brand-primary mb-8 text-lg">
                Sells out before the first snowflake hits the ground! Reserve your Haut-Chocolat Advent Calendar before they're gone.
              </p>
              <button className="bg-brand-primary hover:bg-brand-primaryHover text-white px-12 py-3 text-sm font-medium tracking-wider transition-colors">
                OPEN THE DOORS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 tracking-wider text-sm">SHOP</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">All Chocolates</a></li>
                <li><a href="#" className="hover:underline">Collections</a></li>
                <li><a href="#" className="hover:underline">Gift Sets</a></li>
                <li><a href="#" className="hover:underline">Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 tracking-wider text-sm">EXPERIENCE</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Our Story</a></li>
                <li><a href="#" className="hover:underline">Locations</a></li>
                <li><a href="#" className="hover:underline">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 tracking-wider text-sm">HELP</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Shipping</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 tracking-wider text-sm">CONNECT</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-400 pt-8 text-center text-sm">
            <Image
              src="/DG_Logo_lg_600x.webp"
              alt="Dixie Grace's Boiled Peanuts"
              width={200}
              height={60}
              className="mx-auto h-16 w-auto mb-4"
            />
            <p className="text-xs">© 2025 Dixie Grace's Boiled Peanuts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ children, dropdown = false }: { children: React.ReactNode, dropdown?: boolean }) {
  return (
    <button className="flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-primaryHover tracking-wide transition">
      {children}
      {dropdown && <ChevronDown className="w-4 h-4" />}
    </button>
  )
}

function ProductCard({ image, title, price, rating, reviews }: {
  image: string
  title: string
  price: string
  rating: number
  reviews: string
}) {
  return (
    <div className="border-none shadow-none bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-6xl">
        {image}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-brand-primary mb-2 text-sm h-10">{title}</h3>
        <div className="flex items-center gap-1 mb-2">
          {rating > 0 ? (
            <>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
              ))}
              <span className="text-xs text-gray-600 ml-1">{reviews}</span>
            </>
          ) : (
            <span className="text-xs text-gray-500">{reviews}</span>
          )}
        </div>
        <p className="text-brand-primary font-semibold mb-4">{price}</p>
        <button className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white text-xs tracking-wider py-3 transition-colors">
          ADD TO BAG
        </button>
      </div>
    </div>
  )
}
