// DashboardPage.tsx

const DashboardPage = () => {
  return (
    <div className="w-full h-full p-5 space-y-6">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to VisaTrail Immigration Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your visa records, track uploads, and control access all in one place.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Total Visas" count={124} />
        <SummaryCard title="Approved Visas" count={89} />
        <SummaryCard title="Pending Applications" count={22} />
        <SummaryCard title="Uploaded Documents" count={450} />
      </div>
    </div>
  );
};

interface SummaryCardProps {
  title: string;
  count: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, count }) => (
  <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition duration-200">
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{count}</p>
  </div>
);

export default DashboardPage;
