import { SEO } from "../components";

const Spotify = () => {
  return (
    <>
      <SEO title="Top Tracks" />
      <main className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Spotify Top Tracks
        </h1>
        <p>
          Spotify data is unavailable until this page can use a secure
          server-side integration.
        </p>
      </main>
    </>
  );
};

export default Spotify;
