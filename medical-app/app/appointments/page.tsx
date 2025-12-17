import Link from "next/link";

// Mock appointment data
const appointments = [
  {
    id: 1,
    patient: "Salman Soy",
    doctor: "Dr. Maryam Ali",
    date: "2024-01-25",
    time: "09:00 AM",
    type: "General Checkup",
    status: "confirmed",
  },
  {
    id: 2,
    patient: "Jane Smith",
    doctor: "Dr. Abdul Juma",
    date: "2024-01-25",
    time: "10:30 AM",
    type: "Follow-up",
    status: "confirmed",
  },
  {
    id: 3,
    patient: "Robert Johnson",
    doctor: "Dr. Maryam Ali",
    date: "2024-01-25",
    time: "02:00 PM",
    type: "Consultation",
    status: "pending",
  },
  {
    id: 4,
    patient: "Emily Davis",
    doctor: "Dr. Abdul Juma",
    date: "2024-01-26",
    time: "11:00 AM",
    type: "Annual Exam",
    status: "confirmed",
  },
  {
    id: 5,
    patient: "Michael Brown",
    doctor: "Dr. Maryam Ali",
    date: "2024-01-26",
    time: "03:30 PM",
    type: "Follow-up",
    status: "cancelled",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function AppointmentsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments</h1>
          <p className="text-gray-600">Manage and schedule patient appointments</p>
        </div>
        <Link
          href="/appointments/new"
          className="medical-button-primary"
        >
          + Schedule Appointment
        </Link>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-4">
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Cancelled</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Doctors</option>
          <option>Dr. Maryam Ali</option>
          <option>Dr. Abdul Juma</option>
        </select>
      </div>

      {/* Appointments List */}
      <div className="medical-card overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
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
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{appointment.date}</div>
                    <div className="text-sm text-gray-500">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {appointment.patient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {appointment.doctor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {appointment.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      href={`/appointments/${appointment.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </Link>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar View Toggle */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">5</span> appointments
        </p>
        <button className="medical-button-secondary">
          View Calendar
        </button>
      </div>
    </div>
  );
}

