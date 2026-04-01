import { Camera, Newspaper } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog & Photos</h1>
          <p className="text-lg text-muted-foreground mb-14">
            Performance updates, festival photos, and stories from the road — coming soon.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 flex flex-col items-center gap-4 text-center">
              <Newspaper className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Blog</h2>
              <p className="text-muted-foreground text-sm">
                Fresh content, performance updates, behind-the-scenes stories, and songwriting insights.
              </p>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Coming Soon</span>
            </Card>

            <Card className="p-8 flex flex-col items-center gap-4 text-center">
              <Camera className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Photos & Videos</h2>
              <p className="text-muted-foreground text-sm">
                Band pictures, live performance footage, and a look back at 10+ years of making music together.
              </p>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Coming Soon</span>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
