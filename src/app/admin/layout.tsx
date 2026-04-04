import AdminSidebar from "@/components/admin/AdminSidebar";
import AuthProvider from "@/components/admin/AuthProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-[calc(100vh-64px)]">
        <AdminSidebar />
        <div className="flex-1 bg-gray-50 p-6 md:p-8">{children}</div>
      </div>
    </AuthProvider>
  );
}
