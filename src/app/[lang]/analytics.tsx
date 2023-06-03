"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

const Analytics = () => {
  return <VercelAnalytics />;
};

export { Analytics, Analytics as default };
