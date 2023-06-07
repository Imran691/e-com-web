// model or schema (as it is called in Sanity) is a blue print of the content
// we will import this file in "schema.ts"


import { title } from "process";
import { defineField } from "sanity";

export const product = {
    name: "product",       // name is used while fetching data, fetched data is saved in it
    type: "document" ,     // type document specifies a model containing different fields
    title: "Product",      // this is title of content in Sanity studio
    fields: [
        {
            name: "title",  // we be considered as unique ID while fetching data
            title: "Product Title",
            type: "string"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name:"price",
            title: "Product price",
            type: "number",
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        },  
        defineField({
            name:"category",
            title: "Product Category",
            type: "reference",            // reference to another schema
            to: [
                {
                    type: "category",     // name of referenced schema
                }
            ]
        })

    ]
}    