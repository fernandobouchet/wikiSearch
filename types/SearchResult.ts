import { Result } from './Result';

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

export type { SearchResult };
