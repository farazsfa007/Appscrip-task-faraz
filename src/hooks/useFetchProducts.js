import { useEffect, useState } from "react";
/**
 * useFetchProducts - attempt to fetch from API, fall back to local array if fetch fails
 * @param {string} url API url
 * @param {Array} fallback fallback array
 */

export function useFetchProducts(url, fallback = []) {
    const [products, setProducts] = useState(fallback);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Network response not ok");
            return res.json();
        })
        .then(data => { if (mounted) { setProducts(data); setLoading(false); } })
        .catch(err => {
            console.warn("API fetch failed, using fallback data", err);
            if (mounted) { setError(true); setLoading(false); setProducts(fallback); }
        });
        return () => { mounted = false; };
    }, [url, JSON.stringify(fallback)]);

    return { products, loading, error };
}
