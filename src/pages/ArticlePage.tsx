import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { allArticles } from "@/data/articles";
import { ArrowLeft, ExternalLink, BookOpen, Users } from "lucide-react";
import Footer from "@/components/Footer";

const ArticlePage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [activeChapter, setActiveChapter] = useState<string>("");

  const article = eventId ? allArticles[eventId] : undefined;

  useEffect(() => {
    if (article && article.chapters.length > 0) {
      setActiveChapter(article.chapters[0].id);
    }
  }, [article]);

  useEffect(() => {
    const handleScroll = () => {
      if (!article) return;
      const offsets = article.chapters.map((ch) => {
        const el = document.getElementById(`chapter-${ch.id}`);
        return { id: ch.id, top: el?.getBoundingClientRect().top ?? Infinity };
      });
      const current = offsets.reduce((best, cur) =>
        Math.abs(cur.top - 100) < Math.abs(best.top - 100) ? cur : best
      );
      setActiveChapter(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-primary mb-4">Article Not Found</h1>
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary transition-colors">
            ← Back to Timeline
          </button>
        </div>
      </div>
    );
  }

  const scrollToChapter = (chapterId: string) => {
    const el = document.getElementById(`chapter-${chapterId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center gap-4 px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Timeline</span>
          </button>
          <div className="h-5 w-px bg-border" />
          <div className="flex-1 min-w-0">
            <p className="font-display text-xs text-muted-foreground tracking-widest uppercase truncate">
              {article.date}
            </p>
            <h1 className="font-display text-sm md:text-base text-primary truncate">
              {article.title}
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-1 text-muted-foreground text-xs font-body">
            <BookOpen size={12} />
            <span>{article.chapters.length} chapters</span>
            <span className="mx-1">·</span>
            <Users size={12} />
            <span>{article.characters.length} figures</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl flex">
        {/* Left sidebar — Chapter Index */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto border-r border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">
              Index
            </span>
          </div>
          <nav className="space-y-1">
            {article.chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-body transition-all duration-200 ${
                  activeChapter === chapter.id
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <span className="font-display text-xs text-muted-foreground mr-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {chapter.title}
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="font-display text-[10px] tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-1">
              <span className="inline-block h-px w-3 bg-muted-foreground" />
              sys.info
            </div>
            <div className="space-y-2 font-display text-[11px] text-muted-foreground">
              <p>
                <span className="text-foreground/40">event_id:</span>{" "}
                <span className="text-primary/70">{article.id}</span>
              </p>
              <p>
                <span className="text-foreground/40">date:</span>{" "}
                <span className="text-primary/70">{article.date}</span>
              </p>
              <p>
                <span className="text-foreground/40">chapters:</span>{" "}
                <span className="text-primary/70">{article.chapters.length}</span>
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 py-10 md:px-12 lg:px-16">
          {/* Title block */}
          <div className="mb-12">
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary text-glow mb-2">
              {article.date}
            </p>
            <h2 className="font-body text-lg md:text-xl text-muted-foreground font-semibold uppercase tracking-widest">
              {article.title}
            </h2>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>

          {/* Mobile chapter nav */}
          <div className="lg:hidden mb-8 flex gap-2 overflow-x-auto pb-2">
            {article.chapters.map((chapter, i) => (
              <button
                key={chapter.id}
                onClick={() => scrollToChapter(chapter.id)}
                className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-display transition-colors ${
                  activeChapter === chapter.id
                    ? "bg-accent text-primary"
                    : "text-muted-foreground bg-secondary"
                }`}
              >
                {String(i + 1).padStart(2, "0")}. {chapter.title}
              </button>
            ))}
          </div>

          {/* Chapters */}
          <div className="space-y-16">
            {article.chapters.map((chapter, i) => (
              <section key={chapter.id} id={`chapter-${chapter.id}`} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg md:text-xl text-foreground">
                    {chapter.title}
                  </h3>
                </div>
                <div className="font-body text-sm md:text-base leading-relaxed text-foreground/80 space-y-4">
                  {chapter.content.split("\n\n").map((paragraph, pi) => (
                    <p key={pi}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>

        {/* Right sidebar — Key Figures */}
        <aside className="hidden xl:block w-72 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto border-l border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Users size={14} className="text-primary" />
            <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">
              Key Figures
            </span>
          </div>
          <div className="space-y-4">
            {article.characters.map((character) => (
              <a
                key={character.name}
                href={character.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {character.name}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
                      {character.role}
                    </p>
                  </div>
                  <ExternalLink
                    size={12}
                    className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Mobile characters (shown below content on smaller screens) */}
        </aside>
      </div>

      {/* Mobile characters panel */}
      <div className="xl:hidden px-6 pb-10 mx-auto max-w-7xl">
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Users size={14} className="text-primary" />
            <span className="font-display text-xs tracking-widest uppercase text-muted-foreground">
              Key Figures
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {article.characters.map((character) => (
              <a
                key={character.name}
                href={character.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-primary/30 transition-all group"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors truncate">
                    {character.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">
                    {character.role}
                  </p>
                </div>
                <ExternalLink size={12} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArticlePage;
