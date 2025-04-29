"use client";

import * as React from "react";

import { backend } from "@/shared/modules/backend/backend.ts";

function registerBackend() {
  if ("backend" in globalThis) {
    return;
  }

  globalThis.backend = backend;
}

export const RegisterBackend = () => {
  React.useEffect(() => {
    registerBackend();
  }, []);

  return null;
};
