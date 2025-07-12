import { cleanup, fireEvent, screen, waitFor, within } from "@testing-library/react";
import App from "../components/app/App.tsx";
import { expect, it, describe, beforeEach, afterEach } from "vitest";
import { renderWithRedux } from "./utils.tsx";
import Converter from "../components/сonverter/Converter.tsx";

describe("Convert component", function () {
  beforeEach(() => {
    renderWithRedux(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should convert rub is active currency", () => {
    const activeCurrency = screen.getByText("RUR", { selector: ".active" });
    expect(activeCurrency).toBeInTheDocument();
  });

  it("should switch currency to USD when active", async () => {
    const usdButtons = await screen.findAllByText("USD");
    const usdFirstButton = usdButtons[0];
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(usdFirstButton);

    expect(usdFirstButton).toHaveClass("active");
    expect(rubFirstButton).not.toHaveClass("active");
  });

  it("should switch currency to EUR when active", async () => {
    const eurButtons = await screen.findAllByText("EUR");
    const eurFirstButton = eurButtons[0];
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(eurFirstButton);

    expect(eurFirstButton).toHaveClass("active");
    expect(rubFirstButton).not.toHaveClass("active");
  });

  it("should switch currency to JPY when active", async () => {
    const JPYButtons = await screen.findAllByText("JPY");
    const JPYFirstButton = JPYButtons[0];
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(JPYFirstButton);

    expect(JPYFirstButton).toHaveClass("active");
    expect(rubFirstButton).not.toHaveClass("active");
  });

  it("should switch currency to KZT when active", async () => {
    const KZTButtons = await screen.findAllByText("KZT");
    const KZTFirstButton = KZTButtons[0];
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(KZTFirstButton);

    expect(KZTFirstButton).toHaveClass("active");
    expect(rubFirstButton).not.toHaveClass("active");
  });

  it("should switch currency to CAD when active", async () => {
    const CADButtons = await screen.findAllByText("CAD");
    const CADFirstButton = CADButtons[0];
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(CADFirstButton);

    expect(CADFirstButton).toHaveClass("active");
    expect(rubFirstButton).not.toHaveClass("active");
  });

  it("should switch currency to RUR when active to 'Хочу купить'", async () => {
    const USDButtons = await screen.findAllByText("USD");
    const USDLastButton = USDButtons[1];
    const RURButtons = await screen.findAllByText("RUR");
    const RURLastButton = RURButtons[1];

    fireEvent.click(RURLastButton);

    expect(RURLastButton).toHaveClass("active");
    expect(USDLastButton).not.toHaveClass("active");
  });

  it("should switch currency to EUR when active to 'Хочу купить'", async () => {
    const USDButtons = await screen.findAllByText("USD");
    const USDLastButton = USDButtons[1];
    const EURButtons = await screen.findAllByText("EUR");
    const EURLastButton = EURButtons[1];

    fireEvent.click(EURLastButton);

    expect(EURLastButton).toHaveClass("active");
    expect(USDLastButton).not.toHaveClass("active");
  });

    it("should switch currency to JPY when active to 'Хочу купить'", async () => {
    const USDButtons = await screen.findAllByText("USD");
    const USDLastButton = USDButtons[1];
    const JPYButtons = await screen.findAllByText("JPY");
    const JPYLastButton = JPYButtons[1];

    fireEvent.click(JPYLastButton);

    expect(JPYLastButton).toHaveClass("active");
    expect(USDLastButton).not.toHaveClass("active");
  });

      it("should switch currency to KZT when active to 'Хочу купить'", async () => {
    const USDButtons = await screen.findAllByText("USD");
    const USDLastButton = USDButtons[1];
    const KZTButtons = await screen.findAllByText("KZT");
    const KZTLastButton = KZTButtons[1];

    fireEvent.click(KZTLastButton);

    expect(KZTLastButton).toHaveClass("active");
    expect(USDLastButton).not.toHaveClass("active");
  });

        it("should switch currency to CAD when active to 'Хочу купить'", async () => {
    const USDButtons = await screen.findAllByText("USD");
    const USDLastButton = USDButtons[1];
    const CADButtons = await screen.findAllByText("CAD");
    const CADLastButton = CADButtons[1];

    fireEvent.click(CADLastButton);

    expect(CADLastButton).toHaveClass("active");
    expect(USDLastButton).not.toHaveClass("active");
  });

  it("should in Input from Render han 100", () => {
    const inputs = screen.getAllByRole("spinbutton");
    const firstInput = inputs[0];
    expect(firstInput).toHaveValue(100);
  });
});

//   //ХЗ ЭТО ГОВНО КАКОЕТЕО??
//   it("should if tap USD for JPY in Хочу приобрести switch input value", async () => {
//     const jpyButtons = await screen.findAllByText("JPY");
//     const jpyLastButton = jpyButtons[1];
//     fireEvent.click(jpyLastButton);

//     const inputs = await screen.findAllByRole("spinbutton");
//     const lastInput = inputs[1];

// await waitFor(() => {
//     expect(lastInput).toHaveValue(188.2);
// })

//     // expect(lastInput).toHaveValue(188.2);
//     console.log("Input value:", lastInput.getAttribute("value"));
//   });

// });

//    it("should if tap USD for JPY in Хочу приобрести switch input value", async () => {
//     // Находим кнопку JPY во второй группе валют (Хочу приобрести)
//     const jpyButtons = await screen.findAllByText("JPY");
//     const jpyLastButton = jpyButtons[1];

//     // Находим второй input (для "Хочу приобрести")
//     const inputs = await screen.findAllByRole("spinbutton");
//     const lastInput = inputs[1];

//     // Кликаем на JPY
//     fireEvent.click(jpyLastButton);

//     // Ждем обновления значения
//     await waitFor(() => {
//       expect(lastInput).toHaveValue(0.68);
//     });
//   });

// const inputs = screen.getAllByRole("spinbutton");
// const lastInput = inputs[1];

// // Имитируем ввод пользователя
// await userEvent.clear(lastInput);
// await userEvent.type(lastInput, '42');

// // Проверяем новое значение
// console.log('New value:', lastInput.value); // "42"
// expect(lastInput).toHaveValue(42);
