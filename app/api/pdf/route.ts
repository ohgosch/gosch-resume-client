import puppeteer from 'puppeteer';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const originPage = searchParams.get('origin') || '/';
    const originBaseURL = request.nextUrl.origin;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const pageURL = originBaseURL + originPage;
    const response = await page.goto(pageURL, { waitUntil: 'load' });

    if (response?.status() !== 200)
      throw `Unable to request PDF File. Ref.: ${pageURL}`;

    const title = await page.title();

    const pdfFile = await page.pdf({
      printBackground: true,
      format: 'A4',
    });

    await browser.close();

    return new Response(pdfFile, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename=${title}.pdf`,
      },
    });
  } catch (e) {
    return new Response(`${e}`, {
      status: 500,
      headers: {},
    });
  }
}
