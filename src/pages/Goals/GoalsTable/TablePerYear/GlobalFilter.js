import React from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const GlobalFilter = ({filter , setFilter} ) =>{
    return(
        <span  >
            <TextField
            id="outlined-basic"
            placeholder="Buscar..."
            variant="outlined"
            InputProps={{
            endAdornment: (
              <InputAdornment position="start" >
                <SearchIcon />
              </InputAdornment>
            ),
          }}
             size="small" value={filter || ''}  onChange={(e) => setFilter(e.target.value)}/>
        </span>
    )
}