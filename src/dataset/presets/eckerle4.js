/*
URL: https://www.itl.nist.gov/div898/strd/nls/data/eckerle4.shtml
NIST/ITL StRD
Dataset Name:  Eckerle4          (Eckerle4.dat)

File Format:   ASCII
               Starting Values   (lines 41 to 43)
               Certified Values  (lines 41 to 48)
               Data              (lines 61 to 95)

Procedure:     Nonlinear Least Squares Regression

Description:   These data are the result of a NIST study involving
               circular interference transmittance.  The response
               variable is transmittance, and the predictor variable
               is wavelength.


Reference:     Eckerle, K., NIST (197?).
               Circular Interference Transmittance Study.






Data:          1 Response Variable  (y = transmittance)
               1 Predictor Variable (x = wavelength)
               35 Observations
               Higher Level of Difficulty
               Observed Data

Model:         Exponential Class
               3 Parameters (b1 to b3)

               y = (b1/b2) * exp[-0.5*((x-b3)/b2)**2]  +  e



          Starting values                  Certified Values

        Start 1     Start 2           Parameter     Standard Deviation
  b1 =     1           1.5         1.5543827178E+00  1.5408051163E-02
  b2 =    10           5           4.0888321754E+00  4.6803020753E-02
  b3 =   500         450           4.5154121844E+02  4.6800518816E-02

Residual Sum of Squares:                    1.4635887487E-03
Residual Standard Deviation:                6.7629245447E-03
Degrees of Freedom:                                32
Number of Observations:                            35
*/

const points = [
  [0.0001575, 400.0],
  [0.0001699, 405.0],
  [0.000235, 410.0],
  [0.0003102, 415.0],
  [0.0004917, 420.0],
  [0.000871, 425.0],
  [0.0017418, 430.0],
  [0.00464, 435.0],
  [0.0065895, 436.5],
  [0.0097302, 438.0],
  [0.0149002, 439.5],
  [0.023731, 441.0],
  [0.0401683, 442.5],
  [0.0712559, 444.0],
  [0.1264458, 445.5],
  [0.2073413, 447.0],
  [0.2902366, 448.5],
  [0.3445623, 450.0],
  [0.3698049, 451.5],
  [0.3668534, 453.0],
  [0.3106727, 454.5],
  [0.2078154, 456.0],
  [0.1164354, 457.5],
  [0.0616764, 459.0],
  [0.03372, 460.5],
  [0.0194023, 462.0],
  [0.0117831, 463.5],
  [0.0074357, 465.0],
  [0.0022732, 470.0],
  [0.00088, 475.0],
  [0.0004579, 480.0],
  [0.0002345, 485.0],
  [0.0001586, 490.0],
  [0.0001143, 495.0],
  [0.000071, 500.0],
]

export default {
  id: 'eckerle4',
  name: 'circular interference transmittance',
  mutable: false,
  equations: [
    'y = \\frac{C_1}{C_2}\\exp\\left(\\frac{-\\left(x-C_3\\right)^2}{2C_2^2}\\right)',
  ],
  // array of column indices of the points matrix
  inputs: [1],
  // array of column indices of the points matrix
  outputs: [0],
  // labels for each column of the points matrix
  labels: ['y', 'x'],
  points,
}
