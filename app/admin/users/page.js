"use client";

import { useEffect, useState } from "react";
import { Users, Plus, Trash2, X, Search, Edit2 } from "lucide-react";
import FormMessageDialog from "../../components/FormMessageDialog";
import { PERSONAS } from "@/utils/personas";
import { toHeadingCase } from "@/lib/headingCase";

const personaOptions = Object.entries(PERSONAS);

const emptyForm = {
  name: "",
  email: "",
  password: "",
  persona: "",
};

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);

  const fetchUsers = () => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const url = editingUserId
        ? `/api/admin/users/${editingUserId}`
        : "/api/admin/users";
      const method = editingUserId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setShowForm(false);
        setFormData(emptyForm);
        setEditingUserId(null);
        fetchUsers();
        setFeedback({
          variant: "success",
          title: editingUserId ? "User updated" : "User created",
          message: editingUserId
            ? "User details have been updated successfully."
            : "The new admin user has been added successfully.",
        });
      } else {
        setError(data.error || "Failed to save user");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      password: "",
      persona: user.persona,
    });
    setEditingUserId(user._id);
    setError("");
    setShowForm(true);
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to remove ${name}?`)) return;

    const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (res.ok) {
      fetchUsers();
    } else {
      setFeedback({
        variant: "error",
        title: "Delete failed",
        message: data.error || "Failed to delete user",
      });
    }
  };

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.persona?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <FormMessageDialog
        open={feedback !== null}
        onClose={() => setFeedback(null)}
        variant={feedback?.variant ?? "error"}
        title={feedback?.title}
        message={feedback?.message ?? ""}
      />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-brand-600" />
            {toHeadingCase("User management")}
          </h1>
          <p className="text-[13px] text-slate-500 mt-1">
            Add or remove admin panel users
          </p>
        </div>
        <button
          onClick={() => {
            setFormData(emptyForm);
            setError("");
            setEditingUserId(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25 self-start"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="mb-5">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full h-10 pl-9 pr-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Added On
                </th>
                <th className="text-right px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-[14px] text-slate-400"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filtered.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-[13px] font-bold uppercase shrink-0">
                          {user.name?.charAt(0)}
                        </div>
                        <span className="text-[13.5px] font-semibold text-slate-900">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-[13px] text-slate-600">
                      {user.email}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block px-2.5 py-1 text-[12px] font-medium rounded-md ${
                          user.persona === "administrator"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {PERSONAS[user.persona] || user.persona}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-[12px] text-slate-400">
                      {new Date(user.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(user)}
                          className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                          title="Edit user"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(user._id, user.name)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Remove user"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit User Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                {editingUserId
                  ? toHeadingCase("Edit user")
                  : toHeadingCase("Add new user")}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingUserId(null);
                  setFormData(emptyForm);
                  setError("");
                }}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              {error && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-[13px] text-red-700 font-medium">
                    {error}
                  </p>
                </div>
              )}
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="John Doe"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="john@bluestreakindia.com"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Password {!editingUserId && "*"}
                  {editingUserId && (
                    <span className="text-slate-500 text-[12px] font-normal">
                      {" "}
                      (leave empty to keep current password)
                    </span>
                  )}
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required={!editingUserId}
                  minLength={6}
                  placeholder={
                    editingUserId
                      ? "Leave empty to keep current password"
                      : "Minimum 6 characters"
                  }
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Role *
                </label>
                <select
                  value={formData.persona}
                  onChange={(e) =>
                    setFormData({ ...formData, persona: e.target.value })
                  }
                  required
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                >
                  <option value="">Select a role</option>
                  {personaOptions.map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingUserId(null);
                    setFormData(emptyForm);
                    setError("");
                  }}
                  className="flex-1 h-10 border border-slate-200 text-slate-700 text-[13px] font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 h-10 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingUserId
                      ? "Update User"
                      : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
