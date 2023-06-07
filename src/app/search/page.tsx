import { MusicCardList } from '@/components/MusicCardList'
import { SearchResultsType } from '@/utils/types';

async function getData(term: string, pageNumber: number = 1): Promise<{ results: SearchResultsType[], resultCount: number }> {
  const res = await fetch(`https://itunes.apple.com/search?term=${term}&limit=${pageNumber * 10}`);

  if (!res.ok) {
    console.error('res.statusText', res.statusText)
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const term = searchParams.term as string
  const pageNumber = searchParams.pageNumber as string

  const data = await getData(term, parseInt(pageNumber))

  if (data.resultCount === 0) {
    return (<span className="text-xl">
      No results found
    </span>)
  }

  return (
    <MusicCardList results={data.results} term={term} pageNumber={parseInt(pageNumber)} />
  );
};

export default SearchPage;
