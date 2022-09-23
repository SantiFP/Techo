import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button  } from '@mui/material';
import * as XLSX from 'xlsx'
import { useState } from 'react';

const columns = [
  
  
];

const rows = [
  
];

export default function DataGridDemo() {
    const [colDefs , setColDefs] = useState(columns);
    const [data , setData] = useState();

    const convertToJson = (headers , data) =>{
        const rows = [];
        data.forEach(row => {
            let rowData = {}
            row.forEach((element , index) => {rowData[headers[ index]] = element})
            rows.push(rowData)
        });
        return rows
      
    }
    
    const importExcel = (e) =>{
        const file = e.target.files[0]


        const reader = new FileReader()
        reader.onload = (event) =>{
            
            //parse data
            const bstr = event.target.result;
            const workBook = XLSX.read(bstr, {type:'binary'});

            //get first sheet
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];

            //convert to array

            const fileData = XLSX.utils.sheet_to_json(workSheet, {header:1} )
            
            const headers = fileData[1];
            const heads = headers.map(head =>({title: head , field: head}))

            setColDefs(heads)

            fileData.splice(0,2);

         setData(convertToJson(headers , fileData))


        }

    reader.readAsBinaryString(file)
    } 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
        
        <Button
       
        variant="contained"
        component="label"  >
            Descargue archivo
        <input
         onChange={importExcel}
        type="file"
        hidden 
        
        />
        </Button>
        
      <DataGrid
     
        data={rows}
        columns={colDefs}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
       
    </Box>
  );
}
