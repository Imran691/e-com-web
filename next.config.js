/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"] // to be able to use third party images, duo to security reasons we have to ass this domain in the from on an array. This will allow all images from the given domain
    }
}

module.exports = nextConfig
