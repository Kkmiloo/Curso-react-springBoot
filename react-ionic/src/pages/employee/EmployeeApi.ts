import { headset } from "ionicons/icons";
import Employee from "./Employee";

export async function searchEmployees() {

    const res = await fetch('http://localhost/api/employees',{
        method: 'GET',
        headers :{ 'Content-Type': 'application/json'}
    })

    return await res.json();

}

export async function removeEmployee(id:string) {

    await fetch('http://localhost/api/employees/'+id,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
} 

export async function saveEmployee(employee: Employee) {

    await fetch('http://localhost/employees',
    {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify(employee)
    }) 

}


export async function searchEmployeeById(id:string){

    const res = await fetch('http://localhost/api/employees/'+id,{
    method: 'GET',
    headers : {
        'Content-Type': 'application/json'
    }
    })

    return await res.json();


}

