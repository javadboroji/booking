import Drop from "@/components/custom/Drop/Drop";
import React, { useEffect, useReducer } from "react"; 
import { CiSearch } from "react-icons/ci";
import searchItems from "@/app/Data/SearchingForm";
type searchState = {
  destination: string;
  type: string;
  duration: string;
};

type Action =
  | {
      type: "destination";
      payload: string;
    }
  | {
      type: "type";
      payload: string;
    }
  | {
      type: "duration";
      payload: string;
    };


function Items() {
  /*================================ Search Reducer ==============================*/
  const searchReducer = (state: searchState, action: Action) => {
    switch (action.type) {
      case "destination":
        return { ...state, destination: action.payload };
      case "type":
        return { ...state, type: action.payload };
      case "duration":
        return { ...state, duration: action.payload };
      default:
        return state;
    }
  };
  const initialSearchState = {
    destination: "",
    type: "",
    duration: "",
  };
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);
/*================================ SearchIng Handler ==============================*/
  const searchHandler = () => {
    console.log(state);
  };
  return (
    <div className=" flex items-center p-2  w-[65%]">
      {searchItems?.map((item) => {
        return (
          <div
            className="m-3 relative flex items-center w-1/3 after:content-[''] after:absolute after:top-0 after:right-0 after:w-px after:h-[60%] after:bg-[#E1E4E5]"
            key={item.id}
          >
            <div className="p-3"> {item.icon}</div>
            <div className=" ml-2 ">
              {/* <span> {item.title}</span> */}

              <Drop
                value={state[item.name as keyof typeof state]}
                onChange={(val) =>
                  dispatch({ type: item.name  as any, payload: val })
                }
                name={item.dropPlace}
                selectWidth="280px"
                items={item.drop}
                placeholder={item.name}
              />
            </div>
          </div>
        );
      })}

      <button
        type="submit"
        onClick={searchHandler}
        className="group relative  w-1/3 overflow-hidden  text-white  p-3  hover:cursor-pointer hover:text-white 
          hover:bg-transparent   rounded-full  bg-[#1CA8CB]   "
      >
        <span
          className="absolute left-0 top-0 h-full w-full bg-[#113D48] origin-left scale-x-0 transition-transform duration-500 ease-in-out
           group-hover:scale-x-100 rounded-full z-0"
        />

        <div className="relative z-10 flex items-center w-full">
          <CiSearch className="text-3xl" />
          <span className="px-2"> Search </span>
        </div>
      </button>
    </div>
  );
}

export default Items;
