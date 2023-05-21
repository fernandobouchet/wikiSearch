import { getWikiResults } from '@/lib/getWikiResults';
import { Result } from '@/types/Result';
import { SearchResult } from '@/types/SearchResult';
import Item from './components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export const generateMetadata = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm?.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
};

const SearchResults = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="flex flex-col justify-center items-center pb-5">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
};

export default SearchResults;
