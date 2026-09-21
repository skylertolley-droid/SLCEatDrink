import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950 shadow-sm shadow-amber-500/30">
            ED
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-50">
            SLC <span className="text-amber-400">Eat Drink</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <Link
            href="/"
            className="rounded-md px-2.5 py-1.5 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Explore
          </Link>
          <Link
            href="/advertise"
            className="rounded-md px-2.5 py-1.5 text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Advertise
          </Link>
          <Link
            href="/about"
            className="hidden rounded-md px-2.5 py-1.5 text-slate-300 transition hover:bg-slate-800 hover:text-white sm:inline"
          >
            About
          </Link>
          <Link
            href="/advertise"
            className="ml-1 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-amber-500/20 transition hover:bg-amber-400 sm:text-sm"
          >
            Feature — $49/mo
          </Link>
        </nav>
      </div>
    </header>
  );
}
