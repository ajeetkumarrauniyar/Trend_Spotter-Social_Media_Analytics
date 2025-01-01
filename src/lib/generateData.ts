interface SocialMediaPost {
  id: string
  format: string
  content: string
  engagement: number
  timestamp: Date
}

export function generateSocialMediaData(count: number): SocialMediaPost[] {
  // TODO: Implement actual data generation logic
  return Array.from({ length: count }, (_, i) => ({
    id: `post_${i}`,
    format: ["text", "image", "video"][Math.floor(Math.random() * 3)],
    content: `Sample content for post ${i}`,
    engagement: Math.floor(Math.random() * 1000),
    timestamp: new Date(),
  }))
}
