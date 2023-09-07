import { filterChange } from "../reducers/filterReducer";
import { useSelector, useDispatch } from "react-redux";

const VisinilityFilter = () => {
  const dispatch = useDispatch();
  const filterSelected = (filter) => {
    // setFilter(filter);
    dispatch(filterChange(filter));
  };
  const filter = useSelector((state) => {
    return state.filter;
  });
  return (
    <div>
      all{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
        checked={filter === "ALL"}
      />
      important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("IMPORTANT")}
      />
      nonimportant{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NONIMPORTANT")}
      />
    </div>
  );
};
export default VisinilityFilter;
