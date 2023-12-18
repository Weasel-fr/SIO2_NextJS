// import type { Client } from "@prisma/client";


// pour typer : export default function RowClient(props:{client:Client})
export default function RowClient(props:any) {
    return (
        <tr>
            <td>{props.client.id}</td>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.password}</td>
        </tr>
    );    
}