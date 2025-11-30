 import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


function App() {
  

  return (
    <>
        <main className="min-h-screen w-full bg-white text-gray-900">
             <Hero />
             <Features />
             <Testimonials />
             <Pricing />
             <Footer />
           </main>
    </>
  )
}

export default App
