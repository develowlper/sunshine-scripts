export default function Page({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-3 py-2">{children}</main>
    </div>
  );
}
