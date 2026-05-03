export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Restaurant Owners
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Know Which Menu Items<br />
          <span className="text-[#58a6ff]">Actually Make You Money</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track ingredient costs, portion sizes, and labor per dish. Get real-time profit margins so you can price smarter and cut what's draining your margins.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="text-xs text-[#6e7681] mt-4">No credit card required to start. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <div className="text-2xl font-bold text-white">34%</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg food cost reduction</div>
          </div>
          <div className="border-x border-[#21262d]">
            <div className="text-2xl font-bold text-white">2 min</div>
            <div className="text-xs text-[#8b949e] mt-1">To analyze any dish</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-[#8b949e] mt-1">Restaurants using it</div>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-4">
        {[
          { title: 'Ingredient Cost Tracking', desc: 'Log every ingredient with unit costs and portion weights per recipe.' },
          { title: 'Labor Cost Allocation', desc: 'Assign prep and cook time to dishes and see true cost per plate.' },
          { title: 'Profit Margin Dashboard', desc: 'Visual breakdown of margin, food cost %, and contribution per item.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
            <div className="text-[#58a6ff] font-semibold mb-2 text-sm">{f.title}</div>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per location</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited menu items & recipes',
              'Ingredient & labor cost tracking',
              'Real-time profit margin reports',
              'Food cost % alerts',
              'CSV export',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I enter my ingredient costs?',
              a: 'You add ingredients once with their unit price and unit (kg, liter, each). Then build recipes by selecting ingredients and entering the portion used per dish.',
            },
            {
              q: 'Does it account for waste and over-portioning?',
              a: 'Yes. You can set a waste percentage per ingredient so your cost calculations reflect real-world usage, not just theoretical portions.',
            },
            {
              q: 'Can I use it for multiple restaurant locations?',
              a: 'Each subscription covers one location. You can subscribe multiple times for additional locations, each with its own ingredient list and menu.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{item.q}</div>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Restaurant Menu Profit Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
