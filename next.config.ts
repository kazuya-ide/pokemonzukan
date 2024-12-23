import type { NextConfig } from 'next'

const nextConfig = {
    images: {
        domains: ["raw.githubusercontent.com"],
    }
} as const satisfies NextConfig;

module.exports = nextConfig;