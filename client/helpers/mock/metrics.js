
export const system =  [
    {
        title:"PURCHASES",
        desc:"Number of Purchases",
        date:"30 days",
        rate: 17.344,
        status:false,
        percent:2,
        chart:[],
        type:'monitor',
        color:"green",
        bg:"darkblack",

    },
    {
        title:"UNIQUE VISITORS",
        desc:"Number of unique visitors",
        rate:"46,085",
        date:"30 days",
        status:false,
        percent:2,
        chart:[],
        type:'monitor',
        color:"green",

    },
    {
        title:"TOTAL VISITS",
        desc:"Number of total visitis from all visitors",
        rate:"62,083",
        date:"30 days",
        status:false,
        percent:2,
        chart:[],
        type:'monitor',
        color:"blue",
    },

]


export const finances = [
    {
        title:"AVG. PURCHASE VALUE",
        desc:"AVg amount spent by each customer",
        date:"25 days",
        cost:"152.46",
        chart:[],
        type:'finance',
    },

    {
        title:"UNIQUE PURCHASES",
        desc:"Number of different items sold",
        cost:"2.716",
        date:"25 days",
        chart:[],
        type:'finance',
    },

    {
        title:"REFUNDS",
        desc:"Value of refunded orders",
        cost:"4,523.11",
        date:"15 days",
        chart:[],
        type:'finance',
    },

]


 export const reports  = [

 ]

export const metrics = {}

export const payments  = [
    {
        statement: true,
        cost: {
            limit: "34.500.00",
            spent: "27.221.20",
            minimum: "7.311.95",
        }
    },
    {
        statement:false,
        cost :{
            limit:"34.500.00",
            spent:"38.819.20",
            minimum:"9.112.53",
        }
    }
]
export const balances  = {
    title:null,
    desc:null,
    income:'45,322.00',
    growth:'37.33',
    chart:[],
}

