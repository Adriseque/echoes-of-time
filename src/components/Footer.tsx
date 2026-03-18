import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md px-6 py-8">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Through Time · Licensed under{" "}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            GPL v3.0
          </a>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:historychannel480@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/historychannel480"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
