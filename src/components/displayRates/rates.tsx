'use client';
import { useState, useEffect } from "react";
import axios from "axios";


export default function Rates() {

    // making a type for allRates constant so that typescript understand it 
    type AllRatesType = { [key: string]: number };

    // making states for different conditions
    const [allRates, setAllRates] = useState<AllRatesType>({}); // for storing all the currency rates
    const [inputCurrency, setInputCurrency] = useState(''); // for storing the ussr input currency name
    const [inputRate, setInputRate] = useState<number | null>(null); // for storing the currency rate that the user enter
    const [error, setError] = useState('');

    // using useEffect hook to fetch currency rates after component mounts
    useEffect(() => {
        // making a function which fetches the rates from data
        const fetchRates = async () => {
            try {
                // making an api call to coinlayer and destructuring the constant
                const { data } = await axios.get("/api/fetch-rates");
                // stores all the rates in the allRates constant
                setAllRates(data.rates);
            } catch {
                setError("Unable to fetch rates !");
            }
        }
        // calling the function to fetch rates
        fetchRates();
    }, []); // "[]" for mount the component at onece

    // clearing the inputRate and setError after inputCurrency changes
    useEffect(() => {
        setInputRate(null);
        setError('');
    }, [inputCurrency]);

    // making another function to handle user unput currency
    const handleUserInput = () => {
        if (inputCurrency && allRates[inputCurrency.toUpperCase()]) {
            setInputRate(allRates[inputCurrency.toUpperCase()]);
            setError('');
        }
        else {
            setInputRate(null);
            setError("Currency not found !");
        }
    }

    return (

        <div className="w-full h-[50%] my-5 flex justify-center">
            <div className="w-[100%] xl:w-[50%] h-full bg-slate-200 rounded-md border-black">

                <h1 className="text-center text-4xl my-4 font-bold border-b-2 border-black tracking-wide
                    capitalize py-3">
                    check currency rate
                </h1>

                <div className="">
                    <label htmlFor="currencyName" className="block text-3xl py-4 text-center capitalize">
                        enter Currency Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={inputCurrency}
                        onChange={(e) => setInputCurrency(e.target.value)}
                        placeholder="Enter Here"
                        id="currencyName"
                        className="block px-2 w-4/5 border-2 xl:w-1/2 border-black py-1 rounded-sm text-center mx-auto
                         text-xl" />
                </div>

                <div className="text-center">
                    <button className="bg-red-300 px-5 py-0 capitalize text-center my-5 text-2xl rounded-md
                     md:rounded-sm font-semibold hover:bg-black hover:text-white hover:scale-105 hover:px-6
                    hover:py-1 hover:rounded-md transition-all hover:text-center" onClick={handleUserInput}>
                        check Rate
                    </button>
                </div>

                {inputRate !== null &&
                    <div className="text-center mt-3 transition-all pb-2">
                        <p className="text-2xl font-semibold">Currency <span> &apos;{inputCurrency.toUpperCase()}&apos; </span>
                            Rate: &apos; {inputRate}; &apos; <sub>{inputCurrency.toUpperCase()}</sub>
                        </p>
                    </div>
                }
                {error &&
                    <div className="text-center text-red-500 text-2xl mt-3 capitalize transition-all pb-2">
                        {error}
                    </div>
                }

            </div>
        </div>
    )
}
