export default function Page({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>{children}</main>
    </div>
  );
}
