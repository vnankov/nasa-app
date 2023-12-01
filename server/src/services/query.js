const DEFAULT_PAGE_LIMIT = 0;
const DEFAULT_PAGE_NUMBER = 1

function getPagination(query) {
  const page = parseInt(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = parseInt(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;

  return {
    limit,
    skip,
  };
}

module.exports = { 
  getPagination
}