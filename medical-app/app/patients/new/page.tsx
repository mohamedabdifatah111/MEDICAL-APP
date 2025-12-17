"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewPatientPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    bloodType: "",
    allergies: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("New patient created:", formData);
    alert("Patient added successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <Link
          href="/patients"
          className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block"
        >
          ← Back to Patients
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Add New Patient</h1>
        <p className="text-sm sm:text-base text-gray-600">Enter patient information to create a new record</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="medical-card space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="patient@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St, City, State 12345"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-2">
                Blood Type
              </label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
              Allergies
            </label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Penicillin, Latex, etc. (comma separated)"
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  required
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jane Doe (Spouse)"
                />
              </div>

              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  required
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1 (555) 123-4568"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="medical-button-primary flex-1"
            >
              Create Patient
            </button>
            <Link
              href="/patients"
              className="medical-button-secondary flex-1 text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

