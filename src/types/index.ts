export interface Article {
  id: string;
  title: string;
  content: string;
  lastModified: string;
  revisions: Revision[];
  verified: boolean;
  topics: string[];
}

export interface Revision {
  id: string;
  timestamp: string;
  author: string;
  changes: string;
}

export interface SearchResult {
  title: string;
  snippet: string;
  url: string;
}