'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Layout from './Layout';

interface Client {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
}

interface ClientsResponse {
  locations: Client[];
  total: number;
}

export default function ClientsCrud() {
  const [clientsData, setClientsData] = useState<ClientsResponse>({
    locations: [],
    total: 0
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [deleting, setDeleting] = useState<string | null>(null);
  const limit = 6;

  const fetchClients = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/clients?page=${page}&limit=${limit}`);
      const data = await res.json();
      setClientsData(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients(page);
  }, [page]);

  const handleDelete = async (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this client?');
    if (!confirmed) return;

    setDeleting(id);
    try {
      const res = await fetch(`/api/clients/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        // Refresh current page after deletion
        fetchClients(page);
      }
    } catch (err) {
      console.error('Failed to delete client', err);
    } finally {
      setDeleting(null);
    }
  };

  const totalPages = Math.ceil(clientsData.total / limit);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Our Clients</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Manage client logos and names</p>
          </div>
          <Link
            href="/clients/add"
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-[#7AA859] hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            <FiPlus className="mr-2" />
            Add Client
          </Link>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : clientsData.locations.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No clients found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Get started by adding a new client.
            </p>
            <div className="mt-6">
              <Link
                href="/clients/add"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#7AA859] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <FiPlus className="-ml-1 mr-2 h-5 w-5" />
                Add Client
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">#</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Logo</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Created At</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {clientsData.locations.map((client, index) => (
                      <tr key={client._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        <td className="px-6 py-4">{(page - 1) * limit + index + 1}</td>
                        <td className="px-6 py-4">
                          <Image
                            src={client.image}
                            alt={client.name}
                            width={60}
                            height={60}
                            className="rounded border border-gray-300 dark:border-gray-600 object-contain"
                          />
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-800 dark:text-white">{client.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                          {new Date(client.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-4">
                            <Link
                              href={`/clients/edit/${client._id}`}
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                              title="Edit"
                            >
                              <FiEdit className="h-5 w-5" />
                            </Link>
                            <button
                              onClick={() => handleDelete(client._id)}
                              disabled={deleting === client._id}
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200 disabled:opacity-50"
                              title="Delete"
                            >
                              <FiTrash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Enhanced Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <button
                  onClick={() => setPage(p => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                >
                  <IoMdArrowBack />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setPage(i + 1)}
                    className={`px-4 py-2 rounded-lg ${page === i + 1 ? 'bg-[#7AA859] text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 disabled:opacity-50"
                >
                  <IoMdArrowForward />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}