import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-DmM0KDA7.js";import{P as c,T as h}from"./Timer-CU4HkZ3C.js";function y({initialTime:t=60,autoStart:u=!1,endTime:e=0,direction:i="down"}){if(typeof t!="number"||typeof e!="number")throw new Error("[useTimer] initialTime and endTime must be numbers.");if(t<0||e<0)throw new Error("[useTimer] Negative values were passed; this might cause unexpected behavior.");if(i==="down"&&e>t)throw new Error("[useTimer] endTime is larger than initialTime in 'down' mode; timer may behave oddly.");const[p,n]=l.useState(t),[s,a]=l.useState(u),d=l.useRef(null);return l.useEffect(()=>(d.current=setInterval(()=>{s&&n(m=>i==="down"?m<=e?e:m-1:e!==0&&m>=e?e:m+1)},1e3),()=>clearInterval(d.current)),[s]),{time:p,startTimer:()=>a(()=>!0),stopTimer:()=>a(()=>!1),resetTimer:()=>n(()=>t)}}y.propTypes={initialTime:c.number,autoStart:c.bool,endTime:c.number,direction:c.oneOf(["up","down"])};const E={title:"Timer/Timer&Hook",component:h,argTypes:{initialTime:{control:{type:"number",min:0}},endTime:{control:{type:"number",min:0}},frontStrokeColor:{control:"color"},backStrokeColor:{control:"color"},timeDisplayColor:{control:"color"},strokeWidth:{control:{type:"number",min:1}},useWarningColors:{control:"boolean"},direction:{control:{type:"select",options:["up","down"]}}}},k=t=>{const{initialTime:u,endTime:e,direction:i}=t,{time:p,startTimer:n,stopTimer:s,resetTimer:a}=y({initialTime:u,autoStart:!1,endTime:e,direction:i});return r.jsx("div",{className:"my-timer",style:{width:"200px",height:"200px"},children:r.jsxs(h,{time:p,...t,children:[r.jsx("button",{onClick:n,children:"Start"}),r.jsx("button",{onClick:s,children:"Stop"}),r.jsx("button",{onClick:a,children:"Reset"})]})})},o=k.bind({});o.args={initialTime:60,endTime:0,frontStrokeColor:"green",backStrokeColor:"gray",timeDisplayColor:"black",strokeWidth:4,useWarningColors:!0,direction:"down"};var T,b,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const {
    initialTime,
    endTime,
    direction
  } = args;
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer
  } = useTimer({
    initialTime,
    autoStart: false,
    endTime,
    direction
  });
  return <div className="my-timer" style={{
    width: '200px',
    height: '200px'
  }}>\r
            <Timer time={time} {...args}>\r
                <button onClick={startTimer}>Start</button>\r
                <button onClick={stopTimer}>Stop</button>\r
                <button onClick={resetTimer}>Reset</button>\r
            </Timer>\r
        </div>;
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const j=["Test"];export{o as Test,j as __namedExportsOrder,E as default};
