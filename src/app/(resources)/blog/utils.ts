/**
 * Paginates an array of posts based on the current page and posts per page
 */
export function paginatePosts<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number,
) {
  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Ensure current page is within valid range
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  // Get items for current page
  const paginatedItems = items.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage,
  );

  return {
    paginatedItems,
    totalPages,
    currentPage: validCurrentPage,
  };
}
