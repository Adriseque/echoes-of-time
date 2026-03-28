export interface ArticleChapter {
  id: string;
  title: string;
  content: string;
}

export interface ArticleCharacter {
  name: string;
  role: string;
  wikiUrl: string;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  chapters: ArticleChapter[];
  characters: ArticleCharacter[];
}
