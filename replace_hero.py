import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_hero = """<!-- 🌟 PRO-DEVELOPER HERO SECTION 🌟 -->
    <section id="home" class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50 pt-24 pb-16">
      <!-- Minimalist Background Mesh -->
      <div class="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24 mt-12">
          
          <!-- LEFT COLUMN: High-Signal Copy -->
          <div class="space-y-8 max-w-2xl">
            <!-- Sleek Pill -->
            <a href="#courses" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 group">
              <span class="flex h-2 w-2 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Announcing AI Mentorship 2.0
              <i class="fas fa-arrow-right text-xs text-slate-400 group-hover:text-blue-500 transition-colors group-hover:translate-x-0.5 transform"></i>
            </a>

            <!-- Precision Headline -->
            <div class="space-y-4">
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Build Production-Ready <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Applications.</span>
              </h1>
              <p class="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Master massive language models, applied computer vision, and systems engineering. Go from syntax to deployed intelligent systems in 12 weeks.
              </p>
            </div>

            <!-- Developer CTAs -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="assets/course/login_signup.html" class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-xl shadow-slate-900/20 transition-all active:scale-95">
                Start Building Free
                <kbd class="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2 border border-slate-700">⏎</kbd>
              </a>
              <a href="#courses" class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-all active:scale-95 shadow-sm">
                View Curriculum
              </a>
            </div>

            <!-- Minimalist Trust Proof -->
            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/60">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full border-2 border-slate-50 bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">AK</div>
                <div class="w-8 h-8 rounded-full border-2 border-slate-50 bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">SJ</div>
                <div class="w-8 h-8 rounded-full border-2 border-slate-50 bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">MG</div>
              </div>
              <div class="text-sm text-slate-600">
                Trusted by <span class="font-semibold text-slate-900">35,000+</span> engineers worldwide
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Interactive IDE Window -->
          <div class="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto perspective-1000">
            <!-- IDE Container -->
            <div class="relative bg-[#0d1117] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden transform transition-transform hover:-translate-y-2 duration-500">
              
              <!-- IDE Header -->
              <div class="bg-[#161b22] px-4 py-3 flex items-center gap-4 border-b border-slate-800">
                <div class="flex items-center gap-1.5">
                  <div class="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80 border border-green-600/50"></div>
                </div>
                <div class="flex-1 text-center">
                  <span class="text-slate-400 text-xs font-mono bg-[#0d1117] px-3 py-1 rounded-md border border-slate-700/50">train_transformer.py</span>
                </div>
                <div class="w-10"></div> <!-- spacer -->
              </div>

              <!-- IDE Body -->
              <div class="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto text-slate-300">
<pre><code><span class="text-pink-400">import</span> torch
<span class="text-pink-400">import</span> torch.nn <span class="text-pink-400">as</span> nn

<span class="text-slate-500"># 1. Initialize billion-parameter model architecture</span>
<span class="text-blue-400">model</span> = GPTArchitecture(
    vocab_size=<span class="text-purple-300">50257</span>,
    hidden_dim=<span class="text-purple-300">4096</span>,
    num_heads=<span class="text-purple-300">32</span>,
    layers=<span class="text-purple-300">96</span>
).<span class="text-yellow-200">cuda</span>()

<span class="text-slate-500"># 2. Compile model optimally (PyTorch 2.0+)</span>
<span class="text-blue-400">compiled_model</span> = torch.<span class="text-yellow-200">compile</span>(model)

<span class="text-slate-500"># 3. Distributed Sharded Data Parallel</span>
<span class="text-pink-400">with</span> FSDP(compiled_model) <span class="text-pink-400">as</span> ddp_model:
    optimizer.<span class="text-yellow-200">zero_grad</span>()
    loss = ddp_model(batch).<span class="text-yellow-200">loss</span>
    loss.<span class="text-yellow-200">backward</span>()
    optimizer.<span class="text-yellow-200">step</span>()

    <span class="text-green-400">print</span>(<span class="text-orange-300">f"Step loss: {loss.item():.4f}"</span>)
<span class="text-slate-400 opacity-50 animate-pulse">|</span></code></pre>
              </div>
            </div>
            
            <!-- Floating Data Badge -->
            <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow hidden sm:flex">
              <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <i class="fas fa-check"></i>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Real-time Metrics</span>
                <span class="text-sm font-bold text-slate-900">Convergence Reached</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM STATS BANNER (Sleek Horizontal) -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 mt-12 border-y border-slate-200/80 bg-white/50 backdrop-blur-sm rounded-2xl">
          <div class="flex flex-col gap-1 px-6 border-l-2 border-blue-500">
            <span class="text-3xl font-black text-slate-900">42+</span>
            <span class="text-sm font-bold text-slate-500 uppercase tracking-wide">Expert Courses</span>
          </div>
          <div class="flex flex-col gap-1 px-6 lg:border-l border-slate-200">
            <span class="text-3xl font-black text-slate-900">98.4%</span>
            <span class="text-sm font-bold text-slate-500 uppercase tracking-wide">Placement Rate</span>
          </div>
          <div class="flex flex-col gap-1 px-6 border-l-2 lg:border-l border-purple-500 lg:border-slate-200">
            <span class="text-3xl font-black text-slate-900">450+</span>
            <span class="text-sm font-bold text-slate-500 uppercase tracking-wide">Hiring Partners</span>
          </div>
          <div class="flex flex-col gap-1 px-6 lg:border-l border-slate-200">
            <span class="text-3xl font-black text-slate-900">₹12L+</span>
            <span class="text-sm font-bold text-slate-500 uppercase tracking-wide">Avg Base Comp</span>
          </div>
        </div>
      </div>
    </section>"""

# Using regex to find the entire old hero section and replace it.
pattern = re.compile(r'<!-- 🌟 ULTIMATE PREMIUM HERO SECTION - REVOLUTIONARY DESIGN 🌟 -->.*?</section>', re.DOTALL)
new_content = pattern.sub(new_hero, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Hero section replaced successfully!")
