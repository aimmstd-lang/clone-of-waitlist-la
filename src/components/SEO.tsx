import { useEffect } from "react";

export interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/pricing" — relative path, no domain
  type?: "website" | "article" | "product";
  image?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
  keywords?: string;
}

const SITE_URL = "https://waitlistlab.com";
const DEFAULT_IMAGE =
  "https://vibe.filesafe.space/1786142210769333297/assets/20c30f75-a970-4d0c-925f-e058adbb448f.png";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(
    `meta[${attr}="${key}"]`,
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export const SEO = ({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd,
  keywords,
}: SEOProps) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Waitlist Lab")
    ? title
    : `${title} — Waitlist Lab`;

  // Inject alternate-name SEO: add "Wait List Lab" as a keyword variant on every page
  const enhancedKeywords = keywords
    ? `${keywords}, Waitlist Lab, Wait List Lab, Weightless Lab, waitlistlab, wait list lab, weightless lab`
    : "Waitlist Lab, Wait List Lab, Weightless Lab, waitlistlab, wait list lab, weightless lab";

  useEffect(() => {
    document.title = fullTitle;

    setMeta("name", "title", fullTitle);
    setMeta("name", "description", description);
    setMeta("name", "keywords", enhancedKeywords);
    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    // Open Graph
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "Waitlist Lab");
    setMeta("property", "og:locale", "en_US");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", fullUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    setLink("canonical", fullUrl);

    // JSON-LD
    removeJsonLd("page-jsonld");
    if (jsonLd) {
      setJsonLd("page-jsonld", jsonLd);
    }

    return () => {
      removeJsonLd("page-jsonld");
    };
  }, [
    fullTitle,
    title,
    description,
    fullUrl,
    type,
    image,
    noindex,
    enhancedKeywords,
    jsonLd,
  ]);

  return null;
};
