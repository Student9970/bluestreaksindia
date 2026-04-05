"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Package,
  Search,
  UploadCloud,
} from "lucide-react";
import { toHeadingCase } from "@/lib/headingCase";

const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

const categories = [
  "Oils & Lubricants",
  "Coolants",
  // "Greases",
  // "Industrial",
  // "Automotive",
  // "Transport & Heavy",
  "Others",
];

const emptyForm = {
  name: "Test",
  spec: "spec test",
  category: "Coolants",
  tags: "tag1",
  desc: "just a small desc",
  image: "",
  badge: "badge1",
  price: "599",
};

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState("");

  const uploadProductImage = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setImageUploadError("Please choose an image file.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setImageUploadError("Image must be 4MB or smaller.");
      return;
    }
    setImageUploadError("");
    setImageUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload-image", {
        method: "POST",
        body: fd,
        credentials: "include",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Upload failed");
      if (data.url) {
        setFormData((prev) => ({ ...prev, image: data.url }));
      }
    } catch (e) {
      setImageUploadError(e.message || "Upload failed");
    } finally {
      setImageUploading(false);
    }
  };

  const fetchProducts = () => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      price:
        formData.price === "" || formData.price === null
          ? null
          : Number(formData.price),
    };

    const url = editing
      ? `/api/admin/products/${editing}`
      : "/api/admin/products";
    const method = editing ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setShowForm(false);
    setEditing(null);
    setFormData(emptyForm);
    setSaving(false);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name || "",
      spec: product.spec || "",
      category: product.category || "",
      tags: (product.tags || []).join(", "),
      desc: product.desc || "",
      image: product.image || "",
      badge: product.badge || "",
      price: product.price != null ? String(product.price) : "",
    });
    setEditing(product._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  const openAddForm = () => {
    setFormData(emptyForm);
    setEditing(null);
    setShowForm(true);
  };

  const filtered = products.filter(
    (p) =>
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.category?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Package className="w-6 h-6 text-brand-600" />
            {toHeadingCase("Products")}
          </h1>
          <p className="text-[13px] text-slate-500 mt-1">
            Manage your product catalog
          </p>
        </div>
        <button
          onClick={openAddForm}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-600 text-white text-[13px] font-semibold rounded-lg hover:bg-brand-700 transition-colors shadow-sm shadow-brand-600/25 self-start"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="mb-5">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full h-10 pl-9 pr-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
          />
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-right px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="text-left px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Badge
                </th>
                <th className="text-right px-5 py-3 text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-brand-600 border-t-transparent rounded-full animate-spin" />
                    </div>
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-[14px] text-slate-400"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                filtered.map((product) => (
                  <tr
                    key={product._id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <p className="text-[13.5px] font-semibold text-slate-900">
                        {product.name}
                      </p>
                      <p className="text-[12px] text-slate-400 mt-0.5">
                        {product.spec}
                      </p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-[12px] font-medium rounded-md">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      {product.price != null ? (
                        <span className="text-[13px] font-semibold text-slate-800">
                          &#8377;{Number(product.price).toLocaleString("en-IN")}
                        </span>
                      ) : (
                        <span className="text-[12px] text-slate-300">
                          &mdash;
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex flex-wrap gap-1">
                        {(product.tags || []).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-brand-50 text-brand-700 text-[11px] font-medium rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      {product.badge ? (
                        <span className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 text-[12px] font-medium rounded-md">
                          {product.badge}
                        </span>
                      ) : (
                        <span className="text-[12px] text-slate-300">
                          &mdash;
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleEdit(product)}
                          className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
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

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">
                {editing
                  ? toHeadingCase("Edit product")
                  : toHeadingCase("Add new product")}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="e.g. Engine Oil (Semi-Synthetic)"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Specification
                </label>
                <input
                  type="text"
                  value={formData.spec}
                  onChange={(e) =>
                    setFormData({ ...formData, spec: e.target.value })
                  }
                  placeholder="e.g. Premium 10W-40, 5L drum"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                    Price (&#8377;)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    placeholder="e.g. 499"
                    className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    required
                    className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  >
                    <option value="">Select category</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                    Badge
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) =>
                      setFormData({ ...formData, badge: e.target.value })
                    }
                    placeholder="e.g. Best Seller"
                    className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) =>
                    setFormData({ ...formData, tags: e.target.value })
                  }
                  placeholder="e.g. Automotive, Industrial"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Product image
                </label>
                <p className="text-[12px] text-slate-500 mb-2">
                  Drag and drop or click to choose a file (max 4MB, one image).
                  Images are stored in Cloudinary.
                </p>
                {formData.image ? (
                  <div className="space-y-2 mb-3">
                    <div className="relative rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={formData.image}
                        alt="Product preview"
                        className="w-full max-h-40 object-contain bg-white"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: "" })}
                      className="text-[12px] font-medium text-slate-600 hover:text-red-600"
                    >
                      Remove image
                    </button>
                  </div>
                ) : null}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const f = e.dataTransfer.files?.[0];
                    if (f) uploadProductImage(f);
                  }}
                  className="border border-dashed border-slate-300 rounded-lg bg-slate-50/80 hover:bg-slate-50 transition-colors p-4 text-center"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    id="product-image-file"
                    disabled={imageUploading}
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadProductImage(f);
                      e.target.value = "";
                    }}
                  />
                  <label
                    htmlFor="product-image-file"
                    className={`flex flex-col items-center gap-2 ${imageUploading ? "pointer-events-none opacity-70" : "cursor-pointer"}`}
                  >
                    <UploadCloud className="w-10 h-10 text-slate-400" />
                    <span className="text-[13px] text-slate-600">
                      {imageUploading
                        ? "Uploading…"
                        : "Choose a file or drag and drop"}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      JPEG, PNG, WebP, GIF up to 4MB
                    </span>
                  </label>
                </div>
                {imageUploadError ? (
                  <p className="text-[12px] text-red-600 mt-2">
                    {imageUploadError}
                  </p>
                ) : null}
                <label className="block text-[12px] font-medium text-slate-500 mt-3 mb-1">
                  Or paste image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  placeholder="https://…"
                  className="w-full h-10 px-3.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                  Description
                </label>
                <textarea
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({ ...formData, desc: e.target.value })
                  }
                  rows={3}
                  placeholder="Product description..."
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-lg text-[13px] text-slate-700 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
                    : editing
                      ? "Update Product"
                      : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
