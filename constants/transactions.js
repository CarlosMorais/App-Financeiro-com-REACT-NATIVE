import {
    baby_car,
    cloth_icon,
    education,
    food,
    healthcare,
    sports_icon,
} from './icons';
import { COLORS } from "./theme";
import util from "../util";
const confirmStatus = "C"
const pendingStatus = "P"

function totalReceipt(){
    let total = 0;
    receipt.map((item)=>{
        total += item.total;
    })

    return total;
}

function totalExpenditure(){
    let total = 0;
    expenses.map((item)=>{
        item.expenses.map((ex)=>{
            total += ex.total;
        })
    })

    return total;
}

function totalExpensesTheCategory(categoryName){
    let total = 0;
    expenses.map((category)=>{
        if(category.name == categoryName)
            category.expenses.map((ex)=>{
                total += ex.total;
            })
    })

    return total;
}

function DFC(month, year){
    return [
        {
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month - 5 < 0 ? (month - 5 + 12) : month - 5).toUpperCase()}\n${month - 5 < 0 ? year - 1 : year}`,
        },{
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month - 4 < 0 ? (month - 4 + 12) : month - 4).toUpperCase()}\n${month - 4 < 0 ? year - 1 : year}`,
        },{
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month - 3 < 0 ? (month - 3 + 12) : month - 3).toUpperCase()}\n${month - 3 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month - 2 < 0 ? (month - 2 + 12) : month - 2).toUpperCase()}\n${month - 2 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month - 1 < 0 ? (month - 1 + 12) : month - 1).toUpperCase()}\n${month - 1 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(0, 20000),
            expense: totalExpenditure() + util.getRandomInt(0, 20000),
            label: `${util.monthInAcronyms(month).toUpperCase()}\n${year}`,
        }
    ]
}

function balanceMonth(month, year){
    return [
        {
            recept: totalReceipt(),
            expense: totalExpenditure(),
            label: `${util.monthInText(month).toUpperCase()} DE ${year}`,
        }
    ]
}

export const receipt = [
    {
        id: 1,
        name: "Salário",
        total: 9876.54,
    },
    {
        id: 2,
        name: "Venda De Livros",
        total: 876.54,
    }
];

export const expenses = [
    {
        id: 1,
        name: "Estudos",
        icon: education,
        color: COLORS.darkgreen,
        expenses: [
            {
                id: 1,
                date: util.getCurrentDate(false),
                title: "Pós-graduação",
                description: "Pós-graduação",
                location: "Hardward",
                total: 1200.00,
                status: pendingStatus
            },
            {
                id: 2,
                date: util.getCurrentDate(false),
                title: "Livros de Javascript",
                description: "Livros de Javascript",
                location: "Avenida Paulista' Book Store",
                total: 40.00,
                status: confirmStatus
            },
            {
                id: 3,
                date: util.getCurrentDate(false),
                title: "Livros de PHP",
                description: "Livros de PHP",
                location: "Avenida Paulista' Book Store",
                total: 30.00,
                status: confirmStatus
            },
            {
                id: 4,
                date: util.getCurrentDate(false),
                title: "Livros de I.A.",
                description: "Livros de Inteligência Artificial",
                location: "Avenida Paulista' Book Store",
                total: 120.00,
                status: confirmStatus
            }
        ],
    },
    {
        id: 2,
        name: "Alimentação",
        icon: food,
        color: COLORS.blue,
        expenses: [
            {
                id: 5,
                date: util.getCurrentDate(false),
                title: "Vitaminas",
                description: "Polivitamínico de A-Z",
                location: "Avenida Paulista' Pharmacy",
                total: 35.00,
                status: pendingStatus,
            },
            {
                id: 6,
                date: util.getCurrentDate(false),
                title: "Proteína",
                description: "Proteína em pó",
                location: "Avenida Paulista' Pharmacy",
                total: 40.00,
                status: confirmStatus,
            },
            {
                id: 7,
                date: util.getCurrentDate(false),
                title: "Supermercado",
                description: "Compras de supermercado do mês",
                location: "Avenida Paulista' Hipermarket",
                total: 900.00,
                status: confirmStatus,
            },

        ],
    },
    {
        id: 3,
        name: "Transporte",
        icon: baby_car,
        color: COLORS.gold,
        expenses: [
            {
                id: 8,
                date: util.getCurrentDate(false),
                title: "Combustível",
                description: "Gazolina",
                location: "Avenida Paulista' Posto Ipiranga",
                total: 120.00,
                status: confirmStatus,
            },
            {
                id: 9,
                date: util.getCurrentDate(false),
                title: "Combustível",
                description: "Gazolina",
                location: "Avenida Paulista' Posto Ipiranga",
                total: 125.00,
                status: confirmStatus,
            },
            {
                id: 10,
                date: util.getCurrentDate(false),
                title: "Combustível",
                description: "Alcool",
                location: "Avenida Paulista' Posto Ipiranga",
                total: 97.50,
                status: confirmStatus,
            },
            {
                id: 11,
                date: util.getCurrentDate(false),
                title: "Oficina",
                description: "Troca de óleo",
                location: "Avenida Paulista' Posto Ipiranga",
                total: 250.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 4,
        name: "Saúde e Bem Estar",
        icon: healthcare,
        color: COLORS.purple,
        expenses: [
            {
                id: 12,
                date: util.getCurrentDate(false),
                title: "Skin Care",
                description: "Skin care",
                location: "Avenida Paulista' Pharmacy",
                total: 55.00,
                status: pendingStatus,
            },
            {
                id: 13,
                date: util.getCurrentDate(false),
                title: "Loção",
                description: "Loção",
                location: "Avenida Paulista' Pharmacy",
                total: 45.00,
                status: confirmStatus,
            },
            {
                id: 14,
                date: util.getCurrentDate(false),
                title: "Máscara falsa",
                description: "Máscara falsa",
                location: "Avenida Paulista' Pharmacy",
                total: 45.00,
                status: pendingStatus,
            },
            {
                id: 15,
                date: util.getCurrentDate(false),
                title: "Creme protetor solar",
                description: "Creme protetor solar",
                location: "Avenida Paulista' Pharmacy",
                total: 145.00,
                status: pendingStatus,
            },
            {
                id: 16,
                date: util.getCurrentDate(false),
                title: "Remédios",
                description: "Compra de remédios",
                location: "Avenida Paulista' Pharmacy",
                total: 150.00,
                status: pendingStatus,
            },
        ],
    },
    {
        id: 5,
        name: "Outros",
        icon: sports_icon,
        color: COLORS.red,
        expenses: [
            {
                id: 17,
                date: util.getCurrentDate(false),
                title: "Associação de ginásio",
                description: "Taxa mensal",
                location: "Avenida Paulista' Gym",
                total: 90.00,
                status: pendingStatus,
            },
            {
                id: 18,
                date: util.getCurrentDate(false),
                title: "Luvas",
                description: "Equipamento de ginástica",
                location: "Avenida Paulista' Gym",
                total: 45.00,
                status: confirmStatus,
            },
            {
                id: 19,
                date: util.getCurrentDate(false),
                title: "Camiseta",
                description: "Camiseta de cor lisa",
                location: "Avenida Paulista' Mall",
                total: 20.00,
                status: pendingStatus,
            },
            {
                id: 20,
                date: util.getCurrentDate(false),
                title: "Jeans",
                description: "Jeans azul",
                location: "Avenida Paulista' Mall",
                total: 50.00,
                status: confirmStatus,
            },
        ],
    },
]

export default {
    receipt,
    expenses,
    totalReceipt,
    totalExpenditure,
    totalExpensesTheCategory,
    DFC,
    balanceMonth,
}