import React from 'react';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const BoardList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1; // get한 결과가 아니라면 1
  const size = searchParams.get('size') || 10; // 기본값

  console.log('page: ', page);
  console.log('size: ', size);

  const goToDetail = (id) => {
    navigate(`/board/detail/${id}`, {
      state: { page, size },
    });
  };

  return (
    <div style={{ marginTop: '300px' }}>
      <h2>BoardList</h2>
      {/*반복문을 이용한 게시판 렌더링... */}
      <button onClick={() => goToDetail(33)}>
        게시물 33번으로 가기!
      </button>
    </div>
  );
};

export default BoardList;
