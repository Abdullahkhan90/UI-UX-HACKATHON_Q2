import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:px-20 lg:py-12 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* First Section */}
      <section className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 justify-center">
        <Image
          src={"/Ads 1.png"}
          alt=""
          width={640}
          height={360}
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
        <Image
          src={"/Ads 2.png"}
          alt=""
          width={640}
          height={360}
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
        />
      </section>

      {/* Second Section */}
      <section className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-6">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={572}
          height={132}
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
        />
        <Image
          src={"/Switch.png"}
          alt=""
          width={60}
          height={60}
          className="w-10 sm:w-12 lg:w-14"
        />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={572}
          height={132}
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </section>

      {/* Popular Cars Section */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className="w-full max-w-xs sm:max-w-sm mx-auto flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    Car Name <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>Category</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Image src={"/car.png"} alt="" width={220} height={68} />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={"/payment"}>
                    <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-gray-500 text-lg sm:text-xl">Recommendation Car</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className="w-full max-w-xs sm:max-w-sm mx-auto flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    Car Name <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>Category</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Image src={"/suv.png"} alt="" width={220} height={68} />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={"/payment"}>
                    <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md">
                      Rent Now
                    </button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
        </div>
      </section>

      {/* Show More Button */}
      <section className="text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-6 py-3 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
