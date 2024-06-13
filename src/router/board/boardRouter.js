import BoardDetail from '../../components/board/BoardDetail';
import BoardList from '../../components/board/BoardList';

const boardRoutes = [
  {
    path: 'list',
    element: <BoardList />,
  },
  {
    path: 'detail/:id', // :id대신 bno도 되고 아무거나
    element: <BoardDetail />,
  },
  //   {
  //     path: 'write',
  //     element: <BoardWrite />,
  //   },
];

export default boardRoutes;
