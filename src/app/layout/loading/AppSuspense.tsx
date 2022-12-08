import {Suspense} from 'react';
import AppLoading from "./AppLoading";

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AppSuspense = (props: Props) => {
  return (
    <Suspense
      fallback={<AppLoading />}
    >
      {props.children}
    </Suspense>
  );
}

export default AppSuspense;