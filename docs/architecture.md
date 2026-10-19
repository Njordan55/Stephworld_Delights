# Structur of the Web-App project.

Stephworld-Delights/
│
├── application/
│   ├── web/
│   │   ├── public/
│   │   │   ├── images/
│   │   │   │   ├── cakes/
│   │   │   │   └── branding/
│   │   │   └── icons/
│   │   │
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── global.css
│   │   │   ├── components/
│   │   │   ├── config/
│   │   │   ├── data/
│   │   │   └── lib/
│   │   │── next.config.ts
│   │   ├── tsconfig.json
│   │   ├── postcss.config.mjs
│   │   ├── eslint.config.mjs
│   │   │
│   │   └── package.json
│   │
│   └── mobile/          # Future development
│
├── Packages/
│   └── shared/          # Future shared code
│
├── docs/
│   ├── requirements.md
│   └── architecture.md
│
├── design/
│   └── concepts/
│
├── .gitignore
├── LICENSE
└── README.md


Web:

application/web/
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx
        └── globals.css