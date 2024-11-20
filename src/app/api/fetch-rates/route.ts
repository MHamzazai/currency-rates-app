import axios from "axios"
import { NextResponse } from "next/server"; // used for handling server side response

export async function GET() {
    try {
        // my coinlayer api
        const myKey: string = "7166a9ac293065cdd780c5459f91dc12";

        // making an api call 
        // destructuring data constant
        const { data } = await axios.get(`https://api.coinlayer.com/api/live?access_key=${myKey}`);
        // if the data is fetch successfully 
        return NextResponse.json(data);
    }
    catch (error) {
        // if the data is not fetch
        return NextResponse.json({ error: error }, { status: 500 });
    }
}