import { type UseFetchParams } from "./useFetch";

type FilterStatusProps = {
  setQStatus: React.Dispatch<React.SetStateAction<UseFetchParams["qStatus"]>>
};

function FilterStatus({
  setQStatus,
}: FilterStatusProps) {
  return (
    <div className="filter-status">
      <select onChange={evt => {
        setQStatus(evt.target.value as UseFetchParams["qStatus"])
      }}>
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export { FilterStatus };
