export default function Topbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-medium">Lucent Admin</div>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-600 hover:text-black">
          Logout
        </button>
      </div>
    </header>
  );
}
