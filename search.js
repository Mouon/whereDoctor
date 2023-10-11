import fetch from 'node-fetch';

async function performSearch(keyword) {
  const results = [];
  for (let i = 1; i <= 50; i++) {
    results.push(`"${keyword}" 검색 결과 ${i}`);
  }
  return results;
}

async function searchWithKeyword() {
  const searchKeyword = '예시'; // 실제 검색어로 변경해주세요.

  try {
    const results = await performSearch(searchKeyword);
    displayResults(results);
  } catch (error) {
    console.error('검색 중 오류 발생:', error);
  }
}

function displayResults(results) {
  results.forEach(result => {
    console.log(result);
  });
}

searchWithKeyword();
