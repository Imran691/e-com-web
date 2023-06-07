// lib directory is used to fetch data from Sanity in our Next.js project

// create client is a function that takes and object as an argument and returns an object
// it connects Sanity and Next.js project.
// we can fetch, create data with its help.

import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: "2023-06-01",    //from Sanity dash board
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, //from ".env" file
  token: process.env.SANITY_ACCESS_TOKEN,   //from ".env" file
  useCdn: true,   // weather we want to keep our data on main server or we want to cache at CDN
})