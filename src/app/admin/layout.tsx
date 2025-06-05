import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
// import { Playfair_Display } from "next/font/google";
// import { Jost } from "next/font/google";
import Sidebar from "@/components/admin/sidebar";
import Topbar from "@/components/admin/topbar";
// import Footer from "@/components/landing/Footer";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Lucent Nepal",
  description: "We Promise Comfort",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       getAll() {
  //         return request.cookies.getAll()
  //       },
  //       setAll(cookiesToSet) {
  //         cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
  //         supabaseResponse = NextResponse.next({
  //           request,
  //         })
  //         cookiesToSet.forEach(({ name, value, options }) =>
  //           supabaseResponse.cookies.set(name, value, options)
  //         )
  //       },
  //     },
  // );

  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // console.log(session);
  // if (!session) {
  //   redirect("/");
  // }

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 min-h-screen bg-gray-50">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
