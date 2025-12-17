import Link from "next/link";

// Mock patient detail data
const getPatientDetails = (id: string) => {
  const patients: Record<string, any> = {
    "1": {
      id: 1,
      name: "John Doe",
      age: 45,
      gender: "Male",
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
      address: "123 Main St, City, State 12345",
      dateOfBirth: "1979-03-15",
      bloodType: "O+",
      allergies: "Penicillin, Latex",
      emergencyContact: "Jane Doe (Spouse) - +1 (555) 123-4568",
      lastVisit: "2024-01-15",
      status: "Active",
      medicalHistory: [
        { date: "2024-01-15", diagnosis: "Hypertension", doctor: "Dr. Smith" },
        { date: "2023-11-20", diagnosis: "Annual Checkup", doctor: "Dr. Smith" },
        { date: "2023-08-10", diagnosis: "Flu", doctor: "Dr. Johnson" },
      ],
    },
  };
  return patients[id] || patients["1"];
};

export default function PatientDetailPage({ params }: { params: { id: string } }) {
  const patient = getPatientDetails(params.id);

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/patients"
          className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block"
        >
          ← Back to Patients
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{patient.name}</h1>
            <p className="text-gray-600">Patient ID: #{patient.id}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/patients/${patient.id}/edit`}
              className="medical-button-secondary"
            >
              Edit Patient
            </Link>
            <Link
              href={`/appointments/new?patient=${patient.id}`}
              className="medical-button-primary"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="medical-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Age</p>
                <p className="text-base font-medium text-gray-900">{patient.age} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gender</p>
                <p className="text-base font-medium text-gray-900">{patient.gender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="text-base font-medium text-gray-900">{patient.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Blood Type</p>
                <p className="text-base font-medium text-gray-900">{patient.bloodType}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-base font-medium text-gray-900">{patient.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-base font-medium text-gray-900">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-base font-medium text-gray-900">{patient.email}</p>
              </div>
            </div>
          </div>

          {/* Medical History */}
          <div className="medical-card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Medical History</h2>
            <div className="space-y-4">
              {patient.medicalHistory.map((record: any, idx: number) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{record.diagnosis}</p>
                      <p className="text-sm text-gray-600">{record.doctor}</p>
                    </div>
                    <p className="text-sm text-gray-500">{record.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Card */}
          <div className="medical-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Status</h2>
            <span
              className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                patient.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {patient.status}
            </span>
            <p className="text-sm text-gray-600 mt-2">Last Visit: {patient.lastVisit}</p>
          </div>

          {/* Allergies */}
          <div className="medical-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Allergies</h2>
            <div className="flex flex-wrap gap-2">
              {patient.allergies.split(", ").map((allergy: string, idx: number) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full"
                >
                  {allergy}
                </span>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="medical-card">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h2>
            <p className="text-sm text-gray-900">{patient.emergencyContact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

