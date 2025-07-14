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

  //   //ХЗ ЭТО ГОВНО КАКОЕТЕО??
  it("should if tap RUR for JPY in Хочу приобрести switch input value", async () => {
    const jpyButtons = await screen.findAllByText("JPY");
    const jpyLastButton = jpyButtons[1];

    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    fireEvent.click(rubFirstButton);
    fireEvent.click(jpyLastButton);

    const inputs = await screen.findAllByRole("spinbutton");
    const lastInput = inputs[1];

    await waitFor(() => {
      expect(lastInput).toHaveValue(187.57);
    });

    // expect(lastInput).toHaveValue(188.2);
    console.log("Input value:", lastInput.getAttribute("value"));
  });

  it("should if tap RUR for CAD in Хочу приобрести switch input value", async () => {
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];

    const CADButtons = await screen.findAllByText("CAD");
    const CADLastButton = CADButtons[1];

    fireEvent.click(rubFirstButton);
    fireEvent.click(CADLastButton);

    const inputs = await screen.findAllByRole("spinbutton");
    const lastInput = inputs[1];
    const firstInput = inputs[0];

    fireEvent.change(firstInput, { target: { value: "50" } });
    await waitFor(() => {
      expect(lastInput).toHaveValue( 0.87);
    });

    // expect(lastInput).toHaveValue(188.2);
    console.log("CAD input", lastInput.getAttribute("value"));
  });

  it("should Box__rate try content", async () => {
    const CADButtons = await screen.findAllByText("CAD");
    const CADLastButton = CADButtons[1];

    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];
    fireEvent.click(rubFirstButton);
    fireEvent.click(CADLastButton);

    const rateElement = document.querySelector(".box__rate");
    await expect(rateElement?.textContent).toMatch(/1 RUR = 0.02 CAD/);
  });

  it("should direction__reverse change currensy", async () => {
    const rubButtons = await screen.findAllByText("RUR");
    const rubFirstButton = rubButtons[0];
    const RUDLastButton = rubButtons[1];

    const EURButtons = await screen.findAllByText("EUR");
    const EURFirstButton = EURButtons[0];
    const EURLastButton = EURButtons[1];

    fireEvent.click(rubFirstButton);
    fireEvent.click(EURLastButton);

    const reverseDiv = await screen.findByText("", {
      selector: ".direction__reverse",
    });

    expect(reverseDiv).toBeInTheDocument();

    fireEvent.click(reverseDiv);

    expect(rubFirstButton).not.toHaveClass("active");
    expect(RUDLastButton).toHaveClass("active");
    expect(EURLastButton).not.toHaveClass("active");
    expect(EURFirstButton).toHaveClass("active");
  });
});

