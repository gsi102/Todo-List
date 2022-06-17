import { render, screen, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";
import TaskList from "./components/TodoList/TaskList";

import { Context } from "./Сontext";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <Context.Provider {...providerProps}>{ui}</Context.Provider>,
    renderOptions
  );
};

test("TaskList renders without tasks", () => {
  const exampleTasks = [];
  const providerProps = {
    value: { showTasks: exampleTasks },
  };
  const { container } = customRender(<TaskList />, { providerProps });
  expect(container.getElementsByClassName("taskToggle").length).toBe(0);
});

test("Choosen filter button has active class", () => {
  render(<App />);
  expect(screen.getByText(/all/i)).toHaveClass("footerButtonActive");
  userEvent.click(screen.getByText(/active/i));
  expect(screen.getByText(/all/i)).toHaveClass("footerButton");
  expect(screen.getByText(/active/i)).toHaveClass("footerButtonActive");
});

test("Tasks list changes on changing  the filter", () => {
  render(<App />);
  expect(screen.getByText(/Прекрасный код/i)).toHaveClass("taskBody");
  userEvent.click(screen.getByText(/active/i));
  expect(screen.queryByText(/Прекрасный код/i)).toBeNull();
});

test("TaskList length changes on Clear completed", () => {
  render(<App />);
  expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();
  expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
  expect(screen.getByText(/Покрытие тестами/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/Clear completed/));
  expect(screen.queryByText(/Прекрасный код/i)).toBeNull();
});
