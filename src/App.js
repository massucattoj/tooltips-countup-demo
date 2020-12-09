import React, { forwardRef } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import CountUp, { useCountUp } from 'react-countup';

import './App.css';

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow'}}>Tooltip React Component</span>
}

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Tooltip in a Child Component</div>
      <div>Using forwardRef</div>
    </div>
  )
})

function App() {

  const { countUp, start, pauseResume, reset, update} = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  })

  return (
    <div className="App">
      
      <h2>
        Simples exemplo de como se utilizar Tooltips em React utilizando
        a lib 'tippy.js'
      </h2>


      <div style={{ paddingBottom: '20px', paddingTop: 20}}>
        <Tippy placement={'right'} arrow={false} delay={1000} content="Basic tooltip">
          <div className="button">
            <strong>Simple Tooltip</strong>
          </div>
        </Tippy>
      </div>

      {/* Tooltips tambem aceitam components html como conteudo */}
      <div style={{ paddingBottom: '20px'}}>
        <Tippy content={<span style={{ color: 'orange'}}>Colored HTML</span>}>
          <div className="button" style={{background: '#9875c2'}}>
            <strong>Colored Tooltip (HTML)</strong>
          </div>
        </Tippy>
      </div>

      {/* Tooltips tambem aceitam components components react */}
      <div style={{ paddingBottom: '20px'}}>
        <Tippy content={<ColoredTooltip/>}>
        <div className="button" style={{background: '#981025'}}>
            <strong>Colored Component (React))</strong>
          </div>
        </Tippy>
      </div>

      {/* Children component => Need to use forwardRef */}
      <div style={{ paddingBottom: '20px'}}>
        <Tippy content={<ColoredTooltip/>}>
          <CustomChild />          
        </Tippy>
      </div>
      <p>------------------------------------------------------------------</p>   
      <h2>
        Utilizando a lib 'react-countup'
      </h2>
      <div className="countUp" style={{display: 'flex', flexDirection: 'column'}}>

        <div>
          <h3>{countUp}</h3>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={pauseResume}>Pause/Resume</button>
          <button onClick={() => update(2000)}>Update to 2000</button>

        </div>
        <h3 style={{margin: '5'}}>
          <span>Default: </span>
          <CountUp end={300} />
          <br/>
          
          <span>Default in 5s: </span>
          <CountUp end={300} duration={5} />
        </h3>
                
        <h3>          
          <span>Start and end point with duration: </span>
          <CountUp end={1500} duration={5} start={500} />
        </h3>

        <h3>
          <span>Adding prefix/suffix and decimals</span>
          <br/>
          <CountUp end={1000} duration={5} prefix='$' decimals={2} />
          <br/>
          <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
        </h3>

         
      </div>


    </div>
  );
}

export default App;
