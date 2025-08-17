"use client";
import { useEffect, useState } from "react";
import { HiOutlineMapPin, HiOutlineBriefcase } from "react-icons/hi2";
import ApplyModal from "./ApplyModal";

interface Job {
  _id: string;
  title: string;
  location: string;
  description: string;
  type?: string;
}

export default function OpenPositionsSection() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section id="positions" className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#7AA859] bg-[#7AA859]/10 rounded-full mb-4">
            Career Opportunities
          </span>
          <h2 className="text-4xl font-bold font-poppins dark:text-white mb-4">
            Join Our Growing Team
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Discover your next career move with our exciting opportunities
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7AA859]"></div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid gap-8">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 transition-all hover:border-[#7AA859]/30 hover:shadow-lg dark:hover:shadow-gray-700/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-4 flex-1 min-w-0"> {/* Added min-w-0 to prevent text overflow */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#7AA859] transition-colors truncate"> {/* Added truncate */}
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <HiOutlineMapPin className="mr-2 h-5 w-5 text-[#7AA859]" />
                        <span>{job.location}</span>
                      </div>
                      {job.type && (
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <HiOutlineBriefcase className="mr-2 h-5 w-5 text-[#7AA859]" />
                          <span>{job.type}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3"> {/* Added line-clamp */}
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0"> {/* Ensures button doesn't shrink */}
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="whitespace-nowrap px-6 py-3 bg-[#7AA859] text-white font-medium rounded-full hover:bg-[#6a9750] transition-colors shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Currently no open positions. Please check back later.
            </p>
          </div>
        )}
      </div>

      {selectedJob && (
        <ApplyModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </section>
  );
}