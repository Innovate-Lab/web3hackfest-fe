function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url('/assets/images/bkgs/primaryBkg.png')`,
      }}
    >
      {children}
    </div>
  );
}

export default RootLayout;
