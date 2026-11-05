# PolyTrack BD — Phase 1

এই ZIP-এ PolyTrack BD-এর প্রথম ধাপের React ওয়েবসাইট আছে।

## এই ধাপে যা আছে
- React + Vite + JavaScript
- Tailwind CSS
- Lucide Icons
- বাংলা responsive landing page
- Home, About, Institute Directory, Notices, Academic Calendar এবং Login UI
- Supabase client configuration placeholder
- GitHub Actions workflow
- GitHub Pages deployment প্রস্তুতি

## গুরুত্বপূর্ণ
এটি Phase 1 UI foundation। এখনো বাস্তব Login, Database, Attendance, Results, Guardian verification বা Admin permissions চালু হয়নি। কোনো demo notice-কে বাস্তব নোটিশ মনে করবেন না।

## Windows-এ চালানোর নিয়ম

### 1. Node.js ইনস্টল করুন
Node.js-এর LTS সংস্করণ ইনস্টল করুন: https://nodejs.org/

ইনস্টল শেষে Command Prompt বন্ধ করে আবার খুলুন।

### 2. ZIP Extract করুন
`PolyTrack-BD-Phase1.zip` Extract করুন।

### 3. Command Prompt-এ প্রজেক্ট ফোল্ডারে যান
উদাহরণ (আপনার Extract করা জায়গা অনুযায়ী path বদলাবেন):

```bat
cd /d "%USERPROFILE%\Downloads\PolyTrack-BD-Phase1"
```

যদি ZIP extract করার পর ভেতরে আরেকটি `PolyTrack-BD-Phase1` ফোল্ডার থাকে, সেই ফোল্ডারে ঢুকুন।

### 4. Dependencies ইনস্টল করুন

```bat
npm install
```

### 5. Website চালু করুন

```bat
npm run dev
```

Command Prompt-এ দেখানো Local URL (সাধারণত http://localhost:5173) ব্রাউজারে খুলুন।

বন্ধ করতে Command Prompt-এ `Ctrl + C` চাপুন।

## GitHub-এ Publish

1. GitHub-এ নতুন repository তৈরি করুন: `PolyTrack-BD`
2. Repository Public রাখলে GitHub Pages ব্যবহার সহজ হবে।
3. Git ইনস্টল করুন: https://git-scm.com/download/win
4. Command Prompt-এ প্রজেক্ট ফোল্ডারে গিয়ে নিচের কমান্ড দিন:

```bat
git init
git add .
git commit -m "Initial PolyTrack BD Phase 1"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/PolyTrack-BD.git
git push -u origin main
```

`YOUR-USERNAME`-এর জায়গায় আপনার GitHub username বসাবেন।

5. GitHub repository → Settings → Pages → Build and deployment → Source: **GitHub Actions** নির্বাচন করুন।
6. এরপর `main` branch-এ push করলে workflow build ও deploy করবে।

## GitHub Pages URL
সাধারণত:
`https://YOUR-USERNAME.github.io/PolyTrack-BD/`

GitHub Pages-এ সরাসরি route refresh সমস্যা এড়াতে এই Phase 1-এ HashRouter ব্যবহার করা হয়েছে। পেজের URL-এ `/#/about`-এর মতো hash দেখা যেতে পারে; এটি স্বাভাবিক।

## Supabase
Phase 1-এ Supabase project এখনো তৈরি করা বাধ্যতামূলক নয়। পরবর্তী ধাপে Supabase project তৈরি, URL এবং anon/public key সেট করা হবে।

`.env.example` ফাইলটি কপি করে `.env` নাম দিন এবং পরবর্তী ধাপে দেওয়া Supabase তথ্য বসান। `.env` কখনো GitHub-এ upload করবেন না।

## Build পরীক্ষা

```bat
npm run build
```

সফল হলে `dist` ফোল্ডার তৈরি হবে।
