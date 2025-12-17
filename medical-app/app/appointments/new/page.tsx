"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewAppointmentPage() {
  const [formData, setFormData] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    type: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Appointment scheduled:", formData);
    alert("Appointment scheduled successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/appointments"
          className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-block"
        >
          ← Back to Appointments
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule New Appointment</h1>
        <p className="text-gray-600">Fill in the details to schedule a new appointment</p>
      </div>

      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="medical-card space-y-6">
          <div>
            <label htmlFor="patient" className="block text-sm font-medium text-gray-700 mb-2">
              Patient *
            </label>
            <select
              id="patient"
              name="patient"
              required
              value={formData.patient}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a patient</option>
              <option value="1">John Doe</option>
              <option value="2">Jane Smith</option>
              <option value="3">Robert Johnson</option>
              <option value="4">Emily Davis</option>
              <option value="5">Michael Brown</option>
            </select>
          </div>

          <div>
            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
              Doctor *
            </label>
            <select
              id="doctor"
              name="doctor"
              required
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a doctor</option>
              <option value="dr-smith">Dr. Sarah Smith</option>
              <option value="dr-johnson">Dr. Michael Johnson</option>
              <option value="dr-williams">Dr. Emily Williams</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                Time *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Type *
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="general">General Checkup</option>
              <option value="follow-up">Follow-up</option>
              <option value="consultation">Consultation</option>
              <option value="annual">Annual Exam</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Additional notes or special instructions..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="medical-button-primary flex-1"
            >
              Schedule Appointment
            </button>
            <Link
              href="/appointments"
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

