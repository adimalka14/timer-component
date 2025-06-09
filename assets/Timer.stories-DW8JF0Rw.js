import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";import{T as l}from"./Timer-CU4HkZ3C.js";const u={title:"Timer/StaticTimer",component:l,argTypes:{time:{control:{type:"number",min:0}},initialTime:{control:{type:"number",min:0}},endTime:{control:{type:"number",min:0}},frontStrokeColor:{control:"color"},backStrokeColor:{control:"color"},timeDisplayColor:{control:"color"},strokeWidth:{control:{type:"number",min:1}},useWarningColors:{control:"boolean"}}},c=d=>t.jsx("div",{className:"my-timer",style:{width:"400px",height:"400px",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(l,{...d})}),e=c.bind({});e.args={time:50,initialTime:60,endTime:0,frontStrokeColor:"green",backStrokeColor:"gray",timeDisplayColor:"black",strokeWidth:4,useWarningColors:!0,direction:"down"};const r=c.bind({});r.args={time:15,initialTime:60,endTime:0,frontStrokeColor:"green",backStrokeColor:"transparent",timeDisplayColor:"black",strokeWidth:5,useWarningColors:!0,direction:"down"};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => <div className={'my-timer'} style={{
  width: '400px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>\r
        <Timer {...args} />\r
    </div>`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var s,a,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div className={'my-timer'} style={{
  width: '400px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>\r
        <Timer {...args} />\r
    </div>`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const h=["Interactive","finishedDown"];export{e as Interactive,h as __namedExportsOrder,u as default,r as finishedDown};
