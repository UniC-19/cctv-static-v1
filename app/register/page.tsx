'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    role: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/auth/newuser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log('Register Response:', data);
    setMessage(data.error || 'User registered successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        // onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4 text-black"
      >
        <h1 className="text-2xl font-bold text-center">New User</h1>

        {message && <p className="text-red-500 text-center">{message}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded-md"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Phone Number"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="w-full border p-2 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-2 rounded-md"
        />
        <select
          name="role"
          required
          className="w-full border p-2 rounded-md"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="technician">Technician</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
