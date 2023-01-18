import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>How did we get here?</h1>
      <p>Sorry, an unexpected error has occurred, this page probably doesn't exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}