import StatCard from "./components/StatCard";

export default function Home() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your medical management system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Patients"
          value="1,247"
          icon="👥"
          trend="up"
          trendValue="12% this month"
        />
        <StatCard
          title="Today's Appointments"
          value="23"
          icon="📅"
          trend="up"
          trendValue="3 new"
        />
        <StatCard
          title="Pending Records"
          value="8"
          icon="📋"
          trend="down"
          trendValue="2 resolved"
        />
        <StatCard
          title="Active Doctors"
          value="12"
          icon="👨‍⚕️"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="medical-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Appointments</h2>
          <div className="space-y-4">
            {[
              { time: "09:00 AM", patient: "Salman Soy", type: "General Checkup", status: "confirmed" },
              { time: "10:30 AM", patient: "Jane Smith", type: "Follow-up", status: "confirmed" },
              { time: "02:00 PM", patient: "Robert Johnson", type: "Consultation", status: "pending" },
            ].map((apt, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{apt.patient}</p>
                  <p className="text-sm text-gray-600">{apt.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{apt.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    apt.status === "confirmed" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="medical-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
          <a
              href="/patients/new"
              className="block w-full medical-button-primary text-center"
            >
              Add New Patient
            </a>
            <a
              href="/appointments/new"
              className="block w-full medical-button-primary text-center"
            >
              Schedule Appointment
            </a>
            <a
              href="/patients"
              className="block w-full medical-button-secondary text-center"
            >
              View All Patients
          </a>
          <a
              href="/appointments"
              className="block w-full medical-button-secondary text-center"
            >
              View All Appointments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}