import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  Smartphone, 
  Users, 
  Calendar,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#B8B8BE] font-sans antialiased selection:bg-[#D4AF37]/25 selection:text-[#F5F5F7] py-8 sm:py-14 md:py-20 px-3 sm:px-6 relative overflow-x-hidden">
      {/* Subtle Luxury Ambient Charcoal & Gold Lighting */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(45, 45, 52, 0.4) 0%, rgba(18, 18, 22, 0.2) 45%, transparent 75%)'
        }}
      />
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none z-0 opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%)'
        }}
      />

      {/* Main Container: macOS Editorial Window Frame */}
      <main className="relative z-10 max-w-[760px] mx-auto bg-[#111113] border border-[#262629] rounded-xl sm:rounded-2xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden transition-all duration-300">
        
        {/* Window Top Bar (macOS Style Header) */}
        <header className="sticky top-0 z-40 bg-[#161618]/95 backdrop-blur-md border-b border-[#242428] px-4 sm:px-5 py-3 flex items-center justify-between select-none">
          {/* macOS Window Controls */}
          <div className="flex items-center space-x-2 w-20">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-[0_0_6px_rgba(255,95,86,0.2)] block transition-transform hover:scale-110" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-[0_0_6px_rgba(255,189,46,0.2)] block transition-transform hover:scale-110" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-[0_0_6px_rgba(39,201,63,0.2)] block transition-transform hover:scale-110" />
          </div>

          {/* Window Title */}
          <div className="text-[11px] sm:text-xs font-mono font-medium text-[#8E8E96] tracking-tight truncate px-2 text-center flex-1">
            The Card Company — Product & Engineering Research Note
          </div>

          {/* Window Right Action / Read Status */}
          <div className="flex items-center justify-end space-x-2 w-20">
            <button
              onClick={() => copyToClipboard(window.location.href, 'link')}
              title="Copy memo link"
              className="text-[#7A7A82] hover:text-[#D4AF37] text-[11px] font-mono flex items-center gap-1 transition-colors px-1.5 py-0.5 rounded border border-transparent hover:border-[#2D2D32]"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3 h-3 text-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[10px] hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="text-[10px] hidden sm:inline">Share</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Razor-thin 24K Gold Reading Progress Bar */}
        <div className="sticky top-[45px] sm:top-[47px] z-30 w-full h-[2px] bg-[#1a1a1e]">
          <div 
            className="h-full bg-gradient-to-r from-[#A38027] via-[#D4AF37] to-[#F5F5F7] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(212,175,55,0.7)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Document Content */}
        <article className="px-5 sm:px-9 md:px-12 py-8 sm:py-12 md:py-14 space-y-12 sm:space-y-16">
          
          {/* ========================================================================= */}
          {/* HEADER BLOCK */}
          {/* ========================================================================= */}
          <section className="space-y-6 border-b border-[#222226] pb-12">
            {/* Small Silver Kicker */}
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs font-mono tracking-[0.14em] text-[#9E9EA6] uppercase bg-[#18181C] border border-[#26262B] px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>Reviews research + strategy + hands-on use of the app</span>
            </div>

            {/* Document Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-serif tracking-tight leading-[1.18] text-[#F5F5F7]">
                The Card Company
              </h1>
              <p className="text-2xl sm:text-3xl md:text-[34px] font-serif tracking-tight leading-[1.22] text-[#D8D8DF]">
                A Product & Engineering <span className="italic font-normal text-[#D4AF37] font-serif">Research Note</span>
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#9E9EA6] font-light leading-relaxed max-w-2xl">
              An independent look at the product, its customers and opportunities for improvement
            </p>

            {/* Author / Metadata Pill */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-[13px] text-[#86868E] font-mono pt-1">
              <span className="text-[#E0E0E6] font-medium">Prepared by Hemant Singh</span>
              <span className="text-[#3A3A40]">·</span>
              <span>November 2026</span>
              <span className="text-[#3A3A40]">·</span>
              <button 
                onClick={() => copyToClipboard('hemantsingh.dev@gmail.com', 'email')}
                className="hover:text-[#D4AF37] transition-colors underline decoration-[#3A3A40] underline-offset-4 flex items-center gap-1 group"
              >
                <span>[Your Email / LinkedIn]</span>
                {copiedEmail ? <Check className="w-3 h-3 text-[#D4AF37]" /> : <Copy className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />}
              </button>
            </div>

            {/* Hook Paragraph */}
            <p className="text-base sm:text-[17px] leading-[1.75] text-[#C4C4CC] font-normal pt-2">
              What I've seen about Indian users, and how I'd work on getting The Card Company to more of them.
            </p>

            {/* Methodology Callout Box */}
            <div className="bg-[#16161A] border border-[#2A2A2F] border-l-[3px] border-l-[#D4AF37] rounded-r-xl p-5 sm:p-6 text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE] shadow-card-subtle">
              <span className="text-[#F5F5F7] font-medium block mb-1.5 font-mono text-xs tracking-wider uppercase">
                Methodology & Verification
              </span>
              <p>
                <strong className="text-[#EDEDF2] font-semibold">How this note was made:</strong> I used the TCC app myself, read the published terms, and went through public Google Play reviews (July–November 2026). I have no access to TCC's internal data, so anything I haven't verified is marked as a hypothesis, not a fact.
              </p>
            </div>
          </section>


          {/* ========================================================================= */}
          {/* SECTION 01 — CONTEXT */}
          {/* ========================================================================= */}
          <section className="space-y-5">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              01 — Context
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              How TCC is used in India right now
            </h2>

            {/* Observation italic note */}
            <p className="text-sm font-mono text-[#86868E] italic">
              This is what I've observed, plus what I could confirm from TCC's own terms.
            </p>

            {/* Body copy */}
            <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              <p>
                TCC gives Indian users a prepaid wallet, a RuPay card and UPI, and pays back 1–3% of every spend in real 24K gold. The metal card (₹5,999/year) adds lounge and hotel perks that usually sit behind premium credit cards.
              </p>
              <p>
                The person using TCC today is probably someone who already follows fintech: they know what a lounge pass is, they compare reward rates, and they are comfortable paying a fee to unlock perks. (Hypothesis. TCC's own data on who joins would confirm it.) That is a small slice of India.
              </p>
              <p>
                The bigger India is a college student with a UPI app but no credit card. A first-job fresher who can't get a premium card yet. A teenager whose parents send pocket money. These people already spend every day. Right now, I'm not sure TCC is easy for them to start with.
              </p>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 02 — FIELD RESEARCH */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              02 — Field Research
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              What I found when I used the app and read what customers say
            </h2>

            {/* Context narrative */}
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              As part of my research I signed up, went through onboarding, read TCC's published terms, and went through public Google Play reviews (July–November 2026). I grouped the complaints into five themes: payments and refunds, UPI and QR, support, cards, and app stability. I haven't measured how common each theme is, and I have no access to TCC's internal data, so the reviews below are individual experiences, not confirmed failure rates. The only thing I verified myself is my own onboarding.
            </p>

            {/* Key Findings / Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Stat Block 1 */}
              <div className="group bg-[#151518] hover:bg-[#18181D] border border-[#27272B] hover:border-[#38383F] p-5 sm:p-6 rounded-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />
                <div className="space-y-3">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E96]">
                    KYC Friction Point
                  </div>
                  <div className="text-lg sm:text-xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    Aadhaar + PAN + selfie + income
                  </div>
                  <p className="text-sm leading-relaxed text-[#A4A4AE] pt-1">
                    This is what my own onboarding asked for, along with occupation and address. TCC's published Min-KYC terms describe a lighter route: an OTP-verified mobile number, one ID number and a live selfie. I don't know whether other users are routed into different KYC journeys. A few positive reviews mention opening a wallet with just Aadhaar and no PAN, so the lighter route may exist but be hard to find. That is worth investigating, not assuming.
                  </p>
                </div>
              </div>

              {/* Stat Block 2 */}
              <div className="group bg-[#151518] hover:bg-[#18181D] border border-[#27272B] hover:border-[#38383F] p-5 sm:p-6 rounded-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />
                <div className="space-y-3">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E96]">
                    Redemption Hurdle
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    ₹10,000
                  </div>
                  <p className="text-sm leading-relaxed text-[#A4A4AE] pt-1">
                    At 1% on Wallet UPI, a new user needs about ₹10,000 of eligible spending to reach 10,000 Gold Coins (₹100), the redemption minimum I found.
                  </p>
                </div>
              </div>

              {/* Stat Block 3 */}
              <div className="group bg-[#151518] hover:bg-[#18181D] border border-[#27272B] hover:border-[#38383F] p-5 sm:p-6 rounded-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />
                <div className="space-y-3">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E96]">
                    Activation Friction
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    ₹116.82
                  </div>
                  <p className="text-sm leading-relaxed text-[#A4A4AE] pt-1">
                    The one-time Wallet UPI activation fee (₹99 + GST). If rewards are earned at 1% on all eligible spending and there are no other fees, it takes about ₹11,700 of spending to earn that back. Free bank UPI is what the user is comparing it to.
                  </p>
                </div>
              </div>

              {/* Stat Block 4 */}
              <div className="group bg-[#151518] hover:bg-[#18181D] border border-[#27272B] hover:border-[#38383F] p-5 sm:p-6 rounded-xl transition-all duration-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />
                <div className="space-y-3">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#8E8E96]">
                    Support & Refund Latency
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    Days to weeks
                  </div>
                  <p className="text-sm leading-relaxed text-[#A4A4AE] pt-1">
                    Individual reviews describe money debited while a payment shows Failed or Processing, with refunds taking days and in some cases 14–25+ days. Others mention support emails unanswered for 10+ days, QR scanner errors, UPI activation stuck on "taking longer than expected", and a disabled card-tracking button. One review about a 25-day refund doesn't tell us TCC's typical refund time, but the same themes keep coming back.
                  </p>
                </div>
              </div>
            </div>

            {/* Analysis takeaway */}
            <div className="space-y-4 pt-2 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              <p>
                This matters more for a prepaid wallet than for most apps. The user already put their own money in, so not knowing where it is hurts trust fast.
              </p>
              <p>
                The issue isn't the reward idea. Real gold instead of coupons is a good idea and easy to explain. The issue is how many steps, fees and doubts sit between a new user and their first reward.
              </p>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 03 — THE GAP */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              03 — The Gap
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              Two customer segments I think TCC could serve better
            </h2>

            {/* Segment Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {/* Segment 1 */}
              <div className="bg-[#151518] border border-[#27272B] border-t-2 border-t-[#8A8A93] p-5 sm:p-6 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#8E8E96] tracking-wider uppercase">
                    Segment 1
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A] bg-[#1E1E24] px-2 py-0.5 rounded">
                    Fintech-Savvy
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F5F5F7]">
                  The Banked & Carded User
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  the user who already has a bank account, a credit card and a PAN. They understand fintech and can read the fee structure. But they also have free bank UPI, and apps like CRED and CheQ for credit card bills. For them TCC is a nice extra, and the fees give them reasons to hesitate.
                </p>
              </div>

              {/* Segment 2 */}
              <div className="bg-[#151518] border border-[#27272B] border-t-2 border-t-[#D4AF37] p-5 sm:p-6 rounded-xl space-y-4 shadow-[0_0_25px_-5px_rgba(212,175,55,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                    Segment 2
                  </span>
                  <span className="text-[11px] font-mono text-[#D4AF37]/90 bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                    High Growth Opportunity
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F5F5F7]">
                  The Student / First-Time Earner
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  the student or first-time earner who has a phone and UPI, but no credit card and sometimes no PAN. This is where TCC has something others don't: a wallet that works without a bank link. But two things may stand in the way.
                </p>
                <div className="space-y-2.5 pt-1 text-sm text-[#A4A4AE]">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-[#D4AF37] font-semibold mt-0.5">1.</span>
                    <p><strong className="text-[#E0E0E6]">Getting in.</strong> Onboarding may ask for more than a young user has, such as a PAN card.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-xs text-[#D4AF37] font-semibold mt-0.5">2.</span>
                    <p><strong className="text-[#E0E0E6]">Getting funded.</strong> I could see options to add money through UPI, cards and net banking. However, I couldn't find an obvious parent-managed funding experience where a parent can fund a student's wallet while setting spending limits. Family Payments could address this gap once it is available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Analysis */}
            <div className="space-y-4 pt-2 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              <p>
                TCC has two problems to solve here: making the first week easy, and making these users stay. For Segment 1 the first seems largely solved. For Segment 2 I'm less sure of either.
              </p>
              <p>
                The positioning may also matter. "Luxury perks like airport lounges" speaks to someone who flies. A college student may not. What could speak to them is simpler: every payment you already make turns into a little real gold.
              </p>
              <p>
                Why this could matter for the business: Segment 1 is expensive to win, because it can switch to CRED or a bank app at any time. Segment 2 could be cheaper to reach through campus and parent referrals, and could grow into a full-KYC adult customer over 2–3 years. (Hypothesis. TCC's data on acquisition cost, onboarding completion and 6- and 12-month retention would confirm or disprove this.)
              </p>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 04 — OBSERVATION */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              04 — Something I noticed while using TCC
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              TCC is not competing with other cards. It's competing with the UPI app already on the phone.
            </h2>

            {/* Narrative text */}
            <div className="space-y-5 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              <p className="font-medium text-[#E0E0E6]">
                I noticed two things.
              </p>

              <div className="bg-[#151518]/60 border border-[#26262B] rounded-xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Observation 1 · The Habit Hurdle</span>
                </div>
                <p>
                  The first is about habit. Most people pay with whatever app is already on their home screen, and that app is free. To move a payment to TCC, the user has to complete KYC, pay an activation fee, and trust a new app with their money. The reward has to be worth all of that, and it has to show up early.
                </p>
                <p className="text-[#A4A4AE]">
                  So TCC is not only selling a card. It is selling a new daily habit, and the first week decides whether it forms. The first redemption I found is at 10,000 Gold Coins, and until then the only visible progress is a balance of coins that can't yet be redeemed.
                </p>
              </div>

              <div className="bg-[#151518]/60 border border-[#26262B] rounded-xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Observation 2 · The Real Advantage</span>
                </div>
                <p>
                  The second is about what the real advantage is. Most people would say it's the reward rate. I think it's something else: the user's own money, turning into gold, with a clear view of where it is. Gold Coins are the right idea because they feel like saving, not discounts. But a saving only feels safe if the user can always see where their money is. When a payment is stuck, that feeling breaks, and no reward rate fixes it.
                </p>
              </div>

              <p className="pt-1 text-[#E0E0E6] font-medium">
                That is why I'd treat trust and the first reward as part of the same job: making the first week feel safe and worth it.
              </p>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 05 — WHAT I'D DO */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              05 — What I'd Do
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              Three things I'd work on
            </h2>

            {/* Intro */}
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              If I were on the TCC team and wanted to bring <span className="italic font-normal text-[#D4AF37]">young India</span> in, this is what I'd do.
            </p>

            {/* Priority Blocks */}
            <div className="space-y-5 pt-2">
              {/* Priority 1 */}
              <div className="group bg-[#151518]/80 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 sm:p-6 rounded-r-xl transition-all duration-300 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                      Priority 1: A clear, lighter Min-KYC path
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-[#D4AF37]">
                    Make it easy to get in.
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  Make the eligible Min-KYC journey easier to discover. During my own onboarding I was asked for PAN details, while TCC's published terms describe a lighter Min-KYC route. I'd first investigate whether users are being routed into different KYC journeys and where eligible users drop off. If the lighter route exists but is hard to find, show it as its own journey: OTP, one ID number, a selfie, and the limits shown before activation (₹10,000 balance, purchases only), with Full KYC as a later upgrade for higher limits and UPI transfers. This must not promise features that small wallets can't offer under RBI rules, and TCC's compliance team would need to confirm what is allowed. The published terms also mention both a one-year and a two-year validity for different routes, which is worth clearing up for users.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#C5A059] uppercase tracking-wider font-semibold">How I'd measure it:</span>
                  <span className="text-[#8E8E96]">onboarding completion, drop-off by step, share of users who upgrade.</span>
                </div>
              </div>

              {/* Priority 2 */}
              <div className="group bg-[#151518]/80 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 sm:p-6 rounded-r-xl transition-all duration-300 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                      Priority 2: Family Payments built for students
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-[#D4AF37]">
                    Make it easy to get funded.
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  A parent funds the wallet with a limit per person. The student manages their own spending and the parent stays in control. This gives young users a funding source without needing their own bank account, and it brings the person with the money into TCC too.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#C5A059] uppercase tracking-wider font-semibold">How I'd measure it:</span>
                  <span className="text-[#8E8E96]">parent-to-student setups, repeat spends per week, 6- and 12-month retention.</span>
                </div>
              </div>

              {/* Priority 3 */}
              <div className="group bg-[#151518]/80 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 sm:p-6 rounded-r-xl transition-all duration-300 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                      Priority 3: A transaction timeline
                    </h3>
                  </div>
                  <div className="text-sm font-mono text-[#D4AF37]">
                    Make it safe to stay.
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  Show every payment as a clear status: Initiated → Processing → Success or Failed → Refund started → Refunded, with an expected date. Add a "Report a problem" button on each transaction that opens a support ticket with the details already filled in. This is where my engineering background helps most: tracking payment states, reconciling failed or pending transactions, and telling the user clearly what is happening to their money.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#C5A059] uppercase tracking-wider font-semibold">How I'd measure it:</span>
                  <span className="text-[#8E8E96]">support tickets per 1,000 transactions, time to refund, repeat use after a failed payment.</span>
                </div>
              </div>
            </div>

            {/* Closing thought */}
            <p className="pt-2 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              What I'd do first depends on what TCC's data shows. If most users drop at KYC, it's Priority 1. If they join but don't come back, it's 2 and 3.
            </p>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 06 — CAMPAIGN IDEAS */}
          {/* ========================================================================= */}
          <section className="space-y-6">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              06 — Campaign Ideas
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
              Some ideas I had
            </h2>

            {/* Lead note */}
            <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              If I were part of the team, this is what I'd want to work on. These are early ideas to test, not a finished plan.
            </p>

            {/* Ideas list */}
            <div className="space-y-4 pt-2">
              {/* Idea 01 */}
              <div className="group bg-[#151518]/70 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 rounded-r-xl transition-all duration-300 space-y-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                  Idea 01: Your first gold in 7 days
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  The first redemption is the moment a new user sees that this is real gold. So make it come early. A progress bar from day one, and a small starter bonus that gets a new user to their first 10,000 Gold Coins within the first week or two, not after ₹10,000 of spending. The campaign line is simple: make your first payment, get your first gold.
                </p>
              </div>

              {/* Idea 02 */}
              <div className="group bg-[#151518]/70 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 rounded-r-xl transition-all duration-300 space-y-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                  Idea 02: Campus ambassadors
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  Students don't join because of an ad. They join because a friend in their hostel showed them. Pick 10 colleges, recruit a few students in each, and give both the student and the friend a gold reward once the friend makes their first payment at a shop or canteen. Distribution here has to be social.
                </p>
              </div>

              {/* Idea 03 */}
              <div className="group bg-[#151518]/70 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 rounded-r-xl transition-all duration-300 space-y-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                  Idea 03: Stop talking to people who already follow credit card rewards
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  Most fintech content is made for people who already compare reward rates. Students watch college-life, exam-prep and upskilling creators. A short Hindi or regional-language video of a student paying at a canteen and getting gold back, in 30 seconds, explains the product better than any feature list.
                </p>
              </div>

              {/* Idea 04 */}
              <div className="group bg-[#151518]/70 hover:bg-[#18181D] border-l-[3px] border-l-[#3A3A40] hover:border-l-[#D4AF37] border-y border-r border-[#242429] p-5 rounded-r-xl transition-all duration-300 space-y-2">
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                  Idea 04: Parent tops up, student spends
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  Once Family Payments is live, run a campaign aimed at parents of college students around pocket-money day, exam season and festivals like Dhanteras and Akshaya Tritiya, when gold is already on people's minds. The message to parents: send money, with limits, and your child saves in gold while they spend.
                </p>
              </div>
            </div>
          </section>

          {/* Hairline Divider */}
          <div className="w-full h-px bg-[#222226]" />


          {/* ========================================================================= */}
          {/* SECTION 07 — PARTNERSHIP / HOW I CAN CONTRIBUTE */}
          {/* ========================================================================= */}
          <section className="space-y-8">
            {/* Kicker */}
            <div className="text-xs font-mono font-semibold tracking-kicker text-[#C5A059] uppercase">
              07 — Partnership / How I can contribute
            </div>

            {/* Subheading */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-[28px] font-serif text-[#F5F5F7] tracking-tight leading-snug">
                Where TCC can reach young users it can't reach alone
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
                The ideas in section 06 are things TCC can run on its own. This is about distribution through other platforms, where TCC becomes a way to pay rather than another app to download.
              </p>
            </div>

            {/* 3 Partnership Opportunities */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 bg-[#151518]/60 border border-[#26262B] p-4 sm:p-5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  <strong className="text-[#F5F5F7] font-semibold">College fest and event ticketing:</strong> TCC as a payment option at checkout, with gold back on every ticket.
                </p>
              </div>

              <div className="flex items-start gap-3 bg-[#151518]/60 border border-[#26262B] p-4 sm:p-5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  <strong className="text-[#F5F5F7] font-semibold">Campus canteen and payment systems:</strong> a TCC wallet or QR option, so students pay where they already spend every day.
                </p>
              </div>

              <div className="flex items-start gap-3 bg-[#151518]/60 border border-[#26262B] p-4 sm:p-5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#A4A4AE]">
                  <strong className="text-[#F5F5F7] font-semibold">Student upskilling and exam-prep platforms:</strong> TCC as a way to pay for courses, with a parent funding the wallet through Family Payments.
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="space-y-3 text-[16px] sm:text-[17px] leading-[1.8] text-[#B8B8BE]">
              <p>
                Each of these already has the audience TCC wants. Each could start as a small pilot with a clear success measure, such as first payments completed per 100 signups.
              </p>
              <p className="italic font-serif text-[#D4AF37]">
                These were the insights, gaps and ideas I could find.
              </p>
            </div>

            {/* Why I want to contribute */}
            <div className="bg-[#151518]/90 border border-[#29292F] rounded-xl p-6 sm:p-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif text-[#F5F5F7]">
                Why I want to contribute
              </h3>
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-[1.8] text-[#B8B8BE]">
                <p>
                  I'm a recent B.Tech graduate focused on Java backend engineering. I built SimplyCinema, a movie-booking platform using Spring Boot, PostgreSQL, Redis and WebSockets, with seat locking to prevent double bookings and real-time seat updates. I've also worked with authentication, payment flows, REST APIs and database design.
                </p>
                <p>
                  What interests me about TCC is that its challenges go beyond building another payment feature: reliability, transaction states, onboarding, and making a financial product easier to use. I'd like to contribute as a backend engineer who can investigate these problems, build practical solutions and measure their impact.
                </p>
              </div>
            </div>

            {/* 30-Day Plan (Vertical Timeline with Gold Milestone Dots) */}
            <div className="space-y-4 pt-2">
              <div className="text-xs font-mono font-semibold tracking-wider uppercase text-[#C5A059]">
                30-Day Execution Roadmap
              </div>
              <p className="text-sm sm:text-[15px] text-[#A4A4AE]">
                If it's useful, this is what I could start on in the first 30 days:
              </p>

              {/* Vertical Timeline */}
              <div className="relative pl-6 sm:pl-8 space-y-6 pt-2 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-px before:bg-[#2F2F36]">
                {/* Week 1 */}
                <div className="relative group">
                  <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#111113] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <div className="bg-[#151518]/70 border border-[#26262B] p-4 rounded-lg">
                    <span className="font-mono text-xs font-semibold text-[#D4AF37] block mb-1">
                      Week 1
                    </span>
                    <p className="text-sm leading-relaxed text-[#B8B8BE]">
                      Map the current onboarding and payment flows and list where users can get stuck.
                    </p>
                  </div>
                </div>

                {/* Week 2 */}
                <div className="relative group">
                  <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#111113] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <div className="bg-[#151518]/70 border border-[#26262B] p-4 rounded-lg">
                    <span className="font-mono text-xs font-semibold text-[#D4AF37] block mb-1">
                      Week 2
                    </span>
                    <p className="text-sm leading-relaxed text-[#B8B8BE]">
                      Build a prototype of the transaction timeline and the "Report a problem" flow.
                    </p>
                  </div>
                </div>

                {/* Week 3 */}
                <div className="relative group">
                  <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#111113] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <div className="bg-[#151518]/70 border border-[#26262B] p-4 rounded-lg">
                    <span className="font-mono text-xs font-semibold text-[#D4AF37] block mb-1">
                      Week 3
                    </span>
                    <p className="text-sm leading-relaxed text-[#B8B8BE]">
                      Work with your team to set up onboarding funnel metrics and confirm what the compliance rules allow.
                    </p>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="relative group">
                  <div className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3 h-3 rounded-full bg-[#111113] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-colors shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <div className="bg-[#151518]/70 border border-[#26262B] p-4 rounded-lg">
                    <span className="font-mono text-xs font-semibold text-[#D4AF37] block mb-1">
                      Week 4
                    </span>
                    <p className="text-sm leading-relaxed text-[#B8B8BE]">
                      Validate the findings with your team, pick one low-risk improvement, and work towards delivering it with clear success measures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call invitation */}
            <div className="pt-3">
              <p className="text-base sm:text-[17px] font-medium text-[#F5F5F7] leading-relaxed">
                I'd welcome a 20-minute call, and I'm happy to be told where my assumptions are wrong.
              </p>
            </div>
          </section>


          {/* ========================================================================= */}
          {/* UNDERSTATED FOOTER */}
          {/* ========================================================================= */}
          <footer className="border-t border-[#222226] pt-8 sm:pt-10 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-[13px] font-mono text-[#8E8E96]">
              <div className="flex items-center gap-2">
                <span className="text-[#F5F5F7] font-medium">Hemant Singh</span>
                <span className="text-[#3A3A40]">·</span>
                <span className="text-[#A4A4AE]">[Email]</span>
                <span className="text-[#3A3A40]">·</span>
                <span className="text-[#A4A4AE]">[LinkedIn]</span>
                <span className="text-[#3A3A40]">·</span>
                <span className="text-[#A4A4AE]">[Phone]</span>
              </div>
              <div className="text-[11px] text-[#63636B]">
                Editorial Memo // 2026
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#71717A]">
              Sources: TCC's published terms and conditions, TCC product pages, my own use of the app, and public Google Play reviews (July–November 2026). I am not affiliated with TCC.
            </p>
          </footer>

        </article>
      </main>
    </div>
  );
}
