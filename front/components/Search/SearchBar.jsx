"use client";

import Select from "../Fields/Select";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBarContext } from "@/contexts/SearchBarContext";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar({ properties }) {
    console.log(properties);
    const { firstSelectedValue, secondSelectedValue } =
        useContext(SearchBarContext);
    const [filteredProperties, setFilteredProperties] = useState(properties);
    // const [filteredProducts, setFilteredProducts] = useState(products);
    const router = useRouter();

    // useEffect(() => {
    //     if (firstSelectedValue !== null) {
    //         if (firstSelectedValue.value === null) {
    //             setFilteredProducts(products);
    //         } else {
    //             let newFilteredProductList = [];
    //             products.forEach((product) => {
    //                 if (firstSelectedValue.productIds.includes(product.id)) {
    //                     newFilteredProductList.push(product);
    //                 }
    //             });
    //             setFilteredProducts(newFilteredProductList);
    //         }
    //     }
    // }, [firstSelectedValue]);

    // useEffect(() => {
    //     if (secondSelectedValue !== null) {
    //         let newFilteredCompaniesList = [];
    //         companies.forEach((company) => {
    //             company.productIds.forEach((productsIds) => {
    //                 if (productsIds === secondSelectedValue.id) {
    //                     newFilteredCompaniesList.push(company);
    //                 }
    //             });
    //         });
    //         setFilteredCompanies(newFilteredCompaniesList);
    //     }
    // }, [secondSelectedValue]);

    // function handleRouter() {
    //     if (
    //         firstSelectedValue !== null &&
    //         firstSelectedValue.name !== "Centre" &&
    //         secondSelectedValue !== null
    //     ) {
    //         router.push(
    //             `/centres/${firstSelectedValue.slug}/${secondSelectedValue.slug}/choix-du-creneau`
    //         );
    //     } else if (
    //         firstSelectedValue !== null &&
    //         firstSelectedValue.name !== "Centre" &&
    //         secondSelectedValue === null
    //     ) {
    //         router.push(`/centres/${firstSelectedValue.slug}`);
    //     } else if (
    //         (firstSelectedValue === null ||
    //             firstSelectedValue.name === "Centre") &&
    //         secondSelectedValue !== null
    //     ) {
    //         router.push(`/prestations/${secondSelectedValue.slug}`);
    //     }
    // }

    return (
        <div className="flex bg-white rounded-lg justify-between divide-x">
            <div className="w-5/12 py-2">
                <Select
                    items={filteredProperties}
                    label="Quelle propriété ?"
                    placeholder="Propriétés"
                    type="properties"
                    defaultValue={true}
                />
            </div>
            {/* <div className="w-5/12 py-2">
                <Select
                    items={filteredProducts}
                    label="Quoi ?"
                    placeholder="Prestation"
                    type="products"
                />
            </div> */}
            {/* <div onClick={handleRouter} className="flex items-center">
                <button className="bg-primary text-white rounded-r-lg px-12 inline-flex h-full items-center">
                    <MagnifyingGlassIcon className="w-5 h-5 mr-4" />
                    Réserver
                </button>
                <span className="sr-only">Réserver</span>
            </div> */}
        </div>
    );
}
