import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the Post",
      validation: (Rule) => Rule.required(), // Validation to ensure the field is required
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    }),

    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(), // Validation to ensure the field is required
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // Enabling hotspot for better image cropping
      },
    }),

    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
  ],
});
