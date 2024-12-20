"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const router = useRouter();

  // Kiểm tra session và điều hướng nếu đã đăng nhập
  useEffect(() => {
    if (session) {
      router.push("/"); // Chuyển hướng về trang chủ nếu đã có session
    }
  }, [session, router]);

  return (
      <div
        className="bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url('auth/bg.avif')`,
        }}
      >
        {children}
      </div>
  );
}

export default RootLayout;
