(() => {
  const currentScript = document.currentScript;
  const measurementId = currentScript?.dataset.gaId?.trim() || "";
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Use the published URL so query strings and fragments never enter analytics.
  const pageLocation = document.querySelector('link[rel="canonical"]')?.href
    || window.location.origin + window.location.pathname;
  let pageReferrer = "";
  try {
    pageReferrer = document.referrer ? new URL(document.referrer).origin + "/" : "";
  } catch {}
  window.gtag("config", measurementId, {
    page_location: pageLocation,
    page_referrer: pageReferrer,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);

  document.addEventListener("click", (event) => {
    const link = event.target?.closest?.("a[data-analytics-event]");
    if (!link || !["line_click", "plus_click"].includes(link.dataset.analyticsEvent)) return;
    window.gtag("event", link.dataset.analyticsEvent, {
      destination: ["header", "main", "footer", "contact", "article"].includes(link.dataset.analyticsDestination)
        ? link.dataset.analyticsDestination : "unknown",
      transport_type: "beacon",
    });
  });
})();
