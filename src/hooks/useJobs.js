import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function useJobs(statusFilter = 'open') {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const q = statusFilter 
                    ? query(collection(db, 'jobs'), where('status', '==', statusFilter))
                    : collection(db, 'jobs');
                const querySnapshot = await getDocs(q);
                const jobsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setJobs(jobsData);
            } catch (err) {
                console.error("Error fetching jobs: ", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [statusFilter]);

    return { jobs, loading, error };
}
