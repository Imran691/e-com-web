// sanity-typed/schema-builder

// defineType function is used to create the type of a document, in this case document is "category"
// the document is passed as an argument to this function

import { defineType, defineField } from "sanity";     // functions to provide us intellisense 

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
  ],
});
