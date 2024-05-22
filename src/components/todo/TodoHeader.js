import React from 'react';
import '../../scss/TodoHeader.scss';

const TodoHeader = ({ count, promote }) => {
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit', // 숫자앞에 0 붙어있게하는것
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long', // 요일까지나오게
  });

  const upgrade = () => {
    if (
      window.confirm(
        '프리미엄으로 업그레이드 하시겠습니까?',
      )
    ) {
      promote();
    }
  };

  // 회원 등급에 따른 조건별 렌더링
  const gradeView = () => {
    const role = localStorage.getItem('USER_ROLE');
    console.log('TodoHeader -> role: ', role);

    if (role === 'COMMON') {
      return (
        <span
          className='promote badge bg-warning'
          onClick={upgrade}
        >
          일반회원
        </span>
      );
    } else if (role === 'PREMIUM') {
      return (
        <span className='promote badge bg-danger'>
          프리미엄회원
        </span>
      );
    } else if (role === 'ADMIN') {
      return (
        <span className='promote badge bg-info'>
          관리자
        </span>
      );
    }
  };

  return (
    <header>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>
        {count() === 0 ? (
          <span className='none'>
            할 일을 추가해주세요!
          </span>
        ) : (
          <span>할 일 {count()}개 남음</span>
        )}
      </div>
      {gradeView()}
    </header>
  );
};

export default TodoHeader;
