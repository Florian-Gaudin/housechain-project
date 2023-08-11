import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export async function getProperties(page, limit) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    let url = `${API_URL}/properties`;

    if (page) {
        url += `?page=${page}`;
    }

    if (limit) {
        url += `${page ? "&" : "?"}limit=${limit}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
