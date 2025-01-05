import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="cards w-full md:w-[70%] grid grid-cols-1 gap-6 order-2 lg:order-1">
        {/* Billing Info */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around p-4 sm:p-6 lg:p-8 xl:p-10">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between text-sm sm:text-base lg:text-lg">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 sm:gap-8">
            <div className="w-full flex flex-wrap gap-4 sm:gap-6">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="name">
                  Name
                </label>
                <Input placeholder="Your Name" className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl" />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="num">
                  Phone Number
                </label>
                <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl" />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4 sm:gap-6">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="add">
                  Address
                </label>
                <Input placeholder="Your Address" className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl" />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="city">
                  Town/City
                </label>
                <Input placeholder="Your City" className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rental Info */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around p-4 sm:p-6 lg:p-8 xl:p-10">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between text-sm sm:text-base lg:text-lg">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <div>
              <Image src={"/Pick - Up (1).png"} alt="Pick Up" width={92} height={20} />
            </div>
            <div className="w-full flex flex-wrap gap-4 sm:gap-6">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="add">
                  Locations
                </label>
                <select className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl">
                  <option>Select Your City</option>
                </select>
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold text-sm lg:text-base" htmlFor="city">
                  Date
                </label>
                <select className="bg-[#f6f7f9] px-4 sm:px-6 h-[56px] rounded-xl">
                  <option>Select Your Date</option>
                </select>
              </div>
            </div>
            {/* Additional sections */}
          </CardContent>
        </Card>
      </div>

      {/* Rental Summary */}
      <div className="details w-full flex-shrink-0 lg:w-[40%] order-1 lg:order-2 flex justify-center">
        <Image
          src={"/Rental Summary.png"}
          alt="Rental Summary"
          width={492}
          height={568}
          className="lg:w-[492px] h-[568px]"
        />
      </div>
    </div>
  );
}
