import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-DmM0KDA7.js";import{v as C}from"./v4-CtRu48qb.js";import{P as f,T as S}from"./Timer-CU4HkZ3C.js";const{addons:j}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:w}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:g}=__STORYBOOK_MODULE_GLOBAL__;var x="storybook/actions",D=`${x}/action-event`,I={depth:10,clearOnStoryChange:!0,limit:50},k=(t,r)=>{let e=Object.getPrototypeOf(t);return!e||r(e)?e:k(e,r)},P=t=>!!(typeof t=="object"&&t&&k(t,r=>/^Synthetic(?:Base)?Event$/.test(r.constructor.name))&&typeof t.persist=="function"),A=t=>{if(P(t)){let r=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));r.persist();let e=Object.getOwnPropertyDescriptor(r,"view"),o=e==null?void 0:e.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(r,"view",{...e,value:Object.create(o.constructor.prototype)}),r}return t},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?C():Date.now().toString(36)+Math.random().toString(36).substring(2);function V(t,r={}){let e={...I,...r},o=function(...a){var _,y;if(r.implicit){let s=(_="__STORYBOOK_PREVIEW__"in g?g.__STORYBOOK_PREVIEW__:void 0)==null?void 0:_.storyRenders.find(m=>m.phase==="playing"||m.phase==="rendering");if(s){let m=!((y=window==null?void 0:window.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),b=new w({phase:s.phase,name:t,deprecated:m});if(m)console.warn(b);else throw b}}let c=j.getChannel(),n=W(),i=5,l=a.map(A),d=a.length>1?l:l[0],O={id:n,count:0,data:{name:t,args:d},options:{...e,maxDepth:i+(e.depth||3),allowFunction:e.allowFunction||!1}};c.emit(D,O)};return o.isAction=!0,o.implicit=r.implicit,o}function v({initialTime:t=60,autoStart:r=!1,endTime:e=0,onFinished:o}){const[a,c]=T.useState(t),[n,i]=T.useState(r),l=T.useRef(null),d=t>e?"down":"up";return T.useEffect(()=>{if(n)return l.current=setInterval(()=>{c(s=>n?s===e?(n&&(i(!1),o==null||o()),e):d==="down"?s-1:s+1:s)},1e3),()=>clearInterval(l.current)},[n,d,e,o]),{time:a,startTimer:()=>i(()=>!0),stopTimer:()=>i(()=>!1),resetTimer:()=>c(()=>(i(()=>!1),t))}}v.propTypes={initialTime:f.number,autoStart:f.bool,endTime:f.number,onFinished:f.func};const Y={title:"Timer/Timer&Hook",component:S,argTypes:{initialTime:{control:{type:"number",min:0}},endTime:{control:{type:"number",min:0}},frontStrokeColor:{control:"color"},backStrokeColor:{control:"color"},timeDisplayColor:{control:"color"},strokeWidth:{control:{type:"number",min:1}},useWarningColors:{control:"boolean"},onFinished:{table:{disable:!0}}}},B=t=>{const{initialTime:r,endTime:e,onFinished:o}=t,{time:a,startTimer:c,stopTimer:n,resetTimer:i}=v({initialTime:r,autoStart:!1,endTime:e,onFinished:o});return p.jsx("div",{className:"my-timer",style:{width:"200px",height:"200px"},children:p.jsxs(S,{time:a,...t,children:[p.jsx("button",{onClick:c,children:"Start"}),p.jsx("button",{onClick:n,children:"Stop"}),p.jsx("button",{onClick:i,children:"Reset"})]})})},u=B.bind({});u.args={initialTime:60,endTime:0,frontStrokeColor:"green",backStrokeColor:"gray",timeDisplayColor:"black",strokeWidth:4,useWarningColors:!0,onFinished:V("onFinished")};var h,E,R;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const {
    initialTime,
    endTime,
    onFinished
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
    onFinished
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
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const M=["Test"];export{u as Test,M as __namedExportsOrder,Y as default};
