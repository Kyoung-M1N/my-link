import { DUMMY_LINKS } from '@/data/links';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className="relative min-h-svh w-full bg-background overflow-hidden flex flex-col items-center py-20 px-6">
      {/* Background gradients for premium glassmorphism aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="z-10 w-full max-w-md flex flex-col gap-8">
        {/* Profile Section */}
        <div className="text-center flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 shadow-xl mb-4 flex items-center justify-center text-white text-3xl font-bold ring-4 ring-background">
            A
          </div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">@개발자_Alex</h1>
          <p className="text-sm text-muted-foreground mt-1 font-medium">
            Front-End Developer | React
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4">
          {DUMMY_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg border border-border/50 bg-card/60 backdrop-blur-md overflow-hidden relative">
                {/* Hover gradient effect line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-muted/50 p-1.5 flex flex-shrink-0 items-center justify-center ring-1 ring-border shadow-sm group-hover:bg-background transition-colors">
                    {link.faviconUrl ? (
                      <img
                        src={link.faviconUrl}
                        alt={`${link.title} 파비콘`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-xs text-muted-foreground font-semibold">?</span>
                    )}
                  </div>
                  <h2 className="text-[15px] font-semibold flex-1 text-foreground/90 group-hover:text-foreground transition-colors text-center pr-10">
                    {link.title}
                  </h2>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
