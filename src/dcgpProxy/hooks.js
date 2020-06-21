import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { inputsSelector, inputLabelsSelector } from "../dataset/selectors";
import { lossSelector } from "../evolution/selectors";
import { constantsSelector } from "../settings/selectors";
import { getPredictions, getEquations } from "./index";

export const usePredictions = (chromosome) => {
  const inputs = useSelector(inputsSelector);
  const constants = useSelector(constantsSelector);
  const loss = useSelector(lossSelector);

  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    if (loss === undefined) return;

    getPredictions({
      chromosome,
      inputs,
      constants,
    })
      .then(setPredictions)
      .catch((err) => {
        setPredictions([]);
      });
  }, [chromosome, constants, inputs, loss]);

  return predictions;
};

export const usePredictionEquations = (simplified = false, enabled) => {
  const inputLabels = useSelector(inputLabelsSelector);
  const constants = useSelector(constantsSelector);
  const loss = useSelector(lossSelector);

  const [equations, setEquations] = useState([]);

  useEffect(() => {
    if (loss === undefined || !enabled) {
      setEquations([]);
      return;
    }

    getEquations({
      inputLabels,
      constants,
      simplified,
    })
      .then(setEquations)
      .catch((err) => {
        setEquations([]);
      });
  }, [constants, enabled, inputLabels, loss, simplified]);

  return equations;
};
