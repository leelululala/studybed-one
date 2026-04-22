import PageInfoJson from '@/routes/PageInfo.json';
import RouteComponent from './RouteComponent';
import { Route, Routes } from 'react-router-dom';

const RootRoute = () => (
  <Routes>
    {PageInfoJson['container']?.flatMap((item) =>
      item?.urlList?.map((item1, index1) => {
        const { url: path, id, name } = item1;

        return (
          <Route
            key={id + index1}
            path={path}
            element={<RouteComponent url={path} id={id} name={name} />}
          />
        );
      }),
    )}
    {/*TODO: 에러페이지 추가 */}
    <Route path="*" element={<div>404 Not found</div>} />
  </Routes>
);
export default RootRoute;
