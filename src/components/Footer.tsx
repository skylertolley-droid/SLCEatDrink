import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-slate-50">
              SLC <span className="text-amber-400">Eat Drink</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              A local directory for finding where to eat and drink in Salt Lake —
              filtered for how you actually go out.
            </p>
            <p className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-200/90">
              Soft launch: listings are curated and amenities may change. Spot
              something off?{' '}
              <a
                href="mailto:hello@slceatdrink.com"
                className="underline decoration-amber-500/50 underline-offset-2 hover:text-amber-100"
              >
                hello@slceatdrink.com
              </a>
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <p className="mb-2 font-medium text-slate-200">Navigate</p>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-amber-400">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link href="/advertise" className="hover:text-amber-400">
                    Advertise
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-400">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium text-slate-200">Owners</p>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <Link href="/advertise" className="hover:text-amber-400">
                    Feature your spot
                  </Link>
                </li>
                <li>
                  <Link href="/advertise#claim" className="hover:text-amber-400">
                    Claim listing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-800/80 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} SLC Eat Drink · Made for Salt Lake City ·
          Not affiliated with listed venues
        </p>
      </div>
    </footer>
  );
}
