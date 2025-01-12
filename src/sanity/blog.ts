import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // Allows the user to specify a focal point
      },
      fields: [
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
        defineField({
          name: "attribution",
          type: "string",
          title: "Attribution",
        }),
      ],
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "heading", // Corrected to match the "name" of the title field
        maxLength: 200, // Limit the slug length to 200 characters
      },
    }),
  ],
});
