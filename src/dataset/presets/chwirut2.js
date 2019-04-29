/*
URL: https://www.itl.nist.gov/div898/strd/nls/data/chwirut2.shtml
NIST/ITL StRD
Dataset Name:  Chwirut2          (Chwirut2.dat)

File Format:   ASCII
               Starting Values   (lines 41 to  43)
               Certified Values  (lines 41 to  48)
               Data              (lines 61 to 114)

Procedure:     Nonlinear Least Squares Regression

Description:   These data are the result of a NIST study involving
               ultrasonic calibration.  The response variable is
               ultrasonic response, and the predictor variable is
               metal distance.



Reference:     Chwirut, D., NIST (197?).
               Ultrasonic Reference Block Study.





Data:          1 Response  (y = ultrasonic response)
               1 Predictor (x = metal distance)
               54 Observations
               Lower Level of Difficulty
               Observed Data

Model:         Exponential Class
               3 Parameters (b1 to b3)

               y = exp(-b1*x)/(b2+b3*x)  +  e



          Starting values                  Certified Values

        Start 1     Start 2           Parameter     Standard Deviation
  b1 =   0.1         0.15          1.6657666537E-01  3.8303286810E-02
  b2 =   0.01        0.008         5.1653291286E-03  6.6621605126E-04
  b3 =   0.02        0.010         1.2150007096E-02  1.5304234767E-03

Residual Sum of Squares:                    5.1304802941E+02
Residual Standard Deviation:                3.1717133040E+00
Degrees of Freedom:                                51
Number of Observations:                            54

*/

const points = [
  [92.9, 0.5],
  [57.1, 1.0],
  [31.05, 1.75],
  [11.5875, 3.75],
  [8.025, 5.75],
  [63.6, 0.875],
  [21.4, 2.25],
  [14.25, 3.25],
  [8.475, 5.25],
  [63.8, 0.75],
  [26.8, 1.75],
  [16.4625, 2.75],
  [7.125, 4.75],
  [67.3, 0.625],
  [41.0, 1.25],
  [21.15, 2.25],
  [8.175, 4.25],
  [81.5, 0.5],
  [13.12, 3.0],
  [59.9, 0.75],
  [14.62, 3.0],
  [32.9, 1.5],
  [5.44, 6.0],
  [12.56, 3.0],
  [5.44, 6.0],
  [32.0, 1.5],
  [13.95, 3.0],
  [75.8, 0.5],
  [20.0, 2.0],
  [10.42, 4.0],
  [59.5, 0.75],
  [21.67, 2.0],
  [8.55, 5.0],
  [62.0, 0.75],
  [20.2, 2.25],
  [7.76, 3.75],
  [3.75, 5.75],
  [11.81, 3.0],
  [54.7, 0.75],
  [23.7, 2.5],
  [11.55, 4.0],
  [61.3, 0.75],
  [17.7, 2.5],
  [8.74, 4.0],
  [59.2, 0.75],
  [16.3, 2.5],
  [8.62, 4.0],
  [81.0, 0.5],
  [4.87, 6.0],
  [14.62, 3.0],
  [81.7, 0.5],
  [17.17, 2.75],
  [81.3, 0.5],
  [28.9, 1.75],
]

export default {
  id: 'chwirut2',
  name: 'ultrasonic reference block',
  mutable: false,
  equations: ['y = \\frac{\\exp(-C_1x)}{C_2+C_3x}'],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
