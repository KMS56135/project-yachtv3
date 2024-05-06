import { fireEvent, render, screen } from "@testing-library/react";
import ComponentExample from "./ComponentExample"

test('changes the class when clicked', () => {
  // рендерим компонент
  render(<ComponentExample />);

  // находим кнопку по test id
  const btn = screen.getByTestId("btn");

  // проверяем, что у нее класс closed
  expect(btn).toHaveClass("closed")

  // нажимаем
  fireEvent.click(btn);
  // проверяем, что у нее класс opened
  expect(btn).toHaveClass("opened")

  // снова нажимаем
  fireEvent.click(btn);
  // проверяем, что класс closed
  expect(btn).toHaveClass("closed")
})