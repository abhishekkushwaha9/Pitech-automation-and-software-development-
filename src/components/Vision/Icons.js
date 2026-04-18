import React from "react";

// Lightweight SVG icon set — outline style, currentColor stroke
const base = (children, p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={p.strokeWidth ?? 1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={p.className}
  >
    {children}
  </svg>
);

export const IconCpu = (p) =>
  base(
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </>,
    p
  );

export const IconShield = (p) =>
  base(
    <>
      <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </>,
    p
  );

export const IconTarget = (p) =>
  base(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>,
    p
  );

export const IconTrendingUp = (p) =>
  base(
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>,
    p
  );

export const IconLayers = (p) =>
  base(
    <>
      <path d="M12 2l10 6-10 6L2 8l10-6z" />
      <path d="M2 14l10 6 10-6" />
      <path d="M2 11l10 6 10-6" />
    </>,
    p
  );

export const IconAlert = (p) =>
  base(
    <>
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 10v5M12 18v.5" />
    </>,
    p
  );

export const IconUsers = (p) =>
  base(
    <>
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </>,
    p
  );

export const IconLeaf = (p) =>
  base(
    <>
      <path d="M11 20A7 7 0 014 13V5a14 14 0 0116 0v8a7 7 0 01-7 7h-2z" />
      <path d="M8 16c2-4 6-6 10-6" />
    </>,
    p
  );

export const IconFactory = (p) =>
  base(
    <>
      <path d="M2 21V11l6 4V11l6 4V8l8-3v16H2z" />
      <path d="M6 17h2M11 17h2M16 17h2" />
    </>,
    p
  );

export const IconGear = (p) =>
  base(
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9 1.65 1.65 0 004.27 7.18l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6 1.65 1.65 0 0010 3.09V3a2 2 0 114 0v.09c0 .67.39 1.27 1 1.51a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82c.24.61.84 1 1.51 1H21a2 2 0 110 4h-.09c-.67 0-1.27.39-1.51 1z" />
    </>,
    p
  );

export const IconChart = (p) =>
  base(
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="12" y="8" width="3" height="10" />
      <rect x="17" y="4" width="3" height="14" />
    </>,
    p
  );

export const IconNetwork = (p) =>
  base(
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M12 7v4M12 11l-5.5 6M12 11l5.5 6" />
    </>,
    p
  );

export const IconCode = (p) =>
  base(
    <>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </>,
    p
  );

export const IconWrench = (p) =>
  base(
    <>
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-2.4 2.5-2.5a4 4 0 00-.6-.6z" />
    </>,
    p
  );

export const IconArrowRight = (p) =>
  base(<path d="M5 12h14M13 5l7 7-7 7" />, p);

export const IconCheck = (p) =>
  base(<path d="M5 12l5 5L20 7" />, p);

export const IconSparkle = (p) =>
  base(
    <>
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
    </>,
    p
  );
