import CustomTableBudget from "pages/Budget/Table/CustomTableBudget";
import Numbers from "../../../data/budget.json";

const columns = Numbers.columns;

const rows = Numbers.rows;

const Table = () => {
  return <CustomTableBudget columns={columns} rows={rows} />;
};

export default Table;
