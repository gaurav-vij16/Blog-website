import { useContext } from "react";
import { AppContext } from "../Contexts/Appcontext";
import Loading from "./Loading";

const Footer = () => {
    const { currPage, handlePageChange, totalPages , isLoading} = useContext(AppContext);

    return (
        <>

        {isLoading ? <></> :
        (<div className="w-full h-full flex justify-evenly items-center border shadow-2xl px-1 ">
        <div className="flex flex-row gap-x-2">
            {currPage > 1 && (
                <button className=" text-center h-[40px] mt-4 rounded-md w-[80px] border border-black font-bold text-xl" onClick={() => handlePageChange(currPage - 1)}>
                    prev
                </button>
            )}

            {currPage < totalPages && (
                <button className="text-center h-[40px] mt-4 rounded-md w-[80px] border border-black font-bold text-xl" onClick={() => handlePageChange(currPage + 1)}>
                    next
                </button>
            )}
        </div>
        <p className="text-black font-bold "> Page {currPage} of {totalPages}</p>
    </div>)
        }
        </>
    );
};


export default Footer;
