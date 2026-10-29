import Link from "next/link";

type RightSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RightSidebar({
  isOpen,
  onClose,
}: RightSidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close account menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      <aside
        id="right-navigation"
        aria-label="Account navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed bottom-0 right-0 z-40 border-l shadow-xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: "var(--swd-navigation-height)",
          width: "min(var(--swd-sidebar-width), 85vw)",
          backgroundColor: "var(--swd-surface)",
          borderColor: "var(--swd-border)",
          color: "var(--swd-foreground)",
          transitionDuration: "var(--swd-medium-transition-duration)",
        }}
      >
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="/login"
            onClick={onClose}
            className="rounded-lg px-4 py-3 hover:bg-black/10"
          >
            Sign In
          </Link>

          <Link
            href="/register"
            onClick={onClose}
            className="rounded-lg px-4 py-3 hover:bg-black/10"
          >
            Create Account
          </Link>
        </nav>
      </aside>
    </>
  );
}