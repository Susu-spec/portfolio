import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

type Props = {
  children: React.ReactNode;
};

export default function LoaderWrapper({ children }: Props) {
  const [ loading, setLoading ] = useState(true);
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, [setLoading]);

  return (
    <Loader loading={loading}>
      {children}
    </Loader>
  );
}