import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthGuard } from "../AuthGuard";
import { useAuth } from "../../app/hooks/useAuth";
import { vi } from "vitest";

// Mock do useAuth
vi.mock("../../app/hooks/useAuth");

describe("Login de Usuário", () => {
  it("Deve verificar o redirecionamento do usuário para a página inicial da aplicação", async () => {
    (useAuth as jest.Mock).mockReturnValue({
      signedIn: true,
      userRole: "user",
    });

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<AuthGuard isPrivate={false} />} />
          <Route
            path="/"
            element={<div>Redirecionado: Dashboard do Usuário</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByText("Redirecionado: Dashboard do Usuário")
      ).toBeInTheDocument();
    });
  });
});
