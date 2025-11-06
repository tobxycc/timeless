<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  // Scroll Animation
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target); // nur einmal animieren
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.section').forEach(section => observer.observe(section));
  });
</script>

<Navbar />

<main class="overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth">
<section 
  class="relative h-screen w-full bg-cover bg-center snap-start"
  style="background-image: url('src/lib/assets/1.jpg');"
>
  <!-- Overlay für Gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/100 top-[70%]"></div>

  <!-- Inhalt -->
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg     font-timelessFont">
      WE. ARE. TIMELESS.
    </h1>
    <p class="text-xl md:text-2xl text-white/80 mb-8">classics. with style</p>
    <a
      href="#shop"
      class="bg-black/30 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition"
    >
      Zum Shop
    </a>
  </div>
</section>



  <!-- Sections -->
<div class="bg-linear-to-l from-[#575856] via-[#8D989F] to-[#DDE0EE] w-full">
  <section id="herstellung" class="h-screen max-w-6xl mx-auto py-20 px-4 space-y-32 text-white snap-start">
    <!-- Sections hier -->
    
        <!-- Section 1: Bild links -->
        <div class="flex flex-col md:flex-row items-center gap-8 opacity-0 transform translate-y-10 transition-all duration-700 ease-out section ">
          <img src="src/lib/assets/3.png" alt="Sticker Produktion" class="h-1/2 rounded-xl shadow-lg" />
          <div class="md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/30 rounded-sm shadow-md z-50 p-[1.5rem] rounded-xl">
            <h2 class="text-3xl font-bold mb-4">Unsere Sticker Herstellung</h2>
            <p class="text-gray-700 mb-4">Von der Idee bis zum fertigen Sticker – alles in Handarbeit und hoher Qualität.</p>
            <button class="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Mehr erfahren
            </button>
          </div>
        </div>
  </section>
  </div>
<div class="bg-linear-to-l from-[#9B9B9B] via-[#6C6C6C] to-[#3A3A3A] w-full">
  <section id="design" class="max-w-6xl mx-auto h-screen py-20 px-4 space-y-32 text-white snap-start">
        <!-- Section 2: Bild rechts -->
        <div class="flex flex-col md:flex-row-reverse items-center gap-8 opacity-0 transform translate-y-10 transition-all duration-700 ease-out section">
          <img src="src/lib/assets/2.png" alt="Sticker Design" class="h-1/2 rounded-xl shadow-lg" />
          <div class="md:w-1/2 bg-white/5 backdrop-blur-sm border border-white/30 rounded-sm shadow-md z-50 p-[1.5rem] rounded-xl">
            <h2 class="text-3xl font-bold mb-4">Design & Kreativität</h2>
            <p class="text-gray-700 mb-4">Unsere Sticker werden liebevoll designed, um deinem Auto Charakter zu verleihen.</p>
            <button class="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Mehr erfahren
            </button>
          </div>
        </div>
  </section>
  </div>
<div class="bg-linear-to-r from-[#A3ADC1] via-[#829584] to-[#665C4A] w-full">
  <section id="qualität" class="h-screen max-w-6xl mx-auto py-20 px-4 space-y-32 text-white snap-start">
        <!-- Section 3: Bild links -->
        <div class="flex flex-col md:flex-row items-center gap-8 opacity-0 transform translate-y-10 transition-all duration-700 ease-out section">
          <img src="src/lib/assets/4.png" alt="Sticker Qualität" class="h-1/2 rounded-xl shadow-lg" />
          <div class="md:w-1/2 bg-white/1 backdrop-blur-sm border border-white/30 rounded-sm shadow-md z-50 p-[1.5rem] rounded-xl">
            <h2 class="text-3xl font-bold mb-4">Qualität & Haltbarkeit</h2>
            <p class="text-gray-700 mb-4">Unsere Sticker sind wetterfest, langlebig und perfekt für jedes Auto.</p>
            <button class="bg-accent text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Mehr erfahren
            </button>
          </div>
        </div>
  </section>
</div>
</main>
