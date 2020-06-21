import React from 'react'
import { useSelector } from 'react-redux'
import { useMeasure } from '../../../hooks'
import { isAboutOpenSelector } from '../../selectors'
import Divider from '../Divider'
import { Wrapper } from './style'

const About = () => {
  const isOpen = useSelector(isAboutOpenSelector)
  const [bind, size] = useMeasure()

  return (
    <Wrapper height={size.height} isOpen={isOpen}>
      <div {...bind}>
        <h1>About dCGP</h1>
        <h2>What is this?</h2>
        <p>
          Differentiable Genetic Cartesian Programming (dCGP) is a newly
          developed machine learning tool that allows to perform symbolic
          regression on data. In simple terms: you give it data and it generates
          a formula of minimum error describing the mathematical relations.
        </p>
        <details>
          <summary>
            <h2>Why do we care?</h2>
          </summary>
          <p>
            Enabling access to space requires a lot of engineering effort and
            tough tests. In our laboratories at the European Space Agency, each
            satellite is examined by simulating the extreme conditions that
            appear during launch (acceleration, vibration) and within orbit
            (vacuum, extreme temperatures, etc.). For example, the data
            collected from our laboratories helps us to understand how materials
            will react to these conditions (expansion, contraction, rupture),
            how energy or heat gets dissipated, how much thrust is needed to
            realign a satellite and much more.
          </p>
          <p>
            While standard machine learning approaches like neural networks can
            take this data and perform regression to extrapolate and interpolate
            the behaviour, the neural network itself is difficult to understand,
            which makes it also difficult to really trust. In contrast, dCGP
            provides the advantage that it generates explicit formulas that can
            be much easier understood and studied by our scientists and
            engineers. Our software thus provides a form of explainable AI,
            which can be applied to any supervised learning task.
          </p>
        </details>
        <details>
          <summary>
            <h2>How does it work?</h2>
          </summary>
          <p>
            Our dCGP is based on the CGP (Cartesian Genetic Programming)
            encoding, a representation of a computational graph. Inputs are
            provided via input-nodes that are connected to other nodes arranged
            in rows and columns. Each of those nodes represents an elementary
            algebraic operation called "kernel" (for example addition,
            multiplication or a sine function). These kernels take their
            incoming values, compute the result und forward it to the next node
            until the output node is reached and the formula can be
            reconstructed.
          </p>
          <p>
            The formulas represented by dCGP should not be random but allow to
            infer some target value of the data (for example, the outcome of an
            experiment or measurements) as accurately as possible. Thus, the
            interconnections of the nodes and the deployed kernels need to be
            optimised by a mu+lambda evolutionary strategy, until the error
            between the generated formula and the expected outcome is minimal.
          </p>
          <p>
            If we look at mathematical expression, we often find natural
            constants such as pi (3.14159...) or e (2.71828...) naturally
            appearing. In applied mathematics, many unknown constants can
            influence the outcome of your experiments and is a difficult task to
            determine their exact values. How can we find the right constants
            while we are searching for the best formula? Gradient descent is
            another algorithm that can work on dCGP: because dCGP is
            differential, it is not only approximating the target formula, but
            also its derivatives! By taking the derivatives of our target
            formula with respect to some initial constants (obtained by a rough
            guess), the best fitting value of these constants can be found with
            gradient descent. Thus, dCGP gives you a formula of low error
            containing the best fitting constants.
          </p>
        </details>
        <details>
          <summary>
            <h2>How to use the website?</h2>
          </summary>
          <p>
            The website provides an easy interface to explore the power of dCGP.
            You can choose one of our pre-selected datasets to get started. The
            label-equation shows you the hidden true formula that generated the
            data or was fitted to it. Now, you can select the number of
            computational nodes your dCGP expression should have, the arity
            (incoming connections) of each node and the levels-back, the maximum
            allowed number of columns that one connection can jump over. If your
            formula has some constants, add guesses for them and provide the
            kernels you want to use.
          </p>
          <p>
            The algorithm section allows you to change between the evolutionary
            strategy (mu+lambda) and gradient descent. Gradient descent is only
            available if you have included constants. The parameters mu and
            lambda are deployed by the evolutionary strategy: mu parents are
            kept (size of the population) and lambda offspring is created by
            mutations at each iteration of the algorithm. Out of those mu +
            lambda candidate formulas, the mu best ones (lowest mean square
            error) are selected for the next iteration and the algorithm
            continues, continuously lowering the error. Gradient descent lowers
            the error not by mutating candidate solutions but by finding better
            constants.
          </p>
          <p>
            The results of the optimisation are shown in the "Equations"
            section, where the predicted equation marks the result. As these
            equations can be quite long, an algebraic simplification based on
            heuristics can be applied (increasing the computation time). The
            final result can be copied conveniently in LaTeX-format. A fit of
            the data is shown in the last section. This plot shows only the
            relation between one input and one output (y = f(x)) but if your
            data is multi-dimensional, you can select which variables to display
            in the corresponding boxes.
          </p>
          <p>
            Lastly, you can upload your own data and experiment with dCGP. Since
            the actual software runs locally within your machine and not on our
            servers, we never get to see your data: we promise! Just select
            "Upload custom data" and select a .csv-file. Your data can have one
            row of header describing your columns, but should otherwise only
            contain numerical values, separated by comma. Please make sure your
            .csv-file is not corrupted or has missing values (dCGP puts zeros in
            places where it thinks that data is missing, but if your data is too
            messy, you might only see "NaN" as loss).
          </p>
        </details>
        <details>
          <summary>
            <h2>Where to find more?</h2>
          </summary>
          <p>
            This web application shows only a small part of what dCGP can truly
            do. The complete software is available as an open source software
            project implemented in C++ and Python on{' '}
            <a href="https://github.com/darioizzo/dcgp">Github</a>. You can read
            the <a href="http://darioizzo.github.io/dcgp/">documentation</a> or
            our publication
          </p>
          <ul>
            <li>
              Dario Izzo, Francesco Biscani, and Alessio Mereta.{' '}
              <a href="https://arxiv.org/pdf/1611.04766v1.pdf">
                Differentiable Genetic Programming
              </a>
              . arXiv preprint arXiv:1611.04766 (2016).
            </li>
          </ul>
          <p>to learn more about dCGP.</p>
        </details>
        <details>
          <summary>
            <h2>Who did this?</h2>
          </summary>
          <p>
            This web application was developed and designed by Mike Heddes under
            the supervision of Marcus Märtens, working at the Advanced Concepts
            Team of the <a href="https://www.esa.int">European Space Agency</a>{' '}
            (ESA).
          </p>
          <p>
            The{' '}
            <a href="https://www.esa.int/gsp/ACT/index.html">
              Advanced Concepts Team
            </a>{' '}
            is the internal research think-tank of ESA, performing
            multi-disciplinary research for space beyond the programmatic
            horizon of ESA. This software is part of our{' '}
            <a href="http://www.esa.int/gsp/ACT/resources/software.html">
              open source software portfolio
            </a>
            .
          </p>
          <p>
            The original software (dCGP) was developed by Dario Izzo in C++ and
            Python and was ported to WebAssembly for JavaScript by Mike Heddes.
            The code of this webpage and the corresponding application is
            available on <a href="https://esa.github.io/dcgp-web/">Github</a>.
          </p>
          <p>
            The preselected datasets have been taken from NIST's Information
            Technology Laboratory{' '}
            <a href="https://www.itl.nist.gov/div898/strd/nls/nls_main.shtml">
              nonlinear regression benchmark
            </a>
            .
          </p>
          <p>
            This web application is provided as is and without any warranty or
            guarantees.
          </p>
        </details>
        <Divider css="margin-top: 30px;" />
      </div>
    </Wrapper>
  )
}

export default About
