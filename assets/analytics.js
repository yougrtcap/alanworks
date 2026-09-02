(() => {
  const currentScript = document.currentScript;
  const measurementId = currentScript?.dataset.gaId?.trim() || "";
  if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-analytics-event]");
    if (!link) return;
    window.gtag("event", link.dataset.analyticsEvent, {
      destination: link.dataset.analyticsDestination || "unknown",
    });
  });
})();
