import { Table } from '@mui/material';
import { useState } from 'react';
import * as XLSX from 'xlsx'
import TablePerYear from './TablePerYear/TablePerYear';

const TestLoad = () =>{
    const [items, setItems] = useState([]);
    const readExcel = (file) =>{
        
        const promise = new Promise (( resolve, reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) =>{
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray,{type:'buffer'})
                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname]

                const data = XLSX.utils.sheet_to_json(ws)

                resolve(data);

            };

            fileReader.onerror=(error) =>{
                reject(error);
            };
            
        });
   
    promise.then ((d) => {
        console.log(d);
        setItems(d)
    })
}
    return(
        <>
        <input type={"file"} onChange={(e) => {
            const file = e.target.files[0]
            readExcel (file);
            }}  
            />
            <TablePerYear rowsSelection={items} readExcel={readExcel}/>
        </>
    )
}

export default TestLoad