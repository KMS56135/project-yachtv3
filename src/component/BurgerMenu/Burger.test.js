import { fireEvent, render, screen } from "@testing-library/react";
import BurgerMenu from "./BurgerMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BurgerMenu />,
    }
]);

test('changes the class when clicked', () => {
    // рендерим компонент
    render(<RouterProvider router={router} />);

    const burgerBtn = screen.queryByTestId("burgerBtn");
    expect(screen.queryByTestId("burgerMenu")).toBeNull();

    fireEvent.click(burgerBtn);
    expect(screen.getByTestId("burgerMenu")).not.toBeNull();

    fireEvent.click(burgerBtn);
    expect(screen.queryByTestId("burgerMenu")).toBeNull();
});

