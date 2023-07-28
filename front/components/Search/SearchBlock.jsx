import SearchBar from "@/components/Search/SearchBar";

export default function SearchBlock({ properties }) {
    return (
        <div className="relative">
            <div className="bg-gray-500 w-2/3 h-72 pt-8 flex flex-col px-14">
                <span className="uppercase text-3xl text-white font-bold">
                    Housechain
                </span>
                <p className="mt-4 text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pharetra tempus elit. Suspendisse tincidunt ex ut
                    nibh convallis, eget pellentesque nisl elementum.
                </p>
            </div>
            <div className="w-1/2">
                <SearchBar
                    properties={properties}
                    // products={products}
                />
            </div>
        </div>
    );
}
