import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const FilterSelect = ({
  selectTitle,
  selectItems,
  selected,
  onItemSelection,
}) => {
  return (
    <>
      <Box sx={{ minWidth: 300 }}>
        <FormControl sx={{ minWidth: 300 }} size="normal">
          <InputLabel
            id="demo-simple-select-label"
            sx={{ color: "black", fontWeight: "medium" }}
          >
            {selectTitle}
          </InputLabel>
          <Select
            label="SELECCIONAR TABLA"
            sx={{ bgcolor: "background.paper", fontWeight: "medium" }}
            value={selected}
            onChange={onItemSelection}
          >
            {selectItems.map((el, index) => (
              <MenuItem key={index} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default FilterSelect;
