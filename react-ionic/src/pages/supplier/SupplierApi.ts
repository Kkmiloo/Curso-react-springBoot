import Supplier from "./Supplier";

export async function searchSuppliers() {

    const res = await fetch('http://localhost:8080/api/suppliers',{
        method: 'GET',
        headers :{ 'Content-Type': 'application/json'}
    })

    return await res.json();

}

export async function removeSupplier(id:string) {

    await fetch('http://localhost:8080/api/suppliers/'+id,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
} 

export async function saveSupplier(supplier: Supplier) {

    await fetch('http://localhost:8080/suppliers',
    {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify(supplier)
    }) 

}


export async function searchSupplierById(id:string){

    const res = await fetch('http://localhost:8080/api/suppliers/'+id,{
    method: 'GET',
    headers : {
        'Content-Type': 'application/json'
    }
    })

    return await res.json();


}

