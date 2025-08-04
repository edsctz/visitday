/**
 * Adds UTM parameters to a URL
 * @param url - The base URL to add UTM parameters to
 * @param neighborhoodId - The neighborhood ID to use as utm_source
 * @returns URL with UTM parameters appended
 */
export function addUtmParameters(url: string, neighborhoodId: string): string {
  if (!url || !neighborhoodId) {
    return url;
  }

  try {
    const urlObj = new URL(url);
    
    // Add UTM parameters
    urlObj.searchParams.set('utm_campaign', 'visitday');
    urlObj.searchParams.set('utm_medium', 'web');
    urlObj.searchParams.set('utm_source', neighborhoodId);
    
    return urlObj.toString();
  } catch (error) {
    // If URL is invalid, return original URL
    console.warn('Invalid URL provided to addUtmParameters:', url);
    return url;
  }
}