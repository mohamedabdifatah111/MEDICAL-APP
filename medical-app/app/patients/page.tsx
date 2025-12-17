import Link from "next/link";

// Mock patient data
const patients = [
  {
    id: 1,
    name: "John Doe",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 123-4567",
    email: "john.doe@email.com",
    lastVisit: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 32,
    gender: "Female",
    phone: "+1 (555) 234-5678",
    email: "jane.smith@email.com",
    lastVisit: "2024-01-20",
    status: "Active",
  },
  {
    id: 3,
    name: "Robert Johnson",
    age: 58,
    gender: "Male",
    phone: "+1 (555) 345-6789",
    email: "robert.j@email.com",
    lastVisit: "2024-01-10",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    age: 28,
    gender: "Female",
    phone: "+1 (555) 456-7890",
    email: "emily.davis@email.com",
    lastVisit: "2023-12-28",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Michael Brown",
    age: 41,
    gender: "Male",
    phone: "+1 (555) 567-8901",
    email: "michael.b@email.com",
    lastVisit: "2024-01-18",
    status: "Active",
  },
];

export default function PatientsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Patients</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage patient records and information</p>
        </div>
        <Link
          href="/patients/new"
          className="medical-button-primary whitespace-nowrap text-center"
        >
          + Add New Patient
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Search patients..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Patients Table */}
      <div className="medical-card overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">
                        {patient.age} years, {patient.gender}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.phone}</div>
                    <div className="text-sm text-gray-500">{patient.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {patient.lastVisit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        patient.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/patients/${patient.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <Link
                      href={`/patients/${patient.id}/edit`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
          <span className="font-medium">1,247</span> patients
        </p>
        <div className="flex gap-2">
          <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

