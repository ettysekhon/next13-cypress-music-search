'use client';

import { SearchResultsType } from '@/utils/types'
import { MusicCard } from './MusicCard'
import { useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type MusicCardListProps = {
  term: string,
  pageNumber: number,
  results: SearchResultsType[],
}

export const MusicCardList = ({ results, term, pageNumber }: MusicCardListProps) => {
  // const [pageNumber, setPageNumber] = useState(1);
  // const [searchResults, setSearchResults] = useState<SearchResultsType[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams();
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  // NOTE: following a more client centric rendering approach like below preserves scroll
  // with Next13
  // useEffect(() => {
  //   if (pageNumber > 1) {
  //     fetch(`/api/search?term=${term}&pageNumber=${pageNumber}`)
  //       .then(response => response.json())
  //       .then(json => setSearchResults([...searchResults, ...json.results]));
  //   }
  // }, [pageNumber])

  // useEffect(() => {
  //   setSearchResults(results);
  // }, [results])

  // const loadMore = useCallback(() => setPageNumber(state => state + 1), [])

  const link = `${pathname}?${createQueryString('term', term)}&${createQueryString('pageNumber', (pageNumber + 1).toString())}`

  return (
    <>
      <div data-testid="music-card-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          (results).map((result, index) => <MusicCard key={index} {...result} />)
        }
      </div>
      {/* TODO: hide the button when we reach the result count */}
      <Link
        data-testid="load-more"
        scroll={false}
        className="mt-4 w-24 h-24 bg-red-600 text-white text-sm font-medium rounded-full flex items-center justify-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        href={link}
      >
        Load More
      </Link >
    </>

  )
}
