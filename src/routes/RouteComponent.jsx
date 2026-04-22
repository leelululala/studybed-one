import { Suspense, useEffect, useMemo } from 'react';
import { lazy } from 'react';

const pages = import.meta.glob('../pages/*.jsx');
const cache = new Map();

const RouteComponent = ({ url, id, name }) => {
  if (!cache.has(id)) {
    const loader = pages[`../pages/${id}.jsx`];
    cache.set(id, lazy(loader));
  }
  const DynamicComponent = cache.get(id);

  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <DynamicComponent />
    </Suspense>
  );
};

export default RouteComponent;
