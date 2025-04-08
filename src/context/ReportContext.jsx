import { createContext, useContext, useReducer } from "react";

const ReportContext = createContext();

const initialState = {
  selectedReport: "attendance",
  reportParams: {
    startDate: null,
    endDate: null,
    selectedClasses: {},
    chartType: "bar",
    dataPoints: [],
    notes: "",
  },
  showPreview: false,
};

const reportReducer = (state, action) => {
  switch (action.type) {
    case "set_report":
      return { ...state, selectedReport: action.payload };

    case "update_params":
      return {
        ...state,
        reportParams: { ...state.reportParams, ...action.payload },
      };

    case "toggle_preview":
      return { ...state, showPreview: action.payload };

    default:
      return state;
  }
};

export const ReportProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reportReducer, initialState)
  return (
    <ReportContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context)
    throw new Error("useReportContext must be used within a ReportProvider");
  return context;
};
