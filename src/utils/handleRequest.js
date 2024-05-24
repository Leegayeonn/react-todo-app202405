const handleRequst = async (
  requestFunc,
  onSuccess,
  onError,
) => {
  try {
    const res = await requestFunc();
    if (res.status === 200) {
      onSuccess(res.data);
    }
  } catch (error) {
    console.log(error);
    if (onError) {
      onError(error);
    } else {
      alert('알수없는 에러발생! 다시 시도해 주세요!');
    }
  }
};

export default handleRequst;
