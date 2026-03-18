This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font
family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

# Use cases

User kommt auf / und muss seine ahv nummer angeben, das wird in cookie
gespeichert, dann sieht er einen Timer bis zum nächsten Treffpunkt mit Ort und
evtl. zusatz infos, dazu noch klein, zum der übernächsten Treffpunkt

user kann ansicht zu tagesbefehl und wochenpikasso wechseln /2026-18-03:
tagesbefehl mit den bloecken, vertikal scrollbar mit roter strich wann jetzt ist
gewisse bloecke wo mehr infos haben (tenue other than c, custom message) sind
klickbar wo ein popup mit mehr informationen auftaucht individual orders are
shown to the left and the other is grayed out replaced orders are shown to the
left (in the middle if individual is also here) and striked through user sieht
sein namen und kann immer seine ahv nummer wechseln unter 'abmelden'

<!-- /kw-18: wochenpikasso ist ein kalender mit roter strich nur bei heute zum zeigen wo jetzt ist -->

Leutnants und wachtmeisters kommt auf / und sieht das gleiche wie user
(naechster treffpunkt) seine ahv nummer kann editieren, wo dann auf tagesbefehl
edit modus switcht (/2026-18-03)

# Data

enum Tenue {
  A,
  B,
  C,
  Sport,
  Zivil
}

Treffpunkt {
  time: Date
  place: string
  tenue: Tenue
  message: string
}
