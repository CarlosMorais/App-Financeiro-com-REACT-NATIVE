import {
    cloth_icon,
} from './icons';
import { COLORS } from "./theme";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCar, faUtensils, faUserGraduate, faHandHoldingHeart, faGlobe } from '@fortawesome/free-solid-svg-icons';
import util from "../util";
const confirmStatus = "C"
const pendingStatus = "P"

function totalReceipt() {
    let total = 0;
    receipt.map((item) => {
        total += item.total;
    })

    return total;
}

function totalExpenditure() {
    let total = 0;
    expensesList().map((item) => {
        total += item.total;
    })

    return total;
}

function totalExpensesTheCategory(idCategory) {
    let total = 0;
    expensesList().map((item) => {
        if (dataCategory(item.idCategory).id == idCategory)
            total += item.total;
    })

    return total;
}

function DFC(month, year) {
    return [
        {
            recept: totalReceipt() + util.getRandomInt(0, 15000),
            expense: totalExpenditure() + util.getRandomInt(0, 15000),
            label: `${util.monthInAcronyms(month - 5 < 0 ? (month - 5 + 12) : month - 5).toUpperCase()}\n${month - 5 < 0 ? year - 1 : year}`,
        }, {
            recept: totalReceipt() + util.getRandomInt(0, 18000),
            expense: totalExpenditure() + util.getRandomInt(0, 18000),
            label: `${util.monthInAcronyms(month - 4 < 0 ? (month - 4 + 12) : month - 4).toUpperCase()}\n${month - 4 < 0 ? year - 1 : year}`,
        }, {
            recept: totalReceipt() + util.getRandomInt(0, 24000),
            expense: totalExpenditure() + util.getRandomInt(0, 24000),
            label: `${util.monthInAcronyms(month - 3 < 0 ? (month - 3 + 12) : month - 3).toUpperCase()}\n${month - 3 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(0, 26000),
            expense: totalExpenditure() + util.getRandomInt(0, 26000),
            label: `${util.monthInAcronyms(month - 2 < 0 ? (month - 2 + 12) : month - 2).toUpperCase()}\n${month - 2 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(20000, 28000),
            expense: totalExpenditure() + util.getRandomInt(0, 25000),
            label: `${util.monthInAcronyms(month - 1 < 0 ? (month - 1 + 12) : month - 1).toUpperCase()}\n${month - 1 < 0 ? year - 1 : year}`,
        },
        {
            recept: totalReceipt() + util.getRandomInt(25555, 35000),
            expense: totalExpenditure() + util.getRandomInt(15000, 25555),
            label: `${util.monthInAcronyms(month).toUpperCase()}\n${year}`,
        }
    ]
}

function balanceMonth(month, year) {
    return [
        {
            recept: totalReceipt(),
            expense: totalExpenditure(),
            label: `${util.monthInText(month).toUpperCase()} DE ${year}`,
        }
    ]
}

function dataCategory(idCategory) {
    return categories.filter((category) => (category.id == idCategory))[0];
}

function categoryName(idCategory) {
    const data = dataCategory(idCategory);
    return data.name;
}

export const categories = [
    {
        id: 1,
        name: "Estudos",
        icon: faUserGraduate,
        color: COLORS.darkgreen,
    },
    {
        id: 2,
        name: "Alimentação",
        icon: faUtensils,
        color: COLORS.blue,
    },
    {
        id: 3,
        name: "Transporte",
        icon: faCar,
        color: COLORS.gold,
    },
    {
        id: 4,
        name: "Saúde e Bem Estar",
        icon: faHandHoldingHeart,
        color: COLORS.purple,
    },
    {
        id: 5,
        name: "Outros",
        icon: faGlobe,
        color: COLORS.red,
    }
];

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

function expensesList() {
    const expenses = [
        {
            id: 1,
            idCategory: 1,
            date: util.randomDate(-30),
            title: "Pós-graduação",
            description: "Pós-graduação",
            location: "Hardward",
            total: util.getRandomInt(650, 1900) * 0.95,
            status: pendingStatus
        },
        {
            id: 2,
            idCategory: 1,
            date: util.randomDate(-30),
            title: "Livros de Javascript",
            description: "Livros de Javascript",
            location: "Avenida Paulista' Book Store",
            total: util.getRandomInt(30, 40) * 0.95,
            status: confirmStatus
        },
        {
            id: 3,
            idCategory: 1,
            date: util.randomDate(-30),
            title: "Livros de PHP",
            description: "Livros de PHP",
            location: "Avenida Paulista' Book Store",
            total: 30.00,
            status: confirmStatus
        },
        {
            id: 4,
            idCategory: 1,
            date: util.randomDate(-30),
            title: "Livros de I.A.",
            description: "Livros de Inteligência Artificial",
            location: "Avenida Paulista' Book Store",
            total: util.getRandomInt(100, 120) * 0.95,
            status: confirmStatus
        },
        {
            id: 5,
            idCategory: 2,
            date: util.randomDate(-30),
            title: "Vitaminas",
            description: "Polivitamínico de A-Z",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(35, 40) * 0.95,
            status: pendingStatus,
        },
        {
            id: 6,
            idCategory: 2,
            date: util.randomDate(-30),
            title: "Proteína",
            description: "Proteína em pó",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(40, 45) * 0.95,
            status: confirmStatus,
        },
        {
            id: 7,
            idCategory: 2,
            date: util.randomDate(-30),
            title: "Supermercado",
            description: "Compras de supermercado do mês",
            location: "Avenida Paulista' Hipermarket",
            total: util.getRandomInt(900, 1000) * 0.95,
            status: confirmStatus,
        },
        {
            id: 8,
            idCategory: 3,
            date: util.randomDate(-30),
            title: "Combustível",
            description: "Gazolina",
            location: "Avenida Paulista' Posto Ipiranga",
            total: util.getRandomInt(120, 150) * 0.95,
            status: confirmStatus,
        },
        {
            id: 9,
            idCategory: 3,
            date: util.randomDate(-30),
            title: "Combustível",
            description: "Gazolina",
            location: "Avenida Paulista' Posto Ipiranga",
            total: util.getRandomInt(120, 130) * 0.95,
            status: confirmStatus,
        },
        {
            id: 10,
            idCategory: 3,
            date: util.randomDate(-30),
            title: "Combustível",
            description: "Alcool",
            location: "Avenida Paulista' Posto Ipiranga",
            total: util.getRandomInt(90, 100) * 0.95,
            status: confirmStatus,
        },
        {
            id: 11,
            idCategory: 3,
            date: util.randomDate(-30),
            title: "Oficina",
            description: "Troca de óleo",
            location: "Avenida Paulista' Posto Ipiranga",
            total: util.getRandomInt(200, 250) * 0.95,
            status: pendingStatus,
        },
        {
            id: 12,
            idCategory: 4,
            date: util.randomDate(-30),
            title: "Skin Care",
            description: "Skin care",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(50, 55) * 0.95,
            status: pendingStatus,
        },
        {
            id: 13,
            idCategory: 4,
            date: util.randomDate(-30),
            title: "Loção",
            description: "Loção",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(43, 48) * 0.95,
            status: confirmStatus,
        },
        {
            id: 14,
            idCategory: 4,
            date: util.randomDate(-30),
            title: "Máscara falsa",
            description: "Máscara falsa",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(35, 42) * 0.95,
            status: pendingStatus,
        },
        {
            id: 15,
            idCategory: 4,
            date: util.randomDate(-30),
            title: "Creme protetor solar",
            description: "Creme protetor solar",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(123, 153) * 0.95,
            status: pendingStatus,
        },
        {
            id: 16,
            idCategory: 4,
            date: util.randomDate(-30),
            title: "Remédios",
            description: "Compra de remédios",
            location: "Avenida Paulista' Pharmacy",
            total: util.getRandomInt(145, 175) * 0.95,
            status: pendingStatus,
        },
        {
            id: 17,
            idCategory: 5,
            date: util.randomDate(-30),
            title: "Associação de ginásio",
            description: "Taxa mensal",
            location: "Avenida Paulista' Gym",
            total: util.getRandomInt(75, 95) * 0.95,
            status: pendingStatus,
        },
        {
            id: 18,
            idCategory: 5,
            date: util.randomDate(-30),
            title: "Luvas",
            description: "Equipamento de ginástica",
            location: "Avenida Paulista' Gym",
            total: util.getRandomInt(43, 55) * 0.95,
            status: confirmStatus,
        },
        {
            id: 19,
            idCategory: 5,
            date: util.randomDate(-30),
            title: "Camiseta",
            description: "Camiseta de cor lisa",
            location: "Avenida Paulista' Mall",
            total: util.getRandomInt(15, 25) * 0.95,
            status: pendingStatus,
        },
        {
            id: 20,
            idCategory: 5,
            date: util.randomDate(-30),
            title: "Jeans",
            description: "Jeans azul",
            location: "Avenida Paulista' Mall",
            total: util.getRandomInt(35, 95) * 0.95,
            status: confirmStatus,
        },
    ]
    return expenses.sort((a, b) => new Date(a.date) < new Date(b.date));
}

export default {
    receipt,
    categories,
    expensesList,
    dataCategory,
    categoryName,
    totalReceipt,
    totalExpenditure,
    totalExpensesTheCategory,
    DFC,
    balanceMonth,
}