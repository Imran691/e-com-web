import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

export const getProcessData = async () => {
  const res = await client.fetch(` *[_type == "product"] {
  price,
  id,
  title,
  image,
  category -> {
    name,
    id
  }
}`); // type_product from sanity/product.ts
  return res;
};

// To print data on the browser
// we assign this type to data in main function
interface IProduct {
  title: string;
  price: number;
  _id: string;
  description: string;

  image: IImage; // IImage stands for Interface Image (It's a convention)
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProcessData();
  console.log(data);

  return (
    <div className="grid grid-cols-[repeat(2,auto)] justify-center gap-x-10">
      {data.map((item) => (
        <div key={item._id}>
          <Image src={ urlForImage(item.image).url()} alt="" width={200} height={200}
          className="max-h-[200px] object-cover object-top rounded-lg"/>
          <h2>{item.title}</h2>
          <h3>$ {item.price}</h3>
          <button className="border py-2 px-4 bg-blue-600 rounded-lg text-white mt-2">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
