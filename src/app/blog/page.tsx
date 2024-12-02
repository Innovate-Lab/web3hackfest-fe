export const metadata = {
    title: "Blog",
    description: "Blog page",

}
function RootLayout({children}: {children: React.ReactNode}) {
    return ( <>{children}</> );
}

export default RootLayout;