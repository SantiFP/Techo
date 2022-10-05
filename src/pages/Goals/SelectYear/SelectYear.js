//Material
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";

const SelectYear = ({ cantidad, addProduct }) => {
  return (
    <>
      <Box sx={{ minWidth: 220 }}>
        <Typography paddingBottom={1.8}>
          Selecciona el año que deseas ver:
        </Typography>
        <FormControl sx={{ minWidth: 220 }} size="small">
          <InputLabel id="demo-simple-select-label">SELECCIONAR</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cantidad}
            label="SELECCIONAR"
            onChange={addProduct}
          >
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectYear;
