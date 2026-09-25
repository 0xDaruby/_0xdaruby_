import { Helmet } from "react-helmet-async";

export default function SEO({ title, noIndex = true }) {
  return (
    <Helmet>
      <title>
        {noIndex ? `${title} | 0xdaruby (David Iquaibom)` : title}
      </title>
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
