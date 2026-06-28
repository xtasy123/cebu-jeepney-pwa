// Planning-grade templates. Validate against current LTFRB/LGU route authorizations before deployment.
export const ROUTES=[
{code:'04C',name:'Lahug – Carbon',stops:[['JY Square',10.3300,123.8970],['UP Cebu',10.3223,123.8989],['Ayala',10.3181,123.9044],['Gorordo',10.3135,123.9010],['Colon',10.2941,123.8974],['Carbon',10.2887,123.8993]]},
{code:'17B',name:'Apas – Carbon',stops:[['IT Park',10.3297,123.9066],['Waterfront',10.3262,123.9039],['Ayala',10.3181,123.9044],['Jones',10.3050,123.8958],['Colon',10.2941,123.8974],['Carbon',10.2887,123.8993]]},
{code:'14D',name:'Ayala – Colon',stops:[['Ayala',10.3181,123.9044],['Capitol',10.3168,123.8901],['Fuente',10.3103,123.8937],['Jones',10.3038,123.8959],['Colon',10.2941,123.8974]]},
{code:'03B',name:'Mabolo – Carbon',stops:[['Mabolo',10.3222,123.9118],['SM City Cebu',10.3111,123.9183],['Carreta',10.3080,123.9110],['Manalili',10.2950,123.9002],['Carbon',10.2887,123.8993]]},
{code:'12L',name:'Labangon – Ayala',stops:[['Labangon',10.3001,123.8790],['V Rama',10.3038,123.8825],['Fuente',10.3103,123.8937],['Capitol',10.3168,123.8901],['Ayala',10.3181,123.9044]]},
{code:'13C',name:'Talamban – Colon',stops:[['Talamban',10.3667,123.9172],['Country Mall',10.3460,123.9132],['Banilad',10.3400,123.9110],['IT Park',10.3297,123.9066],['Ayala',10.3181,123.9044],['Colon',10.2941,123.8974]]},
{code:'10H',name:'Bulacao – SM City',stops:[['Bulacao',10.2729,123.8544],['Punta Princesa',10.2897,123.8727],['Labangon',10.3001,123.8790],['Fuente',10.3103,123.8937],['Ayala',10.3181,123.9044],['SM City Cebu',10.3111,123.9183]]},
{code:'01K',name:'Urgello – Parkmall',stops:[['Urgello',10.3002,123.8900],['Jones',10.3040,123.8957],['Mango',10.3124,123.8978],['Ayala',10.3181,123.9044],['Mabolo',10.3222,123.9118],['Parkmall',10.3259,123.9353]]}
].map(r=>({...r,stops:r.stops.map(([name,lat,lng])=>({name,lat,lng}))}));

export const FARE={baseKm:4,base:15,perKm:1.8,label:'Traditional PUJ planning estimate'};
