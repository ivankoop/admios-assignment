import { MemoryRouter } from "react-router";

import React from "react";

export const withWrappers = (Story) => (
  <MemoryRouter initialEntries={["/"]}>
    <Story />
  </MemoryRouter>
);
