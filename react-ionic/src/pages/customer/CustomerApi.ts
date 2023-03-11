import Customer from "./Customer";

export async function searchCustomers() {
    let url = 'http://localhost:8080/api'
    const res = await fetch(`${url}/customers`, {
        method:'GET',
        headers: {
            "Content-Type": "application/json" 
        }
    });
    return await res.json();
}

export async function removeCustomer(id:string) {
    let url = 'http://localhost:8080/api'
    await fetch(`${url}/customers/${id}`, {
        method:'DELETE',
        headers: {
            "Content-Type": "application/json" 
        }
    });
} 

export async function saveCustomer(customer: Customer) {

    let url = 'http://localhost:8080/api'
     await fetch(`${url}/customers`, {
        method:'POST',
        body: JSON.stringify(customer),
        headers: {
            "Content-Type": "application/json" 
        },
    });
}


export async function searchCustomerById(id:string){
    let url = 'http://localhost:8080/api'
    const res = await fetch(`${url}/customers/${id}`, {
        method:'GET',
        headers: {
            "Content-Type": "application/json" 
        }
    }); 
    return await res.json();
}

