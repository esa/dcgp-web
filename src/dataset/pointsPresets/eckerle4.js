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
  { y: 0.0001575, x: 400.0 },
  { y: 0.0001699, x: 405.0 },
  { y: 0.000235, x: 410.0 },
  { y: 0.0003102, x: 415.0 },
  { y: 0.0004917, x: 420.0 },
  { y: 0.000871, x: 425.0 },
  { y: 0.0017418, x: 430.0 },
  { y: 0.00464, x: 435.0 },
  { y: 0.0065895, x: 436.5 },
  { y: 0.0097302, x: 438.0 },
  { y: 0.0149002, x: 439.5 },
  { y: 0.023731, x: 441.0 },
  { y: 0.0401683, x: 442.5 },
  { y: 0.0712559, x: 444.0 },
  { y: 0.1264458, x: 445.5 },
  { y: 0.2073413, x: 447.0 },
  { y: 0.2902366, x: 448.5 },
  { y: 0.3445623, x: 450.0 },
  { y: 0.3698049, x: 451.5 },
  { y: 0.3668534, x: 453.0 },
  { y: 0.3106727, x: 454.5 },
  { y: 0.2078154, x: 456.0 },
  { y: 0.1164354, x: 457.5 },
  { y: 0.0616764, x: 459.0 },
  { y: 0.03372, x: 460.5 },
  { y: 0.0194023, x: 462.0 },
  { y: 0.0117831, x: 463.5 },
  { y: 0.0074357, x: 465.0 },
  { y: 0.0022732, x: 470.0 },
  { y: 0.00088, x: 475.0 },
  { y: 0.0004579, x: 480.0 },
  { y: 0.0002345, x: 485.0 },
  { y: 0.0001586, x: 490.0 },
  { y: 0.0001143, x: 495.0 },
  { y: 0.000071, x: 500.0 },
].sort((a, b) => a.x - b.x)

export default {
  equation:
    'y = \\frac{C_1}{C_2}\\exp\\left(\\frac{-\\left(x-C_3\\right)^2}{2C_2^2}\\right)',
  inputs: ['x'],
  outputs: ['y'],
  points,
}
