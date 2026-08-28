export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-slate-950 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-slate-500 font-medium">
          Copyright &copy; {new Date().getFullYear()} SG Career Bangla. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
