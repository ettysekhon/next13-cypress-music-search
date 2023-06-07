import { SearchResultsType } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

// Ideally we would paginate the list by using an offset for example
// by using the (page number - 1) * limit if this was supported by the API
async function getData(
  term: string,
  limit: number
): Promise<{ results: SearchResultsType[]; resultCount: number }> {
  const res = await fetch(
    `https://itunes.apple.com/search?term=${term}&limit=${limit}`
  );

  if (!res.ok) {
    console.error("res.statusText", res.statusText);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function GET(req: NextRequest): Promise<Response> {
  const term = req.nextUrl.searchParams.get("term");
  const pageNumber = req.nextUrl.searchParams.get("pageNumber");

  if (!pageNumber || !term) {
    return NextResponse.json(
      { error: "Missing pageNumber or term" },
      { status: 400 }
    );
  }
  try {
    const data = await getData(term, parseInt(pageNumber) * 10);
    return NextResponse.json({
      ...data,
      results: data.results.slice(-10), // workaround as we don't have offset
    });
  } catch (e) {
    return NextResponse.json({ status: 400 });
  }
}
