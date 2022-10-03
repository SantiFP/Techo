import { Table } from '@mui/material';
import { useState } from 'react';
import * as XLSX from 'xlsx'

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
            <div>
                <table>
                    <thead>
                    <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Indicadores
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                        {items.map((d) => (
                            <tr key={d.id}>
                                <th>{d.id}</th>
                                <td>{d.Tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TestLoad