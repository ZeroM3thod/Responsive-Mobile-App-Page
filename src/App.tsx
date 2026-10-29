import { useState, type ReactNode } from "react"

type Page = "home" | "work" | "earn" | "team" | "profile"

function Icon({
  name,
  size = 24,
  strokeWidth = 2,
}: {
  name: string
  size?: number
  strokeWidth?: number
}) {
  const paths: Record<string, ReactNode> = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h5v-6h4v6h5V10" />
      </>
    ),
    work: (
      <>
        <path d="m4 8 8 4 8-4-8-4-8 4Z" />
        <path d="M4 8v9l8 4 8-4V8M12 12v9" />
      </>
    ),
    chart: (
      <>
        <path d="M5 20v-7M12 20V7M19 20V3" />
      </>
    ),
    handshake: (
      <>
        <path d="m4 11 4-4 4 2 3-2 5 5" />
        <path d="m2 9 4-4 3 2M22 9l-4-4-3 2M7 14l3 3 6-6M11 18l2 2 5-5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20a6 6 0 0 1 12 0M14 15a5 5 0 0 1 7 4.5" />
      </>
    ),
    wallet: (
      <>
        <path d="M4 6h14a2 2 0 0 1 2 2v11H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h11" />
        <path d="M16 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" />
      </>
    ),
    coins: (
      <>
        <ellipse cx="9" cy="6" rx="5" ry="2.5" />
        <path d="M4 6v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6M4 11v5c0 1.4 2.2 2.5 5 2.5 1 0 2-.2 2.8-.5" />
        <path d="M14 11c3 0 5 1 5 2.5V18c0 1.4-2.2 2.5-5 2.5S9 19.4 9 18v-1" />
      </>
    ),
    gift: (
      <>
        <rect x="3" y="9" width="18" height="12" rx="2" />
        <path d="M12 9v12M3 13h18M12 9H8.5a2.5 2.5 0 1 1 2.3-3.5L12 9Zm0 0h3.5a2.5 2.5 0 1 0-2.3-3.5L12 9Z" />
      </>
    ),
    deposit: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3M12 17V10M9 13l3-3 3 3" />
      </>
    ),
    withdraw: (
      <>
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 17v3h8v-3M12 7v7M9 11l3 3 3-3" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    target: (
      <>
        <circle cx="11" cy="13" r="8" />
        <circle cx="11" cy="13" r="4" />
        <path d="m13 11 8-8M16 3h5v5" />
      </>
    ),
    cursor: (
      <>
        <path d="M7 3v10M7 8H5a2 2 0 0 0-2 2v3l4 7h8a4 4 0 0 0 4-4v-6a2 2 0 0 0-4 0V8a2 2 0 0 0-4 0V6a2 2 0 0 0-4 0" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name] ?? paths.work}
    </svg>
  )
}

function AppHeader({ onNotice }: { onNotice: () => void }) {
  return (
    <header className="app-header">
      <div className="avatar">
        <Icon name="user" size={41} strokeWidth={1.7} />
      </div>
      <div className="identity">
        <strong>
          <span className="crown">♛</span> বরজাজ
        </strong>
        <span>পরিচয় সংখ্যা: ৫৮৯৯৬৩৮০</span>
        <span>
          <i className="diamond">◆</i> বিশিষ্ট স্তর ০
        </span>
      </div>
      <button
        className="notice-button"
        aria-label="নোটিফিকেশন"
        onClick={onNotice}
      >
        <Icon name="bell" size={30} />
        <b />
      </button>
    </header>
  )
}

const navItems: { id: Page icon: string label: string }[] = [
  { id: "home", icon: "home", label: "মূল অফিস" },
  { id: "work", icon: "work", label: "কর্মক্ষেত্র" },
  { id: "earn", icon: "chart", label: "অর্জনের পথ" },
  { id: "team", icon: "handshake", label: "সাফল্যের সঙ্গী" },
  { id: "profile", icon: "user", label: "আমার পরিবার" },
]

function BottomNav({
  page,
  onChange,
}: {
  page: Page
  onChange: (page: Page) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="প্রধান নেভিগেশন">
      {navItems.map((item) => (
        <button
          className={page === item.id ? "active" : ""}
          key={item.id}
          onClick={() => onChange(item.id)}
        >
          <Icon name={item.icon} size={27} />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

const stats = [
  ["coins", "কর্মক্ষেত্রের আয়", "৳ ২,৭২৬.৩৭"],
  ["gift", "দলীয় প্রাপ্ত", "৳ ২৮০.০০"],
  ["users", "দলীয় লভ্যাংশ", "৳ ২৪.৫০"],
  ["chart", "আজকের অর্জন", "৳ ১,৪০০.৭৫"],
  ["gift", "মোট জমা", "৳ ২,৬০০.০০"],
  ["wallet", "মোট উত্তোলন", "৳ ২০০.০০"],
]

function HomePage({ action }: { action: (message: string) => void }) {
  const menu = [
    "সাধারণ হিসাবপত্র",
    "জমার অর্ডার",
    "কমিশন",
    "লভ্যাংশ",
    "উত্তোলন",
    "স্টকের মূল্যায়ন",
    "অ্যাপ ডাউনলোড",
  ]
  return (
    <main className="home-page page-content">
      <section className="balance-card">
        <div className="wallet-mark">
          <Icon name="wallet" size={37} />
        </div>
        <div>
          <span>মোট সঞ্চয়</span>
          <strong>৳ ১০২.০৩</strong>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map(([icon, title, value]) => (
          <div className="stat-cell" key={title}>
            <span className="small-icon">
              <Icon name={icon} size={23} />
            </span>
            <div>
              <span>{title}</span>
              <strong>{value}</strong>
            </div>
          </div>
        ))}
      </section>

      <section className="quick-grid">
        {[
          ["deposit", "জমা করুন"],
          ["withdraw", "উত্তোলন"],
          ["users", "সঙ্গীগণ"],
          ["settings", "বিন্যাস"],
        ].map(([icon, label]) => (
          <button
            key={label}
            onClick={() => action(`${label} নির্বাচন করা হয়েছে`)}
          >
            <span>
              <Icon name={icon} size={34} />
            </span>
            <b>{label}</b>
          </button>
        ))}
      </section>

      <section className="menu-list">
        {menu.map((item) => (
          <button key={item} onClick={() => action(`${item} শীঘ্রই আসছে`)}>
            <span>{item}</span>
            <b>›</b>
          </button>
        ))}
      </section>
      <button
        className="chat-button"
        aria-label="সহায়তা"
        onClick={() => action("সহায়তা বার্তা খোলা হয়েছে")}
      >
        <span>•••</span>
        <b>১</b>
      </button>
    </main>
  )
}

function GiftArtwork() {
  return (
    <div className="gift-art" aria-hidden="true">
      <div className="gift-lid" />
      <div className="gift-body" />
      <div className="gift-ribbon" />
      <div className="gift-bow">
        <i />
        <i />
      </div>
    </div>
  )
}

function WorkPage({
  claimed,
  onGrab,
}: {
  claimed: boolean
  onGrab: () => void
}) {
  return (
    <main className="work-page page-content">
      <section className="product-banner">
        <span className="cube-round">
          <Icon name="work" size={32} />
        </span>
        <div>
          <strong>Product Grabbing System</strong>
          <p>
            আপনার ব্যালেন্স অনুযায়ী প্রোডাক্ট গ্রাব করুন
            <br />
            এবং প্রতি গ্রাবের জন্য কমিশন পান।
          </p>
        </div>
        <GiftArtwork />
        <em>
          Grab
          <br />
          Earn
          <br />
          Grow
        </em>
      </section>

      <section className="work-stats">
        {[
          ["wallet", "আমার ব্যালেন্স", "৳ ৫০২.০৩"],
          ["coins", "প্রতি গ্রাব কমিশন", "৳ ১২৫.০০"],
          ["users", "মোট গ্রাব সংখ্যা", claimed ? "৪" : "৩"],
          ["calendar", "আজকের বাকি গ্রাব", claimed ? "১" : "২"],
        ].map(([icon, title, value]) => (
          <div key={title}>
            <span>
              <Icon name={icon} size={21} />
            </span>
            <small>{title}</small>
            <b>{value}</b>
          </div>
        ))}
      </section>

      <section className="grab-card">
        <div className="section-title">
          <span>
            <Icon name="work" size={25} />
          </span>
          <div>
            <strong>প্রোডাক্ট গ্রাবিং</strong>
            <p>আপনার ব্যালেন্স অনুযায়ী একটি প্রোডাক্ট নির্বাচন করুন এবং গ্রাব করুন।</p>
          </div>
        </div>
        <div className="empty-product">
          <span>
            <Icon name={claimed ? "check" : "work"} size={47} />
          </span>
          <strong>
            {claimed
              ? "প্রোডাক্ট সফলভাবে গ্রাব হয়েছে"
              : "এখনো কোনো প্রোডাক্ট গ্রাব করা হয়নি"}
          </strong>
          <p>
            {claimed ? "কমিশন আপনার ব্যালেন্সে যুক্ত হয়েছে" : "গ্রাব বাটনে ক্লিক করুন"}
          </p>
        </div>
        <button
          className={claimed ? "grab-button claimed" : "grab-button"}
          onClick={onGrab}
        >
          <span>
            {claimed ? (
              <Icon name="check" size={23} />
            ) : (
              <Icon name="cursor" size={23} />
            )}
          </span>{" "}
          {claimed ? "Grabbed" : "Grab Now"}
        </button>
        <p className="grab-note">▣ আপনার নির্ধারিত পরিমাণ অনুযায়ী গ্রাব করতে পারবেন।</p>
      </section>

      <section className="work-details">
        <h2>
          <Icon name="target" size={26} /> কাজের বিবরণ
        </h2>
        <div>
          {[
            ["work", "মোট কাজ", "৩"],
            ["check", "সম্পন্ন", claimed ? "২" : "১"],
            ["clock", "বাকি", claimed ? "১" : "২"],
          ].map(([icon, title, value]) => (
            <article key={title}>
              <span>
                <Icon name={icon} size={22} />
              </span>
              <small>{title}</small>
              <b>{value}</b>
            </article>
          ))}
        </div>
      </section>
      <p className="work-slogan">—　◆　ছোট ছোট কাজ　→　বড় আয়　◆　—</p>
    </main>
  )
}

function PlaceholderPage({ page }: { page: Page }) {
  const current = navItems.find((item) => item.id === page)!
  return (
    <main className="placeholder page-content">
      <div>
        <span>
          <Icon name={current.icon} size={54} />
        </span>
        <h1>{current.label}</h1>
        <p>এই বিভাগটি শীঘ্রই উন্মুক্ত হবে।</p>
      </div>
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("home")
  const [toast, setToast] = useState("")
  const [claimed, setClaimed] = useState(false)

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 2200)
  }

  const changePage = (next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`app ${page === "work" ? "blue-header" : ""}`}>
      <AppHeader onNotice={() => showToast("কোনো নতুন নোটিফিকেশন নেই")} />
      {page === "home" && <HomePage action={showToast} />}
      {page === "work" && (
        <WorkPage
          claimed={claimed}
          onGrab={() => {
            if (!claimed) {
              setClaimed(true)
              showToast("অভিনন্দন! প্রোডাক্ট গ্রাব সফল হয়েছে")
            } else {
              showToast("আজকের এই গ্রাবটি ইতিমধ্যে সম্পন্ন হয়েছে")
            }
          }}
        />
      )}
      {!["home", "work"].includes(page) && <PlaceholderPage page={page} />}
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
      <BottomNav page={page} onChange={changePage} />
    </div>
  )
}
