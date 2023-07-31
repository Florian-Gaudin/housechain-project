import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import axios from "axios";

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

    // const api = axios.create({
    //     baseURL: url,
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // });

    // return api;

    // export default api;
}

// export async function getCompanies(limit, offset) {
//     let url = `${process.env.NEXT_PUBLIC_API}/api/companies`;

//     if (limit) {
//         url += `?limit=${limit}`;
//     }

//     if (offset) {
//         url += `${limit ? "&" : "?"}offset=${offset}`;
//     }

//     const res = await fetch(url, {
//         next: { revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_MEDIUM) },
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// }

// export async function getProduct(slugCompany, slugProductTemplate) {
//     let url = `${process.env.NEXT_PUBLIC_API}/api/products`;

//     if (slugCompany) {
//         url += `?slugCompany=${slugCompany}`;
//     }

//     if (slugProductTemplate) {
//         url += `${
//             slugCompany ? "&" : "?"
//         }slugProductTemplate=${slugProductTemplate}`;
//     }

//     const res = await fetch(url, {
//         next: { revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_MEDIUM) },
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// }
