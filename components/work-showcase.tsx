import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WorkShowcase() {
  return (
    <section id="showcase" className="py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Showcase</h2>

        <Tabs defaultValue="ui-designs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ui-designs">UI/UX Designs</TabsTrigger>
            <TabsTrigger value="clones">Website Clones</TabsTrigger>
          </TabsList>

          <TabsContent value="ui-designs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Spotify_page-0001.jpg-pEYGOOPzmghrQFrOnIEjmkMsujMTI6.jpeg"
                      alt="Spotify UI Design - Millionaire Song"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Spotify_page-0005.jpg-9WKJudEru0jmncx96mztiCBtHzTeYC.jpeg"
                      alt="Spotify UI Design - Lyrics Page"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Spotify_page-0002.jpg-oGAPiRAmQqrBIm7v3NcuVbJkvgIuYP.jpeg"
                      alt="Spotify UI Design - Song Player"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20Spotify_page-0003.jpg-MHK5LqptV0O6jpu98s0G1a1fbZRX5I.jpeg"
                      alt="Spotify UI Design - Album View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clones" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2022.48.18_41a3031a.jpg-s0zbR8zVduwpLAFI2EuhquVVNK24Fd.jpeg"
                      alt="Samsung Galaxy Watch7 Clone"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2022.48.18_09217af7.jpg-NV99zLd9UUTGeG2o65DNlCr1OH64mu.jpeg"
                      alt="Samsung Galaxy Watch Ultra Clone"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 md:col-span-2 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-04%20at%2022.48.18_aeed88d0.jpg-Oarma883ES7tGVd4AcCumslT4HAgiM.jpeg"
                      alt="Samsung Website Clone"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

