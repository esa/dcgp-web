export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const generatePredictionKeys = (inputKeys, outputKeys) => {
  // TODO: genereation of prediction keys sould be saver.
  // currently it could override a user specified key.
  // for now the '_PREDICTION_[dcgp]' appendix is unique enough
  const predictionKeys = outputKeys.map(key => key + '_PREDICTION')
  return predictionKeys
}
