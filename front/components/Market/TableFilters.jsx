import { setListDisplay } from "@/services/action/list.action";
import { setStableState } from "@/services/action/stable.action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const TableFilters = () => {
    const [showStable, setShowStable] = useState(true);
    const [showFavList, setShowFavList] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setStableState(showStable));
        dispatch(setListDisplay(showFavList));
    }, [showStable, showFavList]);
    return (
        <div className="">
            <div className="flex flex-col justify-between my-5 p-3 gap-8">
                <div
                    className={
                        showFavList
                            ? "no-list-btn cursor-pointer"
                            : "no-list-btn active cursor-pointer"
                    }
                    onClick={() => setShowFavList(false)}
                >
                    <p className="mt-10 stable-checkbox-container p-3 text-center bg-white rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg">
                        Voir tout
                    </p>
                </div>
                <div className="mt-10 stable-checkbox-container p-3 text-center cursor-pointer bg-white rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg">
                    <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 hidden text-bg cursor-pointer"
                        id="stableCoin"
                        defaultChecked={true}
                        onChange={() => setShowStable(!showStable)}
                    />
                    <label htmlFor="stableCoin" className="p-2 cursor-pointer">
                        {showStable ? "Avec stable coin" : "Sans stable coin"}
                    </label>
                </div>

                <div
                    className={
                        showFavList
                            ? "fav-list active flex flex-row w-full cursor-pointer"
                            : "fav-list flex flex-row w-full cursor-pointer"
                    }
                    onClick={() => setShowFavList(true)}
                >
                    <p className="mt-10 stable-checkbox-container cursor-pointer text-center p-3 bg-white rounded-lg uppercase font-bold text-md bg-move bg-gradient-to-r from-purple via-red to-purple text-transparent bg-clip-text shadow-lg w-full">
                        Liste des favoris
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TableFilters;
