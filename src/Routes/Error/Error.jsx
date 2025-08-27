import { useRouteError, isRouteErrorResponse } from "react-router";



const Error = () => {

    const err = useRouteError();
    console.log(err)

  return (
    <p>Error: {err instanceof Error ? err.message : "404"}</p>
  );
}

export default Error;