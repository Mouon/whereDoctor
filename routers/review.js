// review.js

const express = require('express');
const router = express.Router();

let reviews = []; // 간단한 메모리 기반 데이터베이스 역할을 하는 배열

// 후기 목록 조회
router.get('/', (req, res) => {
  res.json(reviews);
});


// 후기 작성
router.post('/', (req, res) => {
  const { reviewText, password } = req.body;
  const review = {
    id: generateReviewId(),
    reviewText,
    password,
  };
  reviews.push(review);
  res.json({ success: true, review });
});

// 후기 삭제
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  const index = reviews.findIndex(review => review.id === id);

  if (index !== -1 && reviews[index].password === password) {
    reviews.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, message: 'Invalid reviewId or password' });
  }
});

// 간단한 review ID 생성 함수 (임의의 문자열로 대체할 수 있음)
function generateReviewId() {
  return 'reviewId_' + Math.random().toString(36).substr(2, 9);
}

module.exports = router;
