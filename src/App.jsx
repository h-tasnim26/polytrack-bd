import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ArrowRight, BookOpen, CalendarDays, CheckCircle2, ChevronDown, ClipboardCheck,
  GraduationCap, Menu, MessagesSquare, ShieldCheck, Users, BellRing, MapPin,
  Mail, LockKeyhole, Search, Sparkles, Globe2, Landmark, X
} from 'lucide-react'
import { features, sampleNotices } from './data'
import { isSupabaseConfigured } from './lib/supabase'

const iconMap = { BookOpen, CalendarDays, ClipboardCheck, MessagesSquare, BellRing, Users }
const navItems = [
  ['হোম', '/'], ['আমাদের সম্পর্কে', '/about'], ['ইনস্টিটিউট', '/institutes'],
  ['নোটিশ', '/notices'], ['একাডেমিক ক্যালেন্ডার', '/calendar'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-xl">
    <div className="container-shell flex h-[76px] items-center justify-between">
      <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal text-ink"><GraduationCap size={25}/></div>
        <div><div className="text-lg font-extrabold tracking-tight">PolyTrack <span className="text-teal">BD</span></div><div className="text-[10px] tracking-[.19em] text-slate-400">LEARN • DISCUSS • GROW</div></div>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex">
        {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `text-sm font-medium transition hover:text-teal ${isActive ? 'text-teal' : 'text-slate-300'}`}>{label}</NavLink>)}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <button className="rounded-full border border-white/20 px-3 py-2 text-xs text-slate-300">বাংলা <ChevronDown size={13} className="ml-1 inline"/></button>
        <Link to="/login" className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-white">লগইন <ArrowRight size={15} className="ml-1 inline"/></Link>
      </div>
      <button aria-label="মেনু খুলুন" onClick={() => setOpen(!open)} className="rounded-xl border border-white/15 p-2 lg:hidden">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
      {navItems.map(([label,path]) => <Link onClick={() => setOpen(false)} key={path} to={path} className={`block rounded-lg px-3 py-3 text-sm ${location.pathname === path ? 'text-teal' : 'text-slate-200'}`}>{label}</Link>)}
      <Link onClick={() => setOpen(false)} to="/login" className="mt-2 block rounded-full bg-teal px-4 py-3 text-center font-bold text-ink">লগইন</Link>
    </div>}
  </header>
}

function Footer() {
  return <footer className="bg-[#041321] py-12 text-slate-400">
    <div className="container-shell grid gap-10 md:grid-cols-3">
      <div><div className="mb-3 text-xl font-extrabold text-white">PolyTrack <span className="text-teal">BD</span></div><p className="max-w-sm text-sm leading-7">বাংলাদেশের পলিটেকনিক শিক্ষার্থীদের জন্য একাডেমিক তথ্য, আলোচনা ও যোগাযোগের একটি সমন্বিত প্ল্যাটফর্ম।</p></div>
      <div><h3 className="mb-4 font-bold text-white">দ্রুত লিংক</h3><div className="grid grid-cols-2 gap-3 text-sm"><Link to="/about">আমাদের সম্পর্কে</Link><Link to="/institutes">ইনস্টিটিউট</Link><Link to="/notices">নোটিশ</Link><Link to="/calendar">ক্যালেন্ডার</Link></div></div>
      <div><h3 className="mb-4 font-bold text-white">যোগাযোগ</h3><p className="flex items-center gap-2 text-sm"><Mail size={15}/> যোগাযোগের তথ্য শিগগির যুক্ত হবে</p><p className="mt-3 text-xs leading-6">প্রতিষ্ঠানের তথ্য যাচাই ছাড়া প্রকাশ করা হবে না।</p></div>
    </div>
    <div className="container-shell mt-10 border-t border-white/10 pt-6 text-xs">© {new Date().getFullYear()} PolyTrack BD. All rights reserved.</div>
  </footer>
}

function Home() {
  return <>
    <section className="hero-grid relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/20 blur-[100px]"/>
      <div className="container-shell relative grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-xs font-semibold text-teal"><Sparkles size={14}/> পলিটেকনিক শিক্ষার্থীদের জন্য ডিজিটাল প্ল্যাটফর্ম</div>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl lg:text-[64px]">শিখুন একসাথে।<br/><span className="text-teal">আলোচনা করুন</span> স্বাধীনভাবে।</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">এক জায়গায় একাডেমিক আপডেট, ক্লাস রুটিন, পরীক্ষা, নোটিশ এবং পরিচয় গোপন রেখে শিক্ষামূলক আলোচনার সুযোগ।</p>
          <div className="mt-9 flex flex-wrap gap-3"><Link to="/login" className="rounded-full bg-teal px-7 py-3.5 font-bold text-ink transition hover:bg-white">শুরু করুন <ArrowRight className="ml-2 inline" size={17}/></Link><Link to="/about" className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white hover:border-teal hover:text-teal">আরও জানুন</Link></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal"/> পরিচয় সুরক্ষায় গুরুত্ব</span><span className="flex items-center gap-2"><Users size={16} className="text-teal"/> শিক্ষার্থী ও অভিভাবক</span><span className="flex items-center gap-2"><Globe2 size={16} className="text-teal"/> বাংলা ও ইংরেজি</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal/20 to-blue-500/10 blur-2xl"/>
          <div className="relative rounded-[2rem] border border-white/15 bg-white/[.07] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs text-slate-400">POLYTRACK BD</p><h2 className="mt-1 text-lg font-bold">শিক্ষার্থী ড্যাশবোর্ড</h2></div><div className="rounded-xl bg-teal/15 p-3 text-teal"><GraduationCap size={24}/></div></div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[['ক্লাস রুটিন','আজকের ক্লাস',CalendarDays],['একাডেমিক তথ্য','সেমিস্টার আপডেট',BookOpen],['নোটিশ','সর্বশেষ ঘোষণা',BellRing],['আলোচনা','বিষয়ভিত্তিক Q&A',MessagesSquare]].map(([a,b,Icon])=><div key={a} className="rounded-2xl border border-white/10 bg-ink/60 p-4"><Icon className="mb-4 text-teal" size={21}/><p className="font-bold">{a}</p><p className="mt-1 text-xs text-slate-400">{b}</p></div>)}
            </div>
            <div className="mt-4 rounded-2xl border border-teal/20 bg-teal/10 p-4"><div className="flex items-center gap-2 text-sm font-semibold text-teal"><ShieldCheck size={17}/> Anonymous Community</div><p className="mt-2 text-xs leading-6 text-slate-300">আলোচনায় আপনার পরিচয় সাধারণ ব্যবহারকারীদের কাছে গোপন থাকবে।</p></div>
            <p className="mt-4 text-center text-[10px] text-slate-500">ড্যাশবোর্ডের ছবিটি UI preview — বাস্তব শিক্ষার্থীর তথ্য নয়</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white py-20"><div className="container-shell"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">ONE CONNECTED PLATFORM</p><h2 className="section-title">একাডেমিক জীবনের প্রয়োজনীয় সবকিছু</h2><p className="mt-4 leading-8 text-slate-500">শিক্ষার্থী, অভিভাবক ও শিক্ষা প্রতিষ্ঠানের জন্য পরিকল্পিত প্রয়োজনীয় ফিচার।</p></div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{features.map((item) => {const Icon=iconMap[item.icon]; return <div key={item.title} className="feature-card"><div className="icon-tile"><Icon size={23}/></div><h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{item.description}</p></div>})}</div>
    </div></section>
    <section className="bg-mint/50 py-20"><div className="container-shell grid items-center gap-10 lg:grid-cols-2"><div><p className="eyebrow">PRIVACY BY DESIGN</p><h2 className="section-title">আলোচনা হোক স্বাধীন, পরিচয় থাকুক সুরক্ষিত</h2><p className="mt-5 leading-8 text-slate-600">PolyTrack BD-তে সাধারণ ব্যবহারকারীরা একে অপরের বাস্তব পরিচয় দেখতে পাবেন না। ব্যক্তিগত মেসেজিং বা ভিডিও পোস্টের ব্যবস্থা থাকবে না। আলোচনার লক্ষ্য হবে পড়াশোনা ও একাডেমিক সহযোগিতা।</p></div><div className="rounded-3xl border border-teal/15 bg-white p-7 shadow-soft"><div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal"><ShieldCheck/></div><div><p className="font-bold text-ink">Anonymous Student #1024</p><p className="text-xs text-slate-400">পরিচয় গোপন রাখা হয়েছে</p></div></div><p className="mt-6 leading-7 text-slate-600">“সেমিস্টারের এই বিষয়টির গুরুত্বপূর্ণ টপিকগুলো কেউ সাজিয়ে দিতে পারবেন?”</p><div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-slate-400"><span>বিষয়ভিত্তিক আলোচনা</span><span>ডেমো পোস্ট</span></div></div></div></section>
    <section className="bg-ink py-16 text-white"><div className="container-shell flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><h2 className="text-2xl font-extrabold">PolyTrack BD-এর সাথে এগিয়ে চলুন</h2><p className="mt-2 text-sm text-slate-400">আপনার একাডেমিক কমিউনিটির সাথে যুক্ত হওয়ার প্রস্তুতি নিন।</p></div><Link to="/login" className="rounded-full bg-teal px-6 py-3 font-bold text-ink">লগইন / রেজিস্ট্রেশন <ArrowRight className="ml-2 inline" size={16}/></Link></div></section>
  </>
}

function PageIntro({eyebrow,title,description}) { return <div className="bg-ink py-16 text-white"><div className="container-shell"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h1><p className="mt-4 max-w-2xl leading-8 text-slate-300">{description}</p></div></div> }

function About() {
  return <><PageIntro eyebrow="ABOUT POLYTRACK BD" title="পলিটেকনিক শিক্ষাজীবনকে আরও সংযুক্ত করতে" description="PolyTrack BD একটি পরিকল্পিত ডিজিটাল প্ল্যাটফর্ম, যেখানে একাডেমিক তথ্য, শিক্ষামূলক আলোচনা এবং অভিভাবক পর্যবেক্ষণ একই জায়গায় আনার লক্ষ্য রয়েছে।"/><section className="container-shell section-pad"><div className="grid gap-6 md:grid-cols-2"><div className="feature-card"><Landmark className="text-teal" size={28}/><h2 className="mt-4 text-xl font-bold">আমাদের লক্ষ্য</h2><p className="mt-3 text-sm leading-7 text-slate-500">পলিটেকনিক শিক্ষার্থীদের একাডেমিক তথ্য সহজে পাওয়া, বিষয়ভিত্তিক সহযোগিতা এবং দায়িত্বশীল যোগাযোগের সুযোগ তৈরি করা।</p></div><div className="feature-card"><ShieldCheck className="text-teal" size={28}/><h2 className="mt-4 text-xl font-bold">গোপনীয়তা</h2><p className="mt-3 text-sm leading-7 text-slate-500">শিক্ষার্থীদের ব্যক্তিগত তথ্য অনুমোদিত অ্যাক্সেসের মধ্যে সীমাবদ্ধ রাখা এবং সাধারণ আলোচনায় পরিচয় গোপন রাখা আমাদের নকশার গুরুত্বপূর্ণ অংশ।</p></div></div></section></>
}

function Institutes() {
  const [query,setQuery] = useState('')
  return <><PageIntro eyebrow="INSTITUTE DIRECTORY" title="ইনস্টিটিউট ডিরেক্টরি" description="যাচাইকৃত পলিটেকনিক ইনস্টিটিউটের তথ্য এখানে প্রকাশ করা হবে। এই Phase 1 সংস্করণে কোনো বাস্তব ইনস্টিটিউটের তথ্য যোগ করা হয়নি।"/><section className="container-shell section-pad"><div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-soft"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-teal"><Search/></div><h2 className="mt-4 text-xl font-bold text-ink">ইনস্টিটিউট খুঁজুন</h2><p className="mt-2 text-sm text-slate-500">পরবর্তী ধাপে যাচাইকৃত ডিরেক্টরি ও ফিল্টার যুক্ত হবে।</p><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ইনস্টিটিউটের নাম লিখুন (ডেমো)" className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal"/><p className="mt-4 text-xs text-slate-400">{query ? 'এখনো কোনো যাচাইকৃত ফলাফল যুক্ত করা হয়নি।' : 'ডেটাবেস সংযুক্ত হলে এখানে ফলাফল দেখা যাবে।'}</p></div></section></>
}

function Notices() {
  return <><PageIntro eyebrow="NOTICE BOARD" title="নোটিশ ও একাডেমিক আপডেট" description="ইনস্টিটিউট ও বিভাগভিত্তিক যাচাইকৃত নোটিশ, পরীক্ষা এবং রুটিন আপডেটের জন্য কেন্দ্রীয় জায়গা।"/><section className="container-shell section-pad"><div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">নিচের সব আইটেম ডেমো কনটেন্ট। এগুলো কোনো বাস্তব বা অফিসিয়াল নোটিশ নয়।</div><div className="grid gap-4">{sampleNotices.map((n,i)=><article key={n.title} className="feature-card flex flex-col gap-4 sm:flex-row sm:items-start"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-teal"><BellRing/></div><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-teal">{n.type}</span><span className="text-xs text-slate-400">{n.date}</span></div><h2 className="mt-3 font-bold text-ink">{n.title}</h2><p className="mt-2 text-sm leading-7 text-slate-500">{n.description}</p></div></article>)}</div></section></>
}

function Calendar() {
  return <><PageIntro eyebrow="ACADEMIC CALENDAR" title="একাডেমিক ক্যালেন্ডার" description="পরীক্ষা, ক্লাস, রেজিস্ট্রেশন, ছুটি ও গুরুত্বপূর্ণ একাডেমিক তারিখ এক জায়গায় দেখার পরিকল্পনা।"/><section className="container-shell section-pad"><div className="feature-card text-center"><CalendarDays className="mx-auto text-teal" size={38}/><h2 className="mt-4 text-xl font-bold text-ink">ক্যালেন্ডার প্রস্তুত করা হচ্ছে</h2><p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-slate-500">Supabase ডেটাবেস ও অনুমোদিত একাডেমিক তথ্য যুক্ত হওয়ার পর তারিখভিত্তিক ক্যালেন্ডার, ফিল্টার ও ইভেন্ট দেখা যাবে।</p></div></section></>
}

function Login() {
  return <><PageIntro eyebrow="WELCOME BACK" title="PolyTrack BD-তে প্রবেশ করুন" description="শিক্ষার্থী, অভিভাবক ও অনুমোদিত প্রতিষ্ঠানের সদস্যদের জন্য লগইন পোর্টাল।"/><section className="container-shell section-pad"><div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"><div className="mb-6 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mint text-teal"><LockKeyhole/></div><h2 className="mt-4 text-xl font-bold text-ink">লগইন</h2><p className="mt-2 text-sm text-slate-500">Supabase Authentication Phase 2-এ সক্রিয় হবে।</p></div><label className="mb-2 block text-sm font-semibold text-slate-700">ইমেইল</label><input disabled placeholder="name@example.com" className="mb-4 w-full rounded-xl border bg-slate-50 px-4 py-3"/><label className="mb-2 block text-sm font-semibold text-slate-700">পাসওয়ার্ড</label><input disabled type="password" placeholder="পাসওয়ার্ড" className="w-full rounded-xl border bg-slate-50 px-4 py-3"/><button disabled className="mt-6 w-full rounded-full bg-slate-200 py-3 font-bold text-slate-500">পরবর্তী ধাপে চালু হবে</button><p className="mt-4 text-center text-xs text-slate-400">এটি Phase 1 UI preview, এখনো বাস্তব লগইন নয়।</p></div></section></>
}

function NotFound() { return <div className="container-shell section-pad text-center"><h1 className="text-3xl font-extrabold">পৃষ্ঠা পাওয়া যায়নি</h1><Link to="/" className="mt-5 inline-block text-teal">হোমে ফিরে যান</Link></div> }

export default function App() {
  return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/institutes" element={<Institutes/>}/><Route path="/notices" element={<Notices/>}/><Route path="/calendar" element={<Calendar/>}/><Route path="/login" element={<Login/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><div className="fixed bottom-3 right-3 z-40 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-[10px] font-semibold text-slate-500 shadow-lg">{isSupabaseConfigured ? 'Supabase config detected' : 'Phase 1 • Demo mode'}</div></>
}
