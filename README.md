# 💍 Wedding Invitation Website — Lin Lin Thu & Khine Sabal Tun

A classic & elegant responsive wedding invitation website designed with a luxury royal white & navy blue aesthetic, interactive opening envelope, romantic background music, countdown timer, photo gallery, event schedule, Google Maps directions, dress code guide, interactive RSVP guestbook, and digital blessings.

---

## 📸 How to Upload Your Photos & Music

All you need to do is copy your photo files directly into:
👉 **`public/images/`**

| File Name | Purpose | Recommended Type |
| :--- | :--- | :--- |
| **`hero.jpg`** | Main couple cover photo | High-res portrait (4:5) |
| **`groom.jpg`** | Lin Lin Thu portrait | Square or portrait |
| **`bride.jpg`** | Khine Sabal Tun portrait | Square or portrait |
| **`gallery-1.jpg`** | Gallery photo 1 | Pre-wedding or candid |
| **`gallery-2.jpg`** | Gallery photo 2 | Pre-wedding or candid |
| **`gallery-3.jpg`** | Gallery photo 3 | Pre-wedding or candid |
| **`gallery-4.jpg`** | Gallery photo 4 | Pre-wedding or candid |
| **`gallery-5.jpg`** | Gallery photo 5 | Pre-wedding or candid |
| **`gallery-6.jpg`** | Gallery photo 6 | Pre-wedding or candid |

### 🎵 Background Music:
Place your favorite song or instrumental track in:
👉 **`public/music/bg-music.mp3`**

*(Note: If any photo or the song is not yet uploaded, the website automatically displays beautiful high-resolution romantic placeholder photos and gentle piano music so your preview is always stunning!)*

---

## 💻 How to Preview on Your Computer

1. Open PowerShell / Command Prompt in this folder (`WI_KL`).
2. Run:
```bash
npm run dev
```
3. Open your browser and navigate to:
```
http://localhost:3008
```

---

## 🚀 How to Publish on Vercel for Free

Vercel is 100% free for Next.js personal projects with fast global CDN and automatic SSL (`https://`).

### Method 1: Using GitHub + Vercel (Easiest & Recommended)
1. Push this project to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/wedding-invitation.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub (free).
3. Click **"Add New..."** > **"Project"**.
4. Select your `wedding-invitation` repository and click **Deploy**.
5. Within 60 seconds, Vercel gives you a live public URL like:
   `https://wedding-invitation-lin-khaing.vercel.app`

### Method 2: Deploy directly with Vercel CLI
Run in your terminal:
```bash
npx vercel
```
Follow the 3 quick prompts (login with email/GitHub and confirm default settings).

---

## 💌 Personalized Invitation Links for Guests

You can send custom links to your guests so their name appears directly on the luxury envelope!

Simply add `?to=Guest+Name` to the URL:
- `https://your-wedding.vercel.app/?to=Ko+Aung+Aung`
- `https://your-wedding.vercel.app/?to=Ma+Su+Su+and+Family`
- `https://your-wedding.vercel.app/?to=Uncle+U+Myint`
