import type { Article } from "./types";
import { ancientRomeArticles } from "./ancientRome";
import { medievalArticles } from "./medieval";
import { renaissanceArticles } from "./renaissance";
import { frenchRevolutionArticles, napoleonArticles, industrialArticles } from "./modernEra";
import { ww1Articles, ww2Articles, spaceAgeArticles, modernArticles } from "./twentiethCentury";

export type { Article, ArticleChapter, ArticleCharacter } from "./types";

export const allArticles: Record<string, Article> = {
  ...ancientRomeArticles,
  ...medievalArticles,
  ...renaissanceArticles,
  ...frenchRevolutionArticles,
  ...napoleonArticles,
  ...industrialArticles,
  ...ww1Articles,
  ...ww2Articles,
  ...spaceAgeArticles,
  ...modernArticles,
};
