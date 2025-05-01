export default function AdminHomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Example cards - you can import from components/admin/Cards/ */}
      <div className="p-4 bg-white rounded shadow">Total Orders</div>
      <div className="p-4 bg-white rounded shadow">Revenue</div>
      <div className="p-4 bg-white rounded shadow">Active Customers</div>
    </div>
  );
}
