import { getShoppingCart } from "../../utilities/fakebd";

export const jobAndCartData = async() =>{

    const res = await fetch('/jobs.json');
    const allJobs = await res.json();

    const savedJobs = getShoppingCart()

    let jobCart =  []
    for (const id in savedJobs){
        const foundJob = allJobs.find(job=> job.id == id);
        if(foundJob){
            jobCart.push(foundJob)
        }
    }
    return {jobCart , allJobs}

}