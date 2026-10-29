
# Stephworld Delights — Architecture

## 1. System Architecture

```mermaid
flowchart TD
    A["Stephworld Delights"]
    A --> B["Public Website"]
    A --> C["Admin Dashboard"]
    A --> D["Mobile App (Future)"]

    C --> E["Content Editor"]
    C --> F["Design Studio"]
    C --> G["Media Library"]

    B --> H["Backend / API"]
    C --> H
    D --> H

    H --> I["Database"]
    H --> J["Authentication"]
    H --> K["Media Storage"]
```

## 2. Project Structure

```text
Stephworld-Delights/
│
├── application/
│   ├── web/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── config/
│   │   │   ├── data/
│   │   │   └── lib/
│   │   └── package.json
│   │
│   └── mobile/          # Future development
│
├── packages/
│   └── shared/          # Future shared code
│
├── docs/
│   ├── requirements.md
│   └── architecture.md
│
└── README.md
```
