export interface Entry{
    firstname: string
    lastname: string
    email: string
    contact: string
    source: string
    rating:{
        exterior:string
        interior:string
        location:string
        price:string
        amenities:string
    }
    mostliked: string
    leastliked: string
}