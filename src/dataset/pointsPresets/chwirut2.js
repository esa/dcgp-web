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
  { y: 92.9, x: 0.5 },
  { y: 57.1, x: 1.0 },
  { y: 31.05, x: 1.75 },
  { y: 11.5875, x: 3.75 },
  { y: 8.025, x: 5.75 },
  { y: 63.6, x: 0.875 },
  { y: 21.4, x: 2.25 },
  { y: 14.25, x: 3.25 },
  { y: 8.475, x: 5.25 },
  { y: 63.8, x: 0.75 },
  { y: 26.8, x: 1.75 },
  { y: 16.4625, x: 2.75 },
  { y: 7.125, x: 4.75 },
  { y: 67.3, x: 0.625 },
  { y: 41.0, x: 1.25 },
  { y: 21.15, x: 2.25 },
  { y: 8.175, x: 4.25 },
  { y: 81.5, x: 0.5 },
  { y: 13.12, x: 3.0 },
  { y: 59.9, x: 0.75 },
  { y: 14.62, x: 3.0 },
  { y: 32.9, x: 1.5 },
  { y: 5.44, x: 6.0 },
  { y: 12.56, x: 3.0 },
  { y: 5.44, x: 6.0 },
  { y: 32.0, x: 1.5 },
  { y: 13.95, x: 3.0 },
  { y: 75.8, x: 0.5 },
  { y: 20.0, x: 2.0 },
  { y: 10.42, x: 4.0 },
  { y: 59.5, x: 0.75 },
  { y: 21.67, x: 2.0 },
  { y: 8.55, x: 5.0 },
  { y: 62.0, x: 0.75 },
  { y: 20.2, x: 2.25 },
  { y: 7.76, x: 3.75 },
  { y: 3.75, x: 5.75 },
  { y: 11.81, x: 3.0 },
  { y: 54.7, x: 0.75 },
  { y: 23.7, x: 2.5 },
  { y: 11.55, x: 4.0 },
  { y: 61.3, x: 0.75 },
  { y: 17.7, x: 2.5 },
  { y: 8.74, x: 4.0 },
  { y: 59.2, x: 0.75 },
  { y: 16.3, x: 2.5 },
  { y: 8.62, x: 4.0 },
  { y: 81.0, x: 0.5 },
  { y: 4.87, x: 6.0 },
  { y: 14.62, x: 3.0 },
  { y: 81.7, x: 0.5 },
  { y: 17.17, x: 2.75 },
  { y: 81.3, x: 0.5 },
  { y: 28.9, x: 1.75 },
].sort((a, b) => a.x - b.x)

export default {
  equation: 'y = \\frac{\\exp(-C_1x)}{C_2+C_3x}',
  inputs: ['x'],
  outputs: ['y'],
  points,
}
